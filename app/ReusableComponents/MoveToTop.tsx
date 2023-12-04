"use client";

import styles from "./Reusable.module.scss";
type MoveToTopProps = {
   scrollRate: number | null;
   scrollParams: {
      top: number;
   };
   scrollTrigger: number;
};
function MoveToTop({ scrollRate, scrollParams, scrollTrigger }: MoveToTopProps) {
   function toTop() {
      window.scrollTo(scrollParams);
   }
   return (
      scrollRate && (
         <button
            onClick={toTop}
            className={`${styles.toTop} ${scrollRate > scrollTrigger ? styles.toTop__active : ""}`}
         >
            <span className={styles.toTop__imgBody}>top</span>
         </button>
      )
   );
}
export default MoveToTop;
