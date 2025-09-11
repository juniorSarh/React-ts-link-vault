import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="App">
      <NavBar
        searchValue={searchInput}
        onSearchChange={setSearchInput}
        onSearch={() => setQuery(searchInput)}
      />
      <MainComponent query={query} />
      <Footer />
    </div>
  );
}

export default App;
