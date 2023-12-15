"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.scss";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";

function Preloader() {
   const scrollWidth = useSelector((state: RootState) => state.mainPageReducer.scrollWidth);
   const [isLoading, setLoading] = useState<boolean>(true);
   const [isAnimationStarts, setStart] = useState<boolean>(false);
   useEffect(() => {
      if ((document.body.style.overflow = "hidden")) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = `${scrollWidth}px`;
      }
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
      setTimeout(() => {
         window.scrollTo(0, 0);
      }, 500);
   }, []);
   useEffect(() => {
      setTimeout(() => {
         setStart(true);
      }, 2900);
      setTimeout(() => {
         setLoading(false);
      }, 3300);
      isLoading
         ? ((document.body.style.overflow = "hidden"), (document.body.style.paddingRight = `${scrollWidth}px`))
         : ((document.body.style.paddingRight = "0px"), (document.body.style.overflow = "auto"));
   }, [isLoading]);

   return (
      isLoading && (
         <div className={`${styles.lds__container} ${isAnimationStarts ? styles.lds__container__anim : ""}`}>
            <div className={styles.lds_ripple}>
               <div></div>
               <div></div>
            </div>
         </div>
      )
   );
}
export default Preloader;
