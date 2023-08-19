"use client"
import { useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { RootState } from '../Redux/store';
import { ReactNode } from 'react';
import AsideButton from './AsideButton';
import Sidebar from './Sidebar';

function SideMenu() {
   const isSidebarOpen = useSelector((state: RootState) => state.asideReducer.isSidebarOpen);
return (
   <section className={styles.aside}>
      {isSidebarOpen ? <Sidebar /> : <AsideButton />}
   </section>
)
}
export default SideMenu;