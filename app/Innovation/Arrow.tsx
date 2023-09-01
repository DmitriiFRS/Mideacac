"use client"

import { useSelector } from 'react-redux';
import styles from './Innovation.module.scss';
import { RootState } from '../Redux/store';

function Arrow() {
   const isLastAction = useSelector((state: RootState) => state.mainPageReducer.isThirdAction)
return (
   <div className={`${styles.arrows__body} ${isLastAction ? styles.arrows__unactive : ''}`}>
      <div className={styles.arrows__sliding}>
         <div className={styles.arrows__arrow}></div>
      </div>
      <div className={`${styles.arrows__sliding} ${styles.arrows__delay1}`}>
         <div className={styles.arrows__arrow}></div>
      </div>
      <div className={`${styles.arrows__sliding} ${styles.arrows__delay2}`}>
         <div className={styles.arrows__arrow}></div>
      </div>
      <div className={`${styles.arrows__sliding} ${styles.arrows__delay3}`}>
         <div className={styles.arrows__arrow}></div>
      </div>
   </div>
   
)
}
export default Arrow;