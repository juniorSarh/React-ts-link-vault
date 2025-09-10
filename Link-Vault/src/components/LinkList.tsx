import React, { useState } from "react";
import FormButton from "./FormButton";
import type { LinkItem } from "./LinkForm";

type Props = {
  items: LinkItem[];
  onUpdate: (index: number, item: LinkItem) => void;
  onDelete: (index: number) => void;
};

type RowProps = {
  index: number;
  item: LinkItem;
  onUpdate: (index: number, item: LinkItem) => void;
  onDelete: (index: number) => void;
};

function LinkRow({ index, item, onUpdate, onDelete }: RowProps) {
  const [title, setTitle] = useState(item.title);
  const [link, setLink] = useState(item.link);
  const [description, setDescription] = useState(item.description);
  const [tagsText, setTagsText] = useState(item.tags?.join(", ") || "");

  const handleUpdate = () => {
    onUpdate(index, {
      title: title.trim(),
      link: link.trim(),
      description: description.trim(),
      tags: tagsText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    });
  };

  return (
    <tr>
      <td>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </td>
      <td>
        <input value={link} onChange={(e) => setLink(e.target.value)} />
      </td>
      <td>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td>
        <input
          value={tagsText}
          onChange={(e) => setTagsText(e.target.value)}
          placeholder="tag1, tag2"
        />
      </td>
      <td>
        <div className="linktable-actions">
          <FormButton type="button" variant="save" onClick={handleUpdate}>
            Update
          </FormButton>
          <FormButton
            type="button"
            variant="cancel"
            onClick={() => onDelete(index)}
          >
            Delete
          </FormButton>
        </div>
      </td>
    </tr>
  );
}

export default function LinkList({ items, onUpdate, onDelete }: Props) {
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
                <LinkRow
                  key={`${item.link}-${i}`}
                  index={i}
                  item={item}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
