import React from "react";
import FormButton from "./FormButton";
import type { LinkItem } from "./LinkForm";

type Props = {
  items: LinkItem[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};

export default function LinkList({ items, onEdit, onDelete }: Props) {
  return (
    <section className="linklist">
      <h3>Link List</h3>
      <div className="linktable-wrapper">
        <table className="linktable">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="linklist-empty">
                  No links yet.
                </td>
              </tr>
            ) : (
              items.map((item, i) => (
                <tr key={`${item.link}-${i}`}>
                  <td>{item.title}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </td>
                  <td>{item.description}</td>
                  <td>{item.tags?.join(", ")}</td>
                  <td>
                    <div className="linktable-actions">
                      <FormButton
                        type="button"
                        variant="save"
                        onClick={() => onEdit(i)}
                      >
                        Update
                      </FormButton>
                      <FormButton
                        type="button"
                        variant="cancel"
                        onClick={() => onDelete(i)}
                      >
                        Delete
                      </FormButton>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
