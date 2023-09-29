"use client"

import { useInView } from 'react-intersection-observer';
import styles from './MagboostV8.module.scss';
import Image from 'next/image';
import { useEffect } from 'react';

export type ImageTitleProps = {
   bg: any
   image: any
   vector: any
   titles: Array<string>
   index: number
   isView: boolean
   setIsView: Function
}

const listLine = [{
   left: '-20px'
},
{
   right: 0
}]

function Description({ bg, image, vector, titles, index, isView, setIsView }: ImageTitleProps) {
   const {ref, inView} = useInView({
      threshold: [0, 0],
   })
   useEffect(() => {
      setIsView(inView)
   },[inView])
   return (
      <div ref={ref} className={styles.description}>
         <div className={styles.description__bg}>
            <Image src={bg} alt='' />
         </div>
         <div style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}} className={`${styles.description__container} ${styles.container}`}>
            <div className={styles.description__imgBody}>
               <Image src={image} alt={'v8'} width={492} height={413} />
            </div>
            <div style={{alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start'}} className={styles.description__titles}>
               <Image className={styles.description__img} src={vector} alt={''} width={340} height={120} />
               <ul style={{textAlign: index % 2 === 0 ? 'end' : 'start'}} className={styles.description__list}>
                  <span style={index % 2 === 0 ? listLine[1] : listLine[0]} className={styles.description__line}></span>
                  {titles.map((el, index) => {
                     return (
                        <li key={index} className={styles.description__item}>{el}</li>
                     )
                  })}
               </ul>
            </div>
         </div>
      </div>
   )
}
export default Description;