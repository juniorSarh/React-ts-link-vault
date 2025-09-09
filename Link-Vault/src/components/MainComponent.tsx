import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import LinkList from "./LinkList";
import type { LinkItem } from "./LinkForm";

const LS_KEY = "links";

export default function MainComponent() {

  const [refresh, setRefresh] = useState(0);

  
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) localStorage.setItem(LS_KEY, JSON.stringify([]));
    } catch (err) {
  
      console.warn("localStorage not available:", err);
    }
  }, []);

  
  const handleAdd = (_item: LinkItem) => {
    setRefresh((r) => r + 1);
  };

  
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === LS_KEY) setRefresh((r) => r + 1);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <LinkForm onAdd={handleAdd} />
      <LinkList key={refresh} />
    </main>
  );
}
