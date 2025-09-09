import React from 'react'
import SearchBar from './SearchBar'
import Button from './Button'
import home from '../Icons/home.png'
import search from '../Icons/search.png'
import profile from '../Icons/profile.png'

export default function NavBar() {
  return (
    <div className="NavBar">
      <img
        src={home}
        alt="Home logo"
        style={{ width: "40px", height: "40px",  }}
      />
      <h1>Link Vault</h1>
      <img
        src={search}
        alt="Home logo"
        style={{ width: "40px", height: "40px",  }}
      />
      <SearchBar />
      <Button
        name="Search"
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20%",
        }}
      />
      <img
        src={profile}
        alt="Home logo"
        style={{ width: "50px", height: "50px",  }}
      />
    </div>
  );
}
