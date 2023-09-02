"use client"

import { useInView } from 'react-intersection-observer';
import styles from '../VRFv8Page.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';

type ImageTitleProps = {
   image: any
   title: string
   description: Array<string>
   orders: Array<string>
   isView: boolean
   setIsView: Function
}

function ImageTitleRC({ image, description, title, orders, isView, setIsView}: ImageTitleProps) {
   const {ref, inView} = useInView({
      threshold: [0, 0],
   })
   useEffect(() => {
      setIsView(inView)
   },[inView])
   return (
      <div ref={ref} className={styles.imageTitle}>
         <div style={{order: orders[0]}} className={`${styles.image__container} ${isView ? styles.image__container__active : ''}`}>
            <Image quality={100} src={image} alt='1' fill={true}/>
         </div>
         <div style={{order: orders[1]}} className={styles.title}>
            <div className={styles.title__mainTitleBody}>
               <h3 className={`${styles.title__mainTitle} ${isView ? styles.title__mainTitle__active : ''}`}>{title}</h3>
            </div>
            <ul className={styles.title__list}>
               <li className={`${styles.title__item} ${styles.title__item__el1} ${isView ? styles.title__item__active : ''}`}>{description[0]}</li>
               <li className={`${styles.title__item} ${styles.title__item__el2} ${isView ? styles.title__item__active : ''}`}>{description[1]}</li>
               <li className={`${styles.title__item} ${styles.title__item__el3} ${isView ? styles.title__item__active : ''}`}>{description[2]}</li>
               <li className={`${styles.title__item} ${styles.title__item__el4} ${isView ? styles.title__item__active : ''}`}>{description[3]}</li>
            </ul>
         </div>
      </div>
   )
}
export default ImageTitleRC;