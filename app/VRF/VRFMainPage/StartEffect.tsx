"use client"

import { useEffect, useState } from 'react';
import styles from '../VRFv8Page.module.scss';

function StartEffect() {
   const [scrollRate, setScrollRate] = useState<number>(1);
   const [opacity, setOpacity] = useState(1);
   useEffect(() => {
      function handleScroll() {
         const scrollPercentage = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100)
         if (scrollPercentage < 1) setScrollRate(1)
         else
         setScrollRate(scrollPercentage / 2);
      }
      window.addEventListener('scroll', handleScroll);
      console.log(scrollRate)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }

   })
return (
   <div style={{opacity: `${scrollRate > 5 ? 1 - scrollRate / 10 : 1}`}} className={styles.effect}>
      <h2 style={{transform: `scale(${scrollRate < 1 ? 1 : scrollRate})`}} className={styles.effect__title}>Magboost</h2>
      <h3 className={styles.effect__bgTitle}>A legendary</h3>
   </div>
)
}
export default StartEffect;

// 5 and 13