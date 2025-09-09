import React from 'react';

// interface SearchBarProps {
//   query: string;
//   onChange: (value: string) => void;
// }

export default function SearchBar() {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search links..."
        style={{
          width: '100%',
          fontSize: '20px',         
          padding: '12px 16px',       
          height: '50px',             
          border: '2px solid #aaa',   
          borderRadius: '12px',       
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
}
