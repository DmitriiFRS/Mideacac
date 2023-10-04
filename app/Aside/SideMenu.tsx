"use client"
import { useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { RootState } from '../Redux/store';
import AsideButton from './AsideButton';
import Sidebar from './Sidebar';
import AsideBurger from './AsideBurger';

function SideMenu() {
   const isSidebarOpen = useSelector((state: RootState) => state.asideReducer.isSidebarOpen);
return (
   <section className={styles.aside}>
      {isSidebarOpen ? <Sidebar /> : !isSidebarOpen ? <AsideButton /> : ''}
      {isSidebarOpen ? <Sidebar /> : !isSidebarOpen ? <AsideBurger /> : ''}  
   </section>
)
}
export default SideMenu;