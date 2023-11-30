"use client";
import { useSelector } from "react-redux";
import styles from "../Intro.module.scss";
import { RootState } from "@/app/Redux/store";
import { useEffect } from "react";
function Video() {
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);

   return (
      <video
         style={{ opacity: scrollRate !== null && scrollRate < 0.3 ? 1 : 0 }}
         className={styles.video__container}
         autoPlay
         muted
         loop
      >
         <source className={styles.video} src="/video/Intro.mp4" type="video/mp4" />
      </video>
   );
}
export default Video;
