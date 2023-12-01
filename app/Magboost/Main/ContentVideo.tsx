"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../Magboost.module.scss";

function ContentVideo({ video }: { video: string }) {
   const [isPlaying, setPlaying] = useState<boolean>(false);
   const ref = useRef<HTMLVideoElement>(null);
   function handlePlay() {
      if (ref.current) {
         if (isPlaying) {
            ref.current.pause();
         } else {
            ref.current.play();
         }
         setPlaying(!isPlaying);
      }
   }
   return (
      <div className={styles.bearing__videoContainer}>
         <video ref={ref} className={styles.bearing__videoBody} loop muted>
            <source className={styles.bearing__video} src={video} />
         </video>
         <button onClick={handlePlay} className={styles.bearing__playBtn}></button>
      </div>
   );
}
export default ContentVideo;
