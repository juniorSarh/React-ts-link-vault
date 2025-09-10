
import React from 'react'


export default function LocalStorageFunction() {
  
    const SavedData = localStorage.getItem('links');
    console.log(SavedData);

  return (
    <div>
      
    </div>
  )
}
