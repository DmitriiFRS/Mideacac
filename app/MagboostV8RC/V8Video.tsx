"use client"

import { useSelector } from 'react-redux';
import StartEffect from './StartEffect';
import styles from './MagboostV8.module.scss';
import { RootState } from '@/app/Redux/store';
import { useEffect, useRef } from 'react';

type VideoComponentType = {
   video: string
   modelStartText: string
}

function V8Video({video, modelStartText}: VideoComponentType) {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   const videoRef = useRef<any>(undefined);
   useEffect(() => {
      videoRef.current.defaultMuted = true
   })
   return (
      <div className={styles.vrf__container}>
         <StartEffect modelStartText={modelStartText} />
         <video style={{position: scrollPosition < 14.5 ? 'fixed' : 'absolute'}}
         className={`${styles.vrf__videoContainer} ${scrollPosition < 14.5 ? styles.vrf__videoContainer__unactive : ''}`} ref={videoRef} autoPlay muted loop playsInline>
            <source className={styles.video} src={video} type='video/mp4' />
         </video>
      </div>
      
   )
}
export default V8Video;