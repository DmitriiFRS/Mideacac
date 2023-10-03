"use client"
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import styles from './MagboostV8.module.scss';
import { usePathname } from 'next/navigation';

function PreviewTitleText({previewTitle, previewTitleMobile, scrollPosition}:
   {previewTitle: Array<string>, previewTitleMobile: Array<string>, scrollPosition: number}) {
      const [client, setIsClient] = useState(false)
   const mobileWidth = useMediaQuery('(max-width: 510px)');
   const mobileHeight = useMediaQuery('(max-height: 800px)');
   let scrollPositionCount = mobileHeight ? 14.5 : 15.5;
   const pathname = usePathname();
   useEffect(() => {
      setIsClient(true)
      console.log(pathname)
   }, [])
   
   return (
      <div className={`${styles.preview__titleContainer}`}>
         {mobileWidth && client ?
         previewTitleMobile.map((el, index) => {
            scrollPositionCount += 0.3;
            return (
               <div key={index} className={`${pathname === '/V8' ? styles.preview__textLineV8 : styles.preview__textLine}`}>
                  {el}
                  <div style={{width: scrollPosition > scrollPositionCount ? '100%' :'0%'}} className={styles.preview__textFiller}>{el}</div>
               </div>
            )
         })
          :
          previewTitle.map((el, index) => {
            scrollPositionCount += 0.3;
            return (
               <div key={index} className={styles.preview__textLine}>
                  {el}
                  <div style={{width: scrollPosition > scrollPositionCount ? '100%' :'0%'}} className={styles.preview__textFiller}>{el}</div>
               </div>
            )
         })
          }
      </div>
   )
}
export default PreviewTitleText;