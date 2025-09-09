import React from 'react';

interface ButtonProps {
  name: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ name, style }) => {
  return (
    <button style={style}>
      {name}
    </button>
  );
};

export default Button;
