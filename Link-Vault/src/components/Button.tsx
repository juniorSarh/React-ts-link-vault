import React from 'react';

interface ButtonProps {
  name: string;
  style?: React.CSSProperties;
}

export default function Button({name, style}: ButtonProps) {
  return (
    <div>
      <button style={style}>{name}</button>
    </div>
  );
}
