"use client"

import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { RootState } from '../Redux/store';
import { isTransitionAside, toggleSidebar, transformWindow } from '../Redux/Slice/asideMenuSlice';

function AsideButton() {
   const dispatch = useDispatch()
   function openSideMenu() {
      dispatch(toggleSidebar(true)) 
      setTimeout(() => {
         dispatch(transformWindow('translateX(0%)'));
         dispatch(isTransitionAside(true))
      }, 1)
      
   }
   return (
   <button onClick={openSideMenu} className={styles.aside__openBtn}>
      <span></span>
      <span></span>
      <span></span>
   </button>
   )
}
export default AsideButton;