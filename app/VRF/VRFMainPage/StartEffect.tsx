"use client"

import { useEffect } from 'react';
import styles from '../VRFv8Page.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/Redux/store';
import { scrollPosition } from '@/app/Redux/Slice/innovationsSlice';

function StartEffect() {
   const dispatch = useDispatch();
   const scrollRate = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   useEffect(() => {
      function handleScroll() {
         const scrollPercentage = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100)
         if (scrollPercentage < 1) dispatch(scrollPosition(1));
         else
         dispatch(scrollPosition(scrollPercentage / 2));
      }
      window.addEventListener('scroll', handleScroll);
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