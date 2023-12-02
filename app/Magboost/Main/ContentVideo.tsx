"use client";

import { useRef, useState } from "react";
import styles from "../Magboost.module.scss";
import play from "../../../public/icons/MagboostV8/Play.svg";
import pause from "../../../public/icons/MagboostV8/Pause.svg";
import Image from "next/image";

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
      <div onClick={handlePlay} className={styles.bearing__videoContainer}>
         <video ref={ref} className={styles.bearing__videoBody} loop muted>
            <source className={styles.bearing__video} src={video} />
         </video>
         <button className={styles.bearing__playBtn}>
            <Image src={isPlaying ? pause : play} alt="play" fill />
         </button>
      </div>
   );
}
export default ContentVideo;
