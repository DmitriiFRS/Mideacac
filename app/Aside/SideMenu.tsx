"use client"
import { useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { RootState } from '../Redux/store';
import { ReactNode } from 'react';
import AsideButton from './AsideButton';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

function SideMenu() {
   const pathname = usePathname();
   console.log(pathname)
   const isSidebarOpen = useSelector((state: RootState) => state.asideReducer.isSidebarOpen);
return (
   <section className={styles.aside}>
      {isSidebarOpen && pathname === '/' ? <Sidebar /> : !isSidebarOpen && pathname === '/' ? <AsideButton /> : ''} 
   </section>
)
}
export default SideMenu;