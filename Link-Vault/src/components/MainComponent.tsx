import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import LinkList from "./LinkList";
import type { LinkItem } from "./LinkForm";

const LS_KEY = "links";

export default function MainComponent() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Load once from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setLinks(Array.isArray(parsed) ? parsed : []);
    } catch {
      setLinks([]);
    }
  }, []);

  // Add + persist
  const handleAdd = (item: LinkItem) => {
    setLinks((prev) => {
      const next = [...prev, item];
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  };

  // Update + persist
  const handleUpdate = (index: number, item: LinkItem) => {
    setLinks((prev) => {
      const next = [...prev];
      next[index] = item;
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  };

  // Delete + persist
  const handleDelete = (index: number) => {
    setLinks((prev) => {
      const next = prev.filter((_, i) => i !== index);
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
    // if we deleted the row being edited, exit edit mode
    setEditingIndex((curr) => (curr === index ? null : curr));
  };

  // Start editing: populate form
  const handleEdit = (index: number) => {
    setEditingIndex(index);
    // Form will prefill from editingItem prop
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => setEditingIndex(null);

  const editingItem =
    editingIndex !== null && links[editingIndex] ? links[editingIndex] : null;

  return (
    <main style={{width: '98%',height:'80%', margin: "0 auto", padding: 16 }}>
      <LinkForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingIndex={editingIndex}
        editingItem={editingItem}
        onCancelEdit={cancelEdit}
      />
      <LinkList items={links} onEdit={handleEdit} onDelete={handleDelete} />
    </main>
  );
}
