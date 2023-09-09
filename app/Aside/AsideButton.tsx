"use client"
import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { isTransitionAside, setActiveMenuItem, setActiveSubMenu, toggleSidebar, transformWindow } from '../Redux/Slice/asideMenuSlice';
import { RootState } from '../Redux/store';
import Image from 'next/image';
import icon1 from '../../public/icons/Sidemenu/sideIcon1.svg';
import icon2 from '../../public/icons/Sidemenu/sideIcon2.svg';
import icon3 from '../../public/icons/Sidemenu/sideIcon3.svg';
import icon4 from '../../public/icons/Sidemenu/sideIcon4.svg';
import icon5 from '../../public/icons/Sidemenu/sideIcon5.svg';
import icon6 from '../../public/icons/Sidemenu/sideIcon6.svg';
import { useEffect, useState } from 'react';
const btnSections = [{
   id: 1,
   icon: icon1
},
{
   id: 2,
   icon: icon2
},
{
   id: 3,
   icon: icon3
},
{
   id: 4,
   icon: icon4
},
{
   id: 5,
   icon: icon5
}
   ]

function AsideButton() {
   const dispatch = useDispatch();
   const mainMenuList = useSelector((state: RootState) => state.asideReducer.mainMenuList);
   const [scrollWidth, setScrollWidth] = useState<null | number>(null);
   useEffect(() => {
      setScrollWidth(window.innerWidth - document.body.clientWidth)
   }, [])
   function openSideMenu() {
      dispatch(toggleSidebar(true));
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollWidth}px`;
      setTimeout(() => {
         dispatch(transformWindow('translateX(0%)'));
         dispatch(isTransitionAside(true));
      })
   }
   function changeMenuItem (index: number) {
      const newMenu = mainMenuList.map((el, idx) => {
         if (index === idx) return {...el, isActive: true}
         else return {...el, isActive: false}
      })
      dispatch(setActiveMenuItem(newMenu))
      dispatch(setActiveSubMenu(index))
   }
   return (
   <button onClick={openSideMenu} className={styles.aside__openBtn}>
      {btnSections.map((el, index) => {
         return (
            <li onClick={() => changeMenuItem(index)} key={index} className={styles.aside__btnBlock}>
               <div className={styles.aside__iconBody}>
                  <Image src={el.icon} alt='icon' />
               </div>
            </li>
         )
      })}
   </button>
   )
}
export default AsideButton;