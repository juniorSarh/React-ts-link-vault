import React, { useState } from "react";
import type { FormEvent } from "react";
import FormButton from "./FormButton";

export type LinkItem = {
  title: string;
  link: string;
  description: string;
  tags: string[];
};

const LS_KEY = "links";

export default function LinkForm({
  onAdd,
}: {
  onAdd?: (item: LinkItem) => void;
}) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tagsText, setTagsText] = useState("");

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

    try {
      const raw = localStorage.getItem(LS_KEY);
      const arr: LinkItem[] = raw ? JSON.parse(raw) : [];
      arr.push(item);
      localStorage.setItem(LS_KEY, JSON.stringify(arr));
      onAdd?.(item);
      setTitle("");
      setLink("");
      setDescription("");
      setTagsText("");
    } catch (err) {
      console.error("localStorage write failed", err);
      alert("Could not save to localStorage.");
    }
  };

  const handleCancel = () => {
    setTitle("");
    setLink("");
    setDescription("");
    setTagsText("");
  };

  return (
    <form className="linkform" onSubmit={handleSubmit} noValidate>
      <h3>Add a New Link</h3>

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
          placeholder="Code, Music, eat, etc."
        />
      </div>

      <div className="actions">
        <FormButton type="submit" variant="save">
          Save
        </FormButton>
        <FormButton type="button" variant="cancel" onClick={handleCancel}>
          Cancel
        </FormButton>
      </div>
    </form>
  );
}
