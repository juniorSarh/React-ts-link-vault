import React, { useCallback } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import searchIcon from "../Icons/search.png";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({
  value,
  onChange,
  onSearch,
}: SearchBarProps) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);
  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
      }}
    >
      <img src={searchIcon} alt="Search" style={{ width: 24, height: 24 }} />
      <input
        type="text"
        placeholder="Search links..."
        value={value}
        onChange={handleInput}
        onKeyDown={handleKey}
        aria-label="Search links"
        style={{
          flex: 1,
          fontSize: "16px",
          padding: "12px 16px",
          height: "44px",
          border: "2px solid #aaa",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        }}
      />
      <button
        type="button"
        onClick={onSearch}
        style={{
          height: "44px",
          padding: "0 16px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Search
      </button>
    </div>
  );
}
