import React from "react";

interface LinkItem {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface LinkListProps {
  links: LinkItem[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function LinkList({ links, onEdit, onDelete }: LinkListProps) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {links.map((linkItem, index) => (
        <li key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{linkItem.title}</h3>
          <a href={linkItem.link} target="_blank" rel="noopener noreferrer">
            {linkItem.link}
          </a>
          <p>{linkItem.description}</p>
          <p><strong>Tags:</strong> {linkItem.tags}</p>
          <button onClick={() => onEdit(index)} style={{ marginRight: '10px' }}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}