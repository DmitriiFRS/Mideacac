import { useDispatch, useSelector } from 'react-redux';
import styles from './SideMenu.module.scss';
import { toggleSidebar, transformWindow, isTransitionAside } from '../Redux/Slice/asideMenuSlice';
import { RootState } from '../Redux/store';

function AsideBurger() {
   const dispatch = useDispatch();
   const scrollWidth = useSelector((state: RootState) => state.mainPageReducer.scrollWidth);
   function openSideMenu() {
      dispatch(toggleSidebar(true));
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollWidth}px`;
      setTimeout(() => {
         dispatch(transformWindow('translateX(0%)'));
         dispatch(isTransitionAside(true));
      })
   }
return (
   <button onClick={openSideMenu} className={styles.asideBurger}>
      <span className={styles.asideBurger__line}></span>
      <span className={styles.asideBurger__line}></span>
      <span className={styles.asideBurger__line}></span>
   </button>
)
}
export default AsideBurger;