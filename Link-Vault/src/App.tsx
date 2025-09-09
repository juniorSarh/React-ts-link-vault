import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import MainComponent from './components/MainComponent'

export default function App() {
  return (
   <div className='App'
   style={{ 
    height: '100%', 
    width:'75%',
    borderRadius:'10px', 
   display:'flex', 
   flexDirection:'column', 
   justifyContent:'flex-start', 
   alignItems:'center', 
   margin:'20px auto', 
   padding:'20px', 
  
   }}>
      <NavBar/>
      <MainComponent/>
      <Footer/>
    </div>
  )
}
