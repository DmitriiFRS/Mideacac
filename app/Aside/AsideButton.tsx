"use client"
import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { isTransitionAside, toggleSidebar, transformWindow } from '../Redux/Slice/asideMenuSlice';

function AsideButton() {
   const dispatch = useDispatch();
   function openSideMenu() {
      dispatch(toggleSidebar(true));
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`
      setTimeout(() => {
         dispatch(transformWindow('translateX(0%)'));
         dispatch(isTransitionAside(true));
      })
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