 


interface IconsProps{
    name:string,
    alt:string,
    src:string;
}
export default function Icons({name,alt,src}:IconsProps) {
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
