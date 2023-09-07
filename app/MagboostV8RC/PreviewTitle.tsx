"use client"

import { useSelector } from 'react-redux';
import styles from './MagboostV8.module.scss';
import { RootState } from '@/app/Redux/store';
import { stixTwoText } from '../layout';


function PreviewTitle({previewTitle}: any) {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
   <div className={styles.preview}>
      <div className={`${styles.preview__titleContainer} ${stixTwoText.className}`}>
         <div className={styles.preview__textLine}>
            {previewTitle.title1}
            <div style={{width: scrollPosition > 18.5 ? '100%' :'0%'}} className={styles.preview__textFiller}>{previewTitle.title1}</div>
         </div>
         <div className={styles.preview__textLine}>
            {previewTitle.title2}
            <div style={{width: scrollPosition > 20 ? '100%' : '0%'}} className={styles.preview__textFiller}>{previewTitle.title2}</div>
         </div>
         <div className={styles.preview__textLine}>
            {previewTitle.title3}
            <div style={{width: scrollPosition > 21.5 ? '100%' : '0%'}} className={styles.preview__textFiller}>{previewTitle.title3}</div>
         </div>
         <div className={styles.preview__textLine}>
            {previewTitle.title4}
            <div style={{width: scrollPosition > 23 ? '100%' : '0%'}} className={styles.preview__textFiller}>{previewTitle.title4}</div>
         </div>
         <div className={styles.preview__textLine}>
            {previewTitle.title5}
            <div style={{width: scrollPosition > 24 ? '100%' : '0%'}} className={styles.preview__textFiller}>{previewTitle.title5}</div>
         </div>
         <div className={styles.preview__textLine}>
         {previewTitle.title6}
            <div style={{width: scrollPosition > 25 ? '100%' : '0%'}} className={styles.preview__textFiller}>
               {previewTitle.title6}</div>
            </div>
         <div className={styles.preview__textLine}>
         {previewTitle.title7}
            <div style={{width: scrollPosition > 26 ? '100%' : '0%'}} className={styles.preview__textFiller}>
            {previewTitle.title7}</div>
            </div>
         <div className={styles.preview__textLine}>
               {previewTitle.title8}
            <div style={{width: scrollPosition > 27 ? '100%' : '0%'}} className={styles.preview__textFiller}>
               {previewTitle.title8}
            </div>
         </div>
      </div>
   </div>
   )
}
export default PreviewTitle;