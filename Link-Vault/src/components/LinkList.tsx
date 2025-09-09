import React from "react";
import type { LinkItem } from "./LinkForm";

const LS_KEY = "links";

export default function LinkList() {
  let items: LinkItem[] = [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    items = raw ? JSON.parse(raw) : [];
  } catch {
    items = [];
  }

  return (
    <div className="linklist">
      <h3>Saved Links</h3>
      {items.length === 0 ? (
        <p>No links saved yet.</p>
      ) : (
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <strong>{item.title}</strong>{" "}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
              {item.description && <p>{item.description}</p>}
              {item.tags?.length ? (
                <small>Tags: {item.tags.join(", ")}</small>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
