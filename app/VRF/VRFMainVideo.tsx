"use client"

import { useSelector } from 'react-redux';
import StartEffect from './VRFMainPage/StartEffect';
import styles from './VRFv8Page.module.scss';
import { RootState } from '../Redux/store';

function VRFMainVideo() {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <div className={styles.vrf__container}>
         <StartEffect />
         <video style={{position: scrollPosition < 11.5 ? 'fixed' : 'absolute', top: scrollPosition < 11.5 ? '0' : '57vh'}} className={styles.vrf__videoContainer} autoPlay muted loop>
            <source className={styles.video} src='/video/vrf-video.mp4' type='video/mp4' />
         </video>
      </div>
      
   )
}
export default VRFMainVideo;