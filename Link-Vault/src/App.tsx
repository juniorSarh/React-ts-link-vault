import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import { ToastProvider } from "./components/toast";

function App() {
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  return (
    <ToastProvider>
      <div className="App">
        <NavBar
          searchValue={searchInput}
          onSearchChange={setSearchInput}
          onSearch={() => setQuery(searchInput)}
        />
        <MainComponent query={query} />
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
