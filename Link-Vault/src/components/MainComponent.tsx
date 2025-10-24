import { useEffect, useMemo, useState } from "react";
import LinkForm from "./LinkForm";
import LinkList from "./LinkList";
import type { LinkItem } from "./LinkForm";
import { filterLinks } from "../utils/filterLinks";
import { useToast } from "./toast-core";

const LS_KEY = "links";

export default function MainComponent({ query }: { query: string }) {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const { show } = useToast();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setLinks(Array.isArray(parsed) ? parsed : []);
    } catch {
      setLinks([]);
      show("Failed to load saved links.", { variant: "error" });
    }
  }, [show]);

  const filtered = useMemo(() => filterLinks(links, query), [links, query]);

  const saveToStorage = (next: LinkItem[]) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return true;
    } catch {
      return false;
    }
  };

  const handleAdd = (item: LinkItem) => {
    setLinks((prev) => {
      const next = [...prev, item];
      const ok = saveToStorage(next);
      show(ok ? "Saved successfully!" : "Save failed. Please try again.", {
        variant: ok ? "success" : "error",
      });
      return next;
    });
  };

  const handleUpdate = (index: number, item: LinkItem) => {
    setLinks((prev) => {
      const next = [...prev];
      next[index] = item;
      const ok = saveToStorage(next);
      show(ok ? "Updated successfully!" : "Update failed. Please try again.", {
        variant: ok ? "success" : "error",
      });
      return next;
    });
    setEditingIndex(null);
  };

  const handleDelete = (index: number) => {
    // ✅ Confirm before deleting
    const confirmDelete = window.confirm("Are you sure you want to delete this link?");
    if (!confirmDelete) return;

    setLinks((prev) => {
      const next = prev.filter((_, i) => i !== index);
      const ok = saveToStorage(next);
      show(ok ? "Deleted successfully!" : "Delete failed. Please try again.", {
        variant: ok ? "success" : "error",
      });
      return next;
    });
    setEditingIndex((curr) => (curr === index ? null : curr));
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => setEditingIndex(null);

  const editingItem =
    editingIndex !== null && links[editingIndex] ? links[editingIndex] : null;

  return (
    <main style={{ width: "80%", margin: "0 auto", padding: 16 }}>
      <LinkForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingIndex={editingIndex}
        editingItem={editingItem}
        onCancelEdit={cancelEdit}
      />
      <LinkList links={filtered} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
}
