import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import MainComponent from './components/MainComponent'

export default function App() {
  return (
   <div style={{ height: '100%', 
    width:'100%',
    borderRadius:'10px', 
   display:'flex', 
   flexDirection:'column', 
   justifyContent:'space-between', 
   alignItems:'center', 
   }}>
      <NavBar/>
      <MainComponent/>
      <Footer/>
    </div>
  )
}
