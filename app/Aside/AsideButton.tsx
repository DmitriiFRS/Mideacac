"use client"
import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { isTransitionAside, setActiveMenuItem, setActiveSubMenu, toggleSidebar, transformWindow } from '../Redux/Slice/asideMenuSlice';
import { RootState } from '../Redux/store';
const btnSections = [1,2,3,4,5]

function AsideButton() {
   const dispatch = useDispatch();
   const mainMenuList = useSelector((state: RootState) => state.asideReducer.mainMenuList);
   function openSideMenu() {
      dispatch(toggleSidebar(true));
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`
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
               <span></span>
               <span></span>
               <span></span>
            </li>
         )
      })}
   </button>
   )
}
export default AsideButton;