 
import SearchBar from "./SearchBar";
import home from "../Icons/home.png";
import profile from "../Icons/profile.png";

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
    <div className="NavBar">
      <div className="brand">
        <img src={home} alt="Home" className="icon home" />
        <span className="title">Link Vault</span>
      </div>

      {/* centered search */}
      <div className="searchWrap">
        <div className="SearchBar">
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
            onSearch={onSearch}
          />
        </div>
      </div>

      <img src={profile} alt="Profile" className="icon profile" />
    </div>
  );
}
