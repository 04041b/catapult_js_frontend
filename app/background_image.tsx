import Image from 'next/image'
import bg from "./images/image.png"
 
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={bg}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex:'-1'
      }}
    />
  )
}