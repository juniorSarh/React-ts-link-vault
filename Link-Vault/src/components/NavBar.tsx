import React from "react";
import SearchBar from "./SearchBar";
type NavBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
};

export default function NavBar({
  searchValue,
  onSearchChange,
  onSearch,
}: NavBarProps) {
  return (
    <div
      className="NavBar"
      style={{ display: "flex", alignItems: "center", gap: 12 }}
    >
      {/* your branding/icons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flex: 1,
          maxWidth: 640,
        }}
      >
        <SearchBar
          value={searchValue}
          onChange={onSearchChange}
          onSearch={onSearch}
        />
      </div>
      {/* profile icon, etc. */}
    </div>
  );
}
