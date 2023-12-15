"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.scss";

function Preloader() {
   const [isLoading, setLoading] = useState<boolean>(true);
   const [isAnimationStarts, setStart] = useState<boolean>(false);
   useEffect(() => {
      if ((document.body.style.overflow = "hidden")) {
         document.body.style.overflow = "hidden";
      }
      document.body.style.overflow = "hidden";
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
      isLoading ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
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
