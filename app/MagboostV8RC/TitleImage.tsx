"use client"

import Image from "next/image";
import styles from './MagboostV8.module.scss'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";


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
      <Image src={image} alt={'v8'} width={492} height={413} />
   </div>
)
}
export default TitleImage;