"use client"

import { useSelector } from 'react-redux';
import styles from './Innovation.module.scss';
import { RootState } from '../Redux/store';

function Arrow2() {
   const firstAction = useSelector((state: RootState) => state.mainPageReducer.isFirstAction);
   const secondAction = useSelector((state: RootState) => state.mainPageReducer.isSecondAction);
   const thirdAction = useSelector((state: RootState) => state.mainPageReducer.isThirdAction);
   return (
      <div className={`${styles.arrowsBody2} ${styles.arrowLines}`}>
         <svg className={`${styles.arrow1} ${styles.arrowMain2} ${thirdAction ? styles.arrowGlowEffect : ''} ${firstAction ? styles.arrowMain2__disableEffect : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
         </svg>
         <svg className={`${styles.arrow2} ${styles.arrowMain2} ${secondAction ? styles.arrowGlowEffect : ''} ${firstAction ? styles.arrowMain2__disableEffect : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
         </svg>
         <svg className={`${styles.arrow3} ${styles.arrowMain2} ${firstAction ? styles.arrowGlowEffect : ''} ${firstAction ? styles.arrowMain2__disableEffect : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
         </svg>
      </div>
   )
   }
   export default Arrow2;