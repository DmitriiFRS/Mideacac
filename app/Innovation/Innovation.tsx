"use client"
import styles from './Innovation.module.scss';
import Image from 'next/image';
import { RootState } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { scrollPosition } from '../Redux/Slice/mainPageSlice';
import imagebg from '../../public/img/Innovation/innovation_bg.png'
import imagebg2 from '../../public/img/Innovation/Screenshot_1.png';

const list = [{
   number: '0%',
   subtitle: 'Количество брака',
   number2: '17',
   subtitle2: 'Научно-исследовательских центров'
},
{
   number: '20,000+',
   subtitle: 'Экспертов НИЦ',
   number2: '$4.05 млрд',
   subtitle2: 'Инвестиций за последние 5 лет'
},
]
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
   const [changeImage, setImage] = useState<boolean>(false);
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
      console.log(scrollRate)
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
         setTimeout(() => {
            setImage(true);
         }, 0)
      }
      if (scrollRate !== null && scrollRate < 20) {
         setZoom(false);
         setTimeout(() => {
            setImage(false);
         }, 0)
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
      <nav className={styles.innovation__nav}>
         <ul className={styles.innovation__list}>
            {list.map((el, index) => {
               return (
                  <li key={index} className={`${styles.innovation__item} ${index === 0 ? styles.innovation__item1 : styles.innovation__item2}
                  ${scrollRate > 7 ? styles.innovation__item__active : ''}`}>
                     <div className={styles.innovation__titleBlock}>
                        <p className={styles.innovation__titleElem}>{el.number}</p>
                        <p className={styles.innovation__subElem}>{el.subtitle}</p>
                     </div>
                     <div className={styles.innovation__titleBlock}>
                        <p className={styles.innovation__titleElem}>{el.number2}</p>
                        <p className={styles.innovation__subElem}>{el.subtitle2}</p>
                     </div>
                  </li>
               )
            })}
         </ul>
      </nav>
   </section>
)
}
export default Innovation;