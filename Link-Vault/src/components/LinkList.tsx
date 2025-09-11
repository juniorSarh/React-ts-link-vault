import React from "react";
import FormButton from "./FormButton";
import type { LinkItem } from "./LinkForm";

type Props = {
  links: LinkItem[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};

export default function LinkList({ links, onEdit, onDelete }: Props) {
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
            {links.length === 0 ? (
              <tr>
                <td colSpan={5} className="linklist-empty">
                  No matching links.
                </td>
              </tr>
            ) : (
              links.map((item, i) => {
                const tagsText = Array.isArray(item.tags)
                  ? item.tags.join(", ")
                  : item.tags || "";

                return (
                  <tr key={item.link ? `${item.link}-${i}` : `row-${i}`}>
                    <td>{item.title}</td>
                    <td className="breakUrl">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={item.link}
                      >
                        Go to Website
                      </a>
                    </td>
                    <td>{item.description || ""}</td>
                    <td className="wrap">{tagsText}</td>
                    <td>
                      <div className="linktable-actions">
                        <FormButton
                          type="button"
                          variant="save"
                          onClick={() => onEdit(i)}
                          aria-label={`Update ${item.title}`}
                        >
                          Update
                        </FormButton>
                        <FormButton
                          type="button"
                          variant="cancel"
                          onClick={() => onDelete(i)}
                          aria-label={`Delete ${item.title}`}
                        >
                          Delete
                        </FormButton>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
