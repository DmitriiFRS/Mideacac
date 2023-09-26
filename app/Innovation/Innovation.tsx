"use client"
import styles from './Innovation.module.scss';
import Image from 'next/image';
import { RootState } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { scrollPosition, setSidemenuVisible } from '../Redux/Slice/mainPageSlice';
import imagebg from '../../public/img/Innovation/innovation_bg.png';
import imagebg2 from '../../public/img/Innovation/Screenshot_1.png';
import Titles2 from './Titles2';
import Titles1 from './Titles1';

type styledStateType = {
   position: any
   margin: string
   left?: string
   top?: string
}
const styledState = [{
   position: 'relative',
   margin: 'calc(100vh - 90px) 0 0 0'
},
{
   position: 'fixed',
   margin: '0px',
   left: '0',
   top: '0',

}]
function Innovation() {
   const [sectionStyle, setStyles] = useState<styledStateType>(styledState[0])
   const [isZoomed, setZoom] = useState<boolean>(false);
   const dispatch = useDispatch();
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);
   useEffect(() => {
      function handleScroll() {
         const scrollPercentage = (window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100)
         if (scrollPercentage < 1 && scrollPercentage !== null) dispatch(scrollPosition(1));
         else
         dispatch(scrollPosition(scrollPercentage / 2));
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   })
   useEffect(() => {
      if (scrollRate !== null && scrollRate > 7) {
         setStyles(styledState[1])
      }
      else if (scrollRate !== null && scrollRate < 17) {
         setStyles(styledState[0])
      }

      if (scrollRate !== null && scrollRate > 20) {
         setZoom(true);
      }
      if (scrollRate !== null && scrollRate < 20) {
         setZoom(false);
      }
      if (scrollRate !== null && scrollRate > 7) {
         dispatch(setSidemenuVisible(false))
      }
      if (scrollRate !== null && scrollRate < 7) {
         dispatch(setSidemenuVisible(true))
      }
   }, [scrollRate])
return (
   scrollRate &&
   <section style={sectionStyle} className={styles.innovation}>
      <div className={`${styles.innovation__img} ${isZoomed ? styles.innovation__img__active : '' } ${styles.innovation__img1}`}>
         <Image src={imagebg} alt='bg' fill={true} />
      </div>
      <div className={`${styles.innovation__img} ${!isZoomed ? styles.innovation__img__active : '' } ${styles.innovation__img2}`}>
         <Image src={imagebg2} alt='bg' fill={true} />
      </div>
      <h2 className={`${styles.innovation__title}`}>Innovations and technologies</h2>
      <Titles1 isZoomed={isZoomed} setZoom={setZoom} />
      <Titles2 isZoomed={isZoomed} setZoom={setZoom} />
   </section>
)
}
export default Innovation;