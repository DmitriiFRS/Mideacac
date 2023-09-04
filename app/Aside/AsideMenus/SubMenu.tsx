"use client"

import { useSelector } from 'react-redux';
import styles from '../SideMenu.module.scss';
import { RootState } from '@/app/Redux/store';
import Image from 'next/image';

function SubMenu() {
   const activeSubMenu = useSelector((state: RootState) => state.asideReducer.subMenuActive);
   const isToggle = useSelector((state: RootState) => state.asideReducer.isToggleSubmenu);
   return (
      <nav className={styles.sidebar__subMenu}>
         <ul style={{transform: isToggle ? 'translateX(-100%)' : 'translateX(0%)'}} className={styles.sidebar__subMenu__list}>
            {activeSubMenu.map((el, index) => {
               return (
                  <li className={styles.sidebar__subMenu__item} key={index}>
                     <p className={styles.sidebar__subMenu__title}>{el.title}</p>
                     {el.id === 0 ?
                     <div className={styles.sidebar__subMenu__img}>
                     <Image src={el.img} alt={el.title} fill={true} />
                     </div> : ''}   
                  </li>
               )
            })}
         </ul>
      </nav>
   )
}
export default SubMenu;