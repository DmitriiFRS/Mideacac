"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from '../SideMenu.module.scss';
import arrow from '../../../public/icons/ArrowNext.svg';
import { RootState } from '@/app/Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenuItem, setActiveSubMenu } from '@/app/Redux/Slice/asideMenuSlice';


function MainMenu() {
   const mainMenuList = useSelector((state: RootState) => state.asideReducer.mainMenuList);
   const dispatch = useDispatch()
   function changeMenuItem (index: number) {
      const newMenu = mainMenuList.map((el, idx) => {
         if (index === idx) return {...el, isActive: true}
         else return {...el, isActive: false}
      })
      dispatch(setActiveMenuItem(newMenu))
      dispatch(setActiveSubMenu(index))
   }
   return (
      <nav className={styles.sidebar__mainMenu}>
         <ul className={styles.sidebar__mainMenu__list}>
            {mainMenuList.map((el, index) => {
               if (el.href === null) {
                  return(
                     <li className={`${styles.sidebar__mainMenu__item} ${el.isActive ? styles.sidebar__mainMenu__itemActive : ''}`} key={index}>
                        <button onClick={() => {changeMenuItem(index)}} className={styles.sidebar__mainMenu__btn}>
                           {el.title}
                           <Image src={arrow} alt='next' />
                        </button>
                     </li>
                  )
               } else {
                  return (
                     <Link key={index} href={el.href}>{el.title}</Link>
                  )
               }
            })}
         </ul>
      </nav>
   )
}
export default MainMenu;