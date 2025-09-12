import React, { useEffect, useState } from "react";
import type { FormEvent } from "react";
import FormButton from "./FormButton";

export type LinkItem = {
  title: string;
  link: string;
  description: string;
  tags: string[];
};

type Props = {
  onAdd: (item: LinkItem) => void;
  onUpdate: (index: number, item: LinkItem) => void;

  editingIndex: number | null;
  editingItem: LinkItem | null;
  onCancelEdit: () => void;
};

export default function LinkForm({
  onAdd,
  onUpdate,
  editingIndex,
  editingItem,
  onCancelEdit,
}: Props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tagsText, setTagsText] = useState("");

  
  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title ?? "");
      setLink(editingItem.link ?? "");
      setDescription(editingItem.description ?? "");
      setTagsText((editingItem.tags ?? []).join(", "));
    } else {
      setTitle("");
      setLink("");
      setDescription("");
      setTagsText("");
    }
  }, [editingItem]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !link.trim()) {
      alert("Please fill in both Title and Link.");
      return;
    }
    const item: LinkItem = {
      title: title.trim(),
      link: link.trim(),
      description: description.trim(),
      tags: tagsText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    if (editingIndex !== null) {
      onUpdate(editingIndex, item);
      onCancelEdit(); // exit edit mode
    } else {
      onAdd(item);
    }

    // reset for next entry
    setTitle("");
    setLink("");
    setDescription("");
    setTagsText("");
  };

  const handleCancel = () => {
    // Clear fields; if in edit mode, also exit edit state
    setTitle("");
    setLink("");
    setDescription("");
    setTagsText("");
    if (editingIndex !== null) onCancelEdit();
  };

  const isEditing = editingIndex !== null;

  return (
    <form className="linkform" onSubmit={handleSubmit} noValidate>
      <h3>{isEditing ? "Update Link" : "Add A New Link"}</h3>

      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Link</label>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://example.com"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Tags (comma separated)</label>
        <input
          value={tagsText}
          onChange={(e) => setTagsText(e.target.value)}
          placeholder="code, eat, fun, etc"
        />
      </div>

      <div className="actions">
        <FormButton type="submit" variant="save">
          {isEditing ? "Update" : "Save"}
          
        </FormButton>
        <FormButton type="button" variant="cancel" onClick={handleCancel}>
          {isEditing ? "Cancel edit" : "Cancel"}
        </FormButton>
      </div>
    </form>
  );
}
