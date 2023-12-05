"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../SideMenu.module.scss";
import arrow from "../../../public/icons/ArrowNext.svg";
import { RootState } from "@/app/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
   animateSubmenu,
   isTransitionAside,
   setActiveMenuItem,
   setActiveSubMenu,
   toggleSidebar,
   transformWindow,
} from "@/app/Redux/Slice/asideMenuSlice";
import { useState } from "react";
import hrefIcon from "../../../public/icons/Sidemenu/href-icon.svg";

function MainMenu() {
   const [isProgress, setProgress] = useState<boolean>(false);
   const mainMenuList = useSelector((state: RootState) => state.asideReducer.mainMenuList);
   const isToggle = useSelector((state: RootState) => state.asideReducer.isToggleSubmenu);
   const transform = useSelector((state: RootState) => state.asideReducer.translateWindow);
   const dispatch = useDispatch();
   function changeMenuItem(index: number) {
      if (isToggle || isProgress) return;
      if (mainMenuList[index].isActive) return;
      const newMenu = mainMenuList.map((el, idx) => {
         if (index === idx) return { ...el, isActive: true };
         else return { ...el, isActive: false };
      });
      setProgress(true);
      dispatch(animateSubmenu(true));
      setTimeout(() => {
         dispatch(setActiveMenuItem(newMenu));
         dispatch(setActiveSubMenu(index));
      }, 500);
      setTimeout(() => {
         dispatch(animateSubmenu(false));
      }, 500);
      setTimeout(() => {
         setProgress(false);
      }, 900);
   }
   function closeMenu() {
      if (transform === "translateX(-110%)") return;
      dispatch(transformWindow("translateX(-110%)"));
      dispatch(isTransitionAside(false));

      setTimeout(() => {
         dispatch(toggleSidebar(false));
         document.body.style.paddingRight = "0px";
         document.body.style.overflow = "auto";
      }, 900);
   }
   return (
      <nav className={styles.sidebar__mainMenu}>
         <ul className={styles.sidebar__mainMenu__list}>
            {mainMenuList.map((el, index) => {
               if (el.href === null) {
                  return (
                     <li
                        className={`${styles.sidebar__mainMenu__item} ${
                           el.isActive ? styles.sidebar__mainMenu__itemActive : ""
                        }`}
                        key={index}
                        style={{ animationDuration: (index + 2) / 7 + "s" }}
                     >
                        <button
                           onClick={() => {
                              changeMenuItem(index);
                           }}
                           className={styles.sidebar__mainMenu__btn}
                        >
                           {el.title}
                           <Image src={arrow} alt="next" />
                        </button>
                     </li>
                  );
               } else {
                  return (
                     <Link
                        style={{ animationDuration: (index + 2) / 7 + "s" }}
                        onClick={closeMenu}
                        className={`${styles.sidebar__mainMenu__item} ${
                           el.isActive ? styles.sidebar__mainMenu__itemActive : ""
                        }`}
                        key={index}
                        href={el.href}
                     >
                        <button className={styles.sidebar__mainMenu__btn}>{el.title}</button>
                        <Image src={hrefIcon} alt="href" />
                     </Link>
                  );
               }
            })}
         </ul>
      </nav>
   );
}
export default MainMenu;
