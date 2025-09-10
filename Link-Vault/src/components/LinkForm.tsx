import React, { useState } from "react";
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
};

export default function LinkForm({ onAdd }: Props) {
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
    onAdd(item);

    // reset
    setTitle("");
    setLink("");
    setDescription("");
    setTagsText("");
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
        <label>
          Title<span className="required-asterisk">*</span>
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>
          Link<span className="required-asterisk">*</span>
        </label>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://example.com"
          required
        />
      </div>

      <div>
        <label>
          Description<span className="required-asterisk">*</span>
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>
          Tags<span className="required-asterisk">*</span>
        </label>
        <input
          value={tagsText}
          onChange={(e) => setTagsText(e.target.value)}
          placeholder="code, eat, play, sleep, repeat"
          required
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
