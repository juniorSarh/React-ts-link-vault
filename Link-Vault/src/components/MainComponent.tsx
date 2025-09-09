import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import LinkList from "./LinkList";
import type { LinkItem } from "./LinkForm";

const LS_KEY = "links";

export default function MainComponent() {
  const [links, setLinks] = useState<LinkItem[]>([]);

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

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <LinkForm onAdd={handleAdd} />
      <LinkList items={links} />
    </main>
  );
}
