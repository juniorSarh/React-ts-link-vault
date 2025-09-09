import React, { useState, useEffect } from 'react';
import LinkForm from './LinkForm';
import LinkList from './LinkList';
//
import { LinkItem } from './types';

const LinksManager: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>(() => {
    const stored = localStorage.getItem('links');
    return stored ? JSON.parse(stored) : [];
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  const handleAdd = (linkData: LinkItem) => {
    setLinks([...links, linkData]);
  };

  const handleEdit = (index: number) => {
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleUpdate = (updatedLink: LinkItem) => {
    if (currentIndex === null) return;
    const newLinks = [...links];
    newLinks[currentIndex] = updatedLink;
    setLinks(newLinks);
    setIsEditing(false);
    setCurrentIndex(null);
  };

  const handleDelete = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentIndex(null);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Links CRUD App with localStorage</h1>
      {isEditing ? (
        <div>
          <h2>Edit Link</h2>
          <LinkForm
            onSubmit={handleUpdate}
            initialData={links[currentIndex!]}
            onCancel={handleCancelEdit}
          />
        </div>
      ) : (
        <div>
          <h2>Add New Link</h2>
          <LinkForm onSubmit={handleAdd} />
        </div>
      )}
      <h2>Links List</h2>
      <LinkList links={links} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default LinksManager;