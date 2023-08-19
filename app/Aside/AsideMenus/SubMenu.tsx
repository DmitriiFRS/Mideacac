"use client"

import { useSelector } from 'react-redux';
import styles from '../SideMenu.module.scss';
import { RootState } from '@/app/Redux/store';

function SubMenu() {
   const activeSubMenu = useSelector((state: RootState) => state.asideReducer.subMenuActive);
   return (
      <nav className={styles.sidebar__subMenu}>
         <ul className={styles.sidebar__subMenu__list}>
            {activeSubMenu.map((el, index) => {
               return (
                  <li className={styles.sidebar__subMenu__item} key={index}>
                     <p className={styles.sidebar__subMenu__title}>{el.title}</p>
                     <p>{el.img}</p>
                  </li>
               )
            })}
         </ul>
      </nav>
   )
}
export default SubMenu;