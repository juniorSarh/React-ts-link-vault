import React, { useState, useEffect } from 'react';

interface LinkFormProps {
  onSubmit: (data: {
    title: string;
    link: string;
    description: string;
    tags: string;
  }) => void;
  initialData?: {
    title?: string;
    link?: string;
    description?: string;
    tags?: string;
  };
  onCancel?: () => void;
}
// LinkForm component
export default function LinkForm({
  onSubmit,
  initialData = {},
  onCancel,
}: LinkFormProps) {

const [title, setTitle] = useState<string>(initialData.title || '');
const [link, setLink] = useState<string>(initialData.link || '');
const [description, setDescription] = useState<string>(initialData.description || '');
const [tags, setTags] = useState<string>(initialData.tags || '');

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  onSubmit({ title, link, description, tags });

    // Optionally, clear form after submit
    if (!initialData.title) {
      setTitle('');
      setLink('');
      setDescription('');
      setTags('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '300px', height: '60px', marginTop: '10px' }}
      />
      <br />
      <input
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        style={{ marginTop: '10px', width: '300px' }}
      />
      <br />
      <button type="submit" style={{ marginTop: '10px' }}>Save</button>
      {onCancel && (
        <button type="button" onClick={onCancel} style={{ marginLeft: '10px', marginTop: '10px' }}>Cancel</button>
      )}
    </form>
  );
}
