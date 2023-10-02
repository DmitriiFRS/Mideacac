
"use client"
import { useInView } from 'react-intersection-observer';
import styles from './MagboostV8.module.scss';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
const listLine = [{
   left: '-20px'
},
{
   right: 0
}]
type DescriptionListProps = {
   index: number
   titles: Array<string>
}
function DescriptionList({index, titles}: DescriptionListProps) {
   const height800 = useMediaQuery('(max-height: 800px)');
   const [isImageIsIntersect, setIntersect] = useState(false);
   const {ref, inView} = useInView({
      threshold: height800 ? 0.3 : 1,
      triggerOnce: true
   })
   useEffect(() => {
      setIntersect(inView);
   }, [inView])
return (
   <div ref={ref} className={styles.description__body}>
      <ul style={{textAlign: index % 2 === 0 ? 'end' : 'start'}} className={styles.description__list}>
      <span style={index % 2 === 0 ? listLine[1] : listLine[0]} className={styles.description__line}></span>
      {titles.map((el, idx) => {
         return (
            <li key={idx} style={{transitionDelay: (idx / 5).toString() + 's'}} className={`${styles.description__item} ${index % 2 === 0 ? styles.description__item__even : styles.description__item__odd}
            ${isImageIsIntersect ? styles.description__item__active : ''}`}>{el}</li>
         )
      })}
      </ul>
   </div>
   
)
}
export default DescriptionList;