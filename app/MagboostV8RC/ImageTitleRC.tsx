"use client"

import { useInView } from 'react-intersection-observer';
import styles from './MagboostV8.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import TitleList from './TitleList';

export type ImageTitleProps = {
   bg: any
   image: any
   vector: Array<string>
   titles: Array<string>
   orders: Array<string>
   isView: boolean
   setIsView: Function
}

function ImageTitleRC({ bg, image, vector, titles, orders, isView, setIsView }: ImageTitleProps) {
   const {ref, inView} = useInView({
      threshold: [0, 0],
   })
   useEffect(() => {
      setIsView(inView)
   },[inView])
   return (
      <div ref={ref} className={styles.imageTitle}>
         <div className={styles.imageTitle__bg}>
            <Image src={bg} alt='' fill={true} />
         </div>
         <div className={`${styles.imageTitle__container} ${styles.container}`}>

         </div>
      </div>
   )
}
export default ImageTitleRC;