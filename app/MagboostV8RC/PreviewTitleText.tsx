
import styles from './MagboostV8.module.scss';

function PreviewTitleText({previewTitle, scrollPosition}: {previewTitle: Array<string>, scrollPosition: number}) {
   let scrollPositionCount = 15;
   return (
      <div className={`${styles.preview__titleContainer}`}>
         {previewTitle.map((el, index) => {
            scrollPositionCount += 0.3;
            return (
               <div key={index} className={styles.preview__textLine}>
                  {el}
                  <div style={{width: scrollPosition > scrollPositionCount ? '100%' :'0%'}} className={styles.preview__textFiller}>{el}</div>
               </div>
            )
         })}
      </div>
   )
}
export default PreviewTitleText;