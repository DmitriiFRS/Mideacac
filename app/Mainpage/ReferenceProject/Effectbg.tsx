"use client";
import { useInView } from "react-intersection-observer";
import styles from "./ReferenceProject.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { referenceEven, referenceOdd } from "../../Redux/Slice/mainPageSlice";
import { RootState } from "../../Redux/store";

function Effectbg() {
   const even = useSelector((state: RootState) => state.mainPageReducer.even);
   const odd = useSelector((state: RootState) => state.mainPageReducer.odd);
   const dispatch = useDispatch();
   const { ref, inView } = useInView({
      threshold: 0.6,
      rootMargin: "10% 0% 0% 0%",
      triggerOnce: true,
   });
   useEffect(() => {
      dispatch(referenceEven(inView));
      setTimeout(() => {
         dispatch(referenceOdd(inView));
      }, 300);
   }, [inView]);
   return (
      <>
         <div
            ref={ref}
            className={`${styles.reference__img__effects} ${styles.reference__img__effect1} ${
               even ? styles.reference__img__active1 : ""
            }`}
         ></div>
         <div
            className={`${styles.reference__img__effects} ${styles.reference__img__effect2} ${
               odd ? styles.reference__img__active2 : ""
            }`}
         ></div>
         <div
            className={`${styles.reference__img__effects} ${styles.reference__img__effect3} ${
               even ? styles.reference__img__active3 : ""
            }`}
         ></div>
         <div
            className={`${styles.reference__img__effects} ${styles.reference__img__effect4} ${
               odd ? styles.reference__img__active4 : ""
            }`}
         ></div>
      </>
   );
}
export default Effectbg;
