import React from 'react'


interface iconsProps{
    name:string,
    alt:string,
    src:string;
}
export default function icons({name,alt,src}:iconsProps) {
  return (
    <div>
       <img
      src={src}
      alt={alt}
      title={name}
      style={{ width: '24px', height: '24px' }}
    />
    </div>
  )
}
