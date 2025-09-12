import type { ChangeEvent, KeyboardEvent } from "react";

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
    <div className="SearchBar">
      <input
        type="text"
        placeholder="🔍 Search links..."
        value={value}
        onChange={handleInput}
        onKeyDown={handleKey}
        aria-label="Search links"
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
