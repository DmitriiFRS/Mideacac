"use client"

import { useSelector } from 'react-redux';
import styles from './MagboostV8.module.scss';
import { RootState } from '@/app/Redux/store';
import { stixTwoText } from '../layout';


function PreviewTitle({previewTitle}: {previewTitle: Array<string>}) {
   let scrollPositionCount = 18.5;
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
   <div className={styles.preview}>
      <div className={`${styles.preview__titleContainer} ${stixTwoText.className}`}>
         {previewTitle.map((el, index) => {
            scrollPositionCount += 1;
            console.log(el)
            return (
               <div key={index} className={styles.preview__textLine}>
                  {el}
                  <div style={{width: scrollPosition > scrollPositionCount ? '100%' :'0%'}} className={styles.preview__textFiller}>{el}</div>
               </div>
            )
         })}

      </div>
   </div>
   )
}
export default PreviewTitle;