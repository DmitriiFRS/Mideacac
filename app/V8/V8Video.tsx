"use client";

import { useSelector } from "react-redux";
import ZoomEffect from "./ZoomEffect";
import styles from "./V8.module.scss";
import { RootState } from "@/app/Redux/store";
import { useEffect, useRef } from "react";

type VideoComponentType = {
   video: string;
   modelStartText: string;
};

function V8Video({ video, modelStartText }: VideoComponentType) {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   const videoRef = useRef<any>(undefined);
   useEffect(() => {
      videoRef.current.defaultMuted = true;
   });
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div className={styles.magboost__container}>
         <ZoomEffect modelStartText={modelStartText} />
         <video
            style={{ position: scrollPosition < 14.5 ? "fixed" : "absolute" }}
            className={`${styles.magboost__videoContainer} ${
               scrollPosition < 14.5 ? styles.magboost__videoContainer__unactive : ""
            }`}
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
         >
            <source className={styles.video} src={video} type="video/mp4" />
         </video>
      </div>
   );
}
export default V8Video;
