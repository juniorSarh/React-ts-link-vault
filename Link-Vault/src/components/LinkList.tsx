import React from "react";
import type { LinkItem } from "./LinkForm";

type Props = { items: LinkItem[] };

export default function LinkList({ items }: Props) {
  return (
    <div className="linklist">
      <h3>Links added: {items.length}</h3>

      {items.length === 0 ? (
        <p>No links saved yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Description</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={`${item.link}-${i}`}>
                <td>
                  <strong>{item.title}</strong>
                </td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </td>
                <td>{item.description || "-"}</td>
                <td>
                  {item.tags?.length ? (
                    <small>{item.tags.join(", ")}</small>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
