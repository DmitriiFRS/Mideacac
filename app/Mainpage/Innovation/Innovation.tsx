"use client";
import styles from "./Innovation.module.scss";
import Image from "next/image";
import { RootState } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { scrollPosition, setSidemenuVisible } from "../../Redux/Slice/mainPageSlice";
import imagebg from "../../../public/img/Innovation/innovation_bg.png";
import Titles2 from "./Titles2";
import Titles1 from "./Titles1";

type styledStateType = {
   position: any;
   margin: string;
   left: string;
   top: string;
};
const styledState: styledStateType = {
   position: "fixed",
   margin: "0px",
   left: "0",
   top: "0",
};
function Innovation() {
   const videoRef = useRef<any>(undefined);
   const [isZoomed, setZoom] = useState<boolean>(false);
   const dispatch = useDispatch();
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);
   const scrollWidth = useSelector((state: RootState) => state.mainPageReducer.scrollWidth);
   const isSidebarOpen = useSelector((state: RootState) => state.asideReducer.isSidebarOpen);
   useEffect(() => {
      console.log(scrollRate);
   }, [scrollRate]);
   useEffect(() => {
      if (videoRef.current) {
         videoRef.current.defaultMuted = true;
      }
   });
   useEffect(() => {
      function handleScroll() {
         const scrollPercentage = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100;
         if (scrollPercentage < 0.2 && scrollPercentage !== null) dispatch(scrollPosition(0.2));
         else dispatch(scrollPosition(scrollPercentage / 2));
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });
   useEffect(() => {
      if (scrollRate !== null) {
         if (scrollRate > 8) {
            setZoom(true);
         }
         if (scrollRate < 8) {
            setZoom(false);
         }
         if (scrollRate > 1) {
            dispatch(setSidemenuVisible(false));
         }
         if (scrollRate < 1) {
            dispatch(setSidemenuVisible(true));
         }
      }
   }, [scrollRate]);
   return (
      <section
         style={{
            ...styledState,
            paddingRight: isSidebarOpen ? `${scrollWidth}px` : "",
         }}
         className={styles.innovation}
      >
         <div
            className={`${styles.innovation__img} ${isZoomed ? styles.innovation__img__active : ""} ${
               styles.innovation__img1
            }`}
         >
            <Image style={{ objectFit: "cover", objectPosition: "top" }} src={imagebg} alt="bg" fill={true} />
         </div>
         <div
            style={{
               filter: scrollRate !== null && scrollRate > 15 ? `blur(${((scrollRate - 17) * 100) / 30}px)` : "none",
            }}
            className={`${styles.innovation__img} ${!isZoomed ? styles.innovation__img__active : ""} ${
               styles.innovation__img2
            }`}
         >
            <video className={styles.innovation__videoBody} ref={videoRef} autoPlay muted loop playsInline>
               <source className={styles.video} src="/video/LabVideo.mp4" type="video/mp4" />
            </video>
         </div>
         <h2
            className={`${styles.innovation__title} ${isZoomed ? styles.innovation__title__white : ""}
      ${
         (scrollRate !== null && scrollRate > 31) || typeof scrollRate !== "number"
            ? styles.innovation__title__unactive
            : ""
      }`}
         >
            Инновации и технологии
         </h2>
         <Titles1 isZoomed={isZoomed} setZoom={setZoom} />
         <Titles2 isZoomed={isZoomed} setZoom={setZoom} />
      </section>
   );
}
export default Innovation;
