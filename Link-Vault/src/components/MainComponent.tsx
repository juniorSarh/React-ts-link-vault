import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import LinkList from "./LinkList";
import type { LinkItem } from "./LinkForm";

const LS_KEY = "links";

export default function MainComponent() {
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setLinks(Array.isArray(parsed) ? parsed : []);
    } catch {
      setLinks([]);
    }
  }, []);

  const handleAdd = (item: LinkItem) => {
    setLinks((prev) => {
      const next = [...prev, item];
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handleUpdate = (index: number, item: LinkItem) => {
    setLinks((prev) => {
      const next = [...prev];
      next[index] = item;
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  };

  const handleDelete = (index: number) => {
    setLinks((prev) => {
      const next = prev.filter((_, i) => i !== index);
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  };

  return (
    <main className="maincomponent">
      <LinkForm onAdd={handleAdd} />
      <LinkList items={links} onUpdate={handleUpdate} onDelete={handleDelete} />
    </main>
  );
}
