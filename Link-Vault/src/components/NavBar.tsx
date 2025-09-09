import React from 'react'
import SearchBar from './SearchBar'
import Button from './Button'

export default function NavBar() {
  return (
    <div className='NavBar'>
    <h1>REACT | TS Link Vault</h1>
    <SearchBar/>  
    <Button
        name="Search"
        style={{ 
            backgroundColor: 'green', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius:'20%',
        }}
    />
    </div>
  )
}
