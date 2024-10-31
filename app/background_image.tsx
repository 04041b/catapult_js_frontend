"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

import dt2 from "@/app/images/desktop2.jpg"
import dt1 from "@/app/images/desktop1.jpg"
import dt3 from "@/app/images/desktop3.png"
import p1 from "./images/phone.jpg"


export default function Background() {
  const [randomImage, setRandomImage] = useState('');
  //list of images choosen
  let listofdesktop = [dt1,dt2,dt3,p1]

  useEffect(()=> {  
    console.log(listofdesktop[Math.floor(Math.random()*listofdesktop.length)].src)
    
    setRandomImage(listofdesktop[Math.floor(Math.random()*listofdesktop.length)].src)
  })


  return (
    <Image
      alt="Mountains"
      src={randomImage}
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