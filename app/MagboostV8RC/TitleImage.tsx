"use client"

import Image from "next/image";
import styles from './MagboostV8.module.scss'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";


function TitleImage({image}: {image: any}) {
   const [isImageIsIntersect, setIntersect] = useState(false);
   const {ref, inView} = useInView({
      threshold: 1,
      triggerOnce: true
   })
   useEffect(() => {
      setIntersect(inView)
   }, [inView])
return (
   <div style={{opacity: isImageIsIntersect ? 1 : 0, transform: isImageIsIntersect ? 'scale(1)' : 'scale(0)'}} ref={ref} className={styles.description__imgBody}>
      <div className={styles.description__imgBody__container}>
         <Image src={image} alt={'v8'} fill={true} />
      </div>
   </div>
)
}
export default TitleImage;