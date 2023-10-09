'use client'

import { useRef, useEffect } from 'react';
import styles from '../Magboost.module.scss';

function MainVideo() {
   const videoRef = useRef<any>(undefined);
   useEffect(() => {
      videoRef.current.defaultMuted = true
   })
   return (
      <video className={styles.magboostMain__videoContainer} ref={videoRef} autoPlay muted loop playsInline>
         <source className={styles.magboostMain__videobg} src={'/video/videobg.mp4'} type='video/mp4' />
      </video>
   )
}
export default MainVideo;