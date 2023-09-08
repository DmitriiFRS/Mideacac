"use client"
import { useSelector } from 'react-redux';
import styles from './MagboostV8.module.scss';
import { RootState } from '@/app/Redux/store';
import PreviewTitleText from './PreviewTitleText';


function PreviewTitle({previewTitle}: {previewTitle: Array<string>}) {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
   <div className={styles.preview}>
      <PreviewTitleText previewTitle={previewTitle} scrollPosition={scrollPosition}/>
   </div>
   )
}
export default PreviewTitle;