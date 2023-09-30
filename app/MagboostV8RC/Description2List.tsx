"use client"

import { useInView } from 'react-intersection-observer';
import { Description2Props } from './Description2';
import styles from './MagboostV8.module.scss';
import { useEffect, useState } from 'react';

function Description2List({el}: {el: Description2Props}) {
   const [isElementInView, setIsView] = useState<boolean>(false);
   const {ref, inView} = useInView({
      threshold: 1,
      triggerOnce: true
   })
   useEffect(() => {
      setIsView(inView)
   }, [inView])
   return (
      <ul ref={ref} className={styles.description2__titles}>
         {el.titles && el.titles.map((el, index) => {
            return (
               <li style={{transitionDelay: (index / 5).toString() + 's'}} key={index}
               className={`${styles.description2__titleItem} ${isElementInView ? styles.description2__titleItem__active : ''}`}>
                  <span className={styles.description2__range}>{el.range}</span>
                  <p className={styles.description2__subtitle}>{el.title}</p>
               </li>
            )
         })}
      </ul>
   )
}
export default Description2List;