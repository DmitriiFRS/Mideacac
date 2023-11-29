"use client";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SideMenu.module.scss";
import {
   isTransitionAside,
   setActiveMenuItem,
   setActiveSubMenu,
   toggleSidebar,
   transformWindow,
} from "../Redux/Slice/asideMenuSlice";
import { RootState } from "../Redux/store";
import Image from "next/image";
import icon1 from "../../public/icons/Sidemenu/sideIcon1.png";
import icon2 from "../../public/icons/Sidemenu/sideIcon2.png";
import icon3 from "../../public/icons/Sidemenu/sideIcon3.png";
import icon4 from "../../public/icons/Sidemenu/sideIcon4.png";
import icon5 from "../../public/icons/Sidemenu/sideIcon5.png";
import icon6 from "../../public/icons/Sidemenu/sideIcon6.png";
import { useEffect } from "react";
import { setScrollWidth } from "../Redux/Slice/mainPageSlice";
const btnSections = [
   {
      id: 1,
      icon: icon1,
      transitiodDelay: "0s",
   },
   {
      id: 2,
      icon: icon2,
      transitiodDelay: "0.1s",
   },
   {
      id: 3,
      icon: icon3,
      transitiodDelay: "0.2s",
   },
   {
      id: 4,
      icon: icon4,
      transitiodDelay: "0.3s",
   },
   {
      id: 5,
      icon: icon5,
      transitiodDelay: "0.4s",
   },
];

function AsideButton() {
   const dispatch = useDispatch();
   const isSidemenuVisible = useSelector((state: RootState) => state.mainPageReducer.isSidemenuVisible);
   const scrollWidth = useSelector((state: RootState) => state.mainPageReducer.scrollWidth);
   useEffect(() => {
      dispatch(setScrollWidth(window.innerWidth - document.body.clientWidth));
   }, []);
   function openSideMenu() {
      dispatch(toggleSidebar(true));
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
      setTimeout(() => {
         dispatch(transformWindow("translateX(0%)"));
         dispatch(isTransitionAside(true));
      });
   }
   return (
      <button className={styles.aside__openBtn}>
         {btnSections.map((el, index) => {
            return (
               <li
                  style={{
                     opacity: isSidemenuVisible ? 0 : 0.5,
                     transform: isSidemenuVisible ? "translateX(-900%)" : "translateX(0%)",
                     transitionDelay: el.transitiodDelay,
                  }}
                  onClick={openSideMenu}
                  key={index}
                  className={styles.aside__btnBlock}
               >
                  <div className={styles.aside__iconBody}>
                     <Image src={el.icon} alt="icon" fill={true} />
                  </div>
               </li>
            );
         })}
      </button>
   );
}
export default AsideButton;
