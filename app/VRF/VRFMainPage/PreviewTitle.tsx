"use client"

import { useSelector } from 'react-redux';
import styles from '../VRFv8Page.module.scss';
import { RootState } from '@/app/Redux/store';

function PreviewTitle() {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
   <div className={styles.preview}>
      <div className={styles.preview__titleContainer}>
         <div className={styles.preview__textLine}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <div style={{width: scrollPosition > 15 ? '100%' :'0%'}} className={styles.preview__textFiller}>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
         </div>
         <div className={styles.preview__textLine}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <div style={{width: scrollPosition > 16.5 ? '100%' : '0%'}} className={styles.preview__textFiller}>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
         </div>
         <div className={styles.preview__textLine}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <div style={{width: scrollPosition > 18 ? '100%' : '0%'}} className={styles.preview__textFiller}>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
         </div>
         <div className={styles.preview__textLine}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <div style={{width: scrollPosition > 19.5 ? '100%' : '0%'}} className={styles.preview__textFiller}>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
         </div>
         <div className={styles.preview__textLine}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <div style={{width: scrollPosition > 21 ? '100%' : '0%'}} className={styles.preview__textFiller}>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
         </div>
         <div className={styles.preview__textLine}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            <div style={{width: scrollPosition > 22.5 ? '100%' : '0%'}} className={styles.preview__textFiller}>Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
         </div>
      </div>
   </div>
   )
}
export default PreviewTitle;