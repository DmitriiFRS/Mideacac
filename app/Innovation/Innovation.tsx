"use client"
import styles from './Innovation.module.scss';
import lab from '../../public/img/Innovation/lab.png';
import Image from 'next/image';
import { RootState } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Titles from './Titles';
import Arrows from './Arrows';
import { useEffect } from 'react';
import { scrollPosition } from '../Redux/Slice/mainPageSlice';

const list = [{
   number: '0%',
   subtitle: 'Количество брака'
},
{
   number: '17',
   subtitle: 'Научно-исследовательских центров'
},
{
   number: '20,000+',
   subtitle: 'Экспертов НИЦ'
},
{
   number: '$4.05 млрд',
   subtitle: 'Инвестиций за последние 5 лет'
}
]

function Innovation() {
   const isFixedEventActive = useSelector((state: RootState) => state.mainPageReducer.isFixedEventActive);
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
return (
   scrollRate &&
   <section className={styles.innovation}>
      <h2 className={styles.innovation__title}>Innovation and technologies</h2>
      <div className={styles.innovation__contentBody}>
         <div className={`${styles.innovation__imgContainer2} ${styles.innovation__imges}
         ${scrollRate > 17.1 ? styles.innovation__imgContainer2__active : ''}
         ${isFixedEventActive || scrollRate > 30 ? styles.innovation__imgContainer2__unactive : ''}`}>
            <Image src={lab} alt='lab' fill={true} />
         </div>
         <ul className={`${styles.innovation__sideTitle} ${scrollRate > 17.1 ? styles.innovation__sideTitle__active : ''}`}>
            {list.map((el, idx) => {
               return (
                  <li key={idx} className={styles.innovation__sideTitle__item}>
                     <p className={styles.innovation__sideTitle__title}>{el.number}</p>
                     <p className={styles.innovation__sideTitle__subtitle}>{el.subtitle}</p>
                  </li>
               )
            })}
         </ul>
      </div>
      {scrollRate > 17.1 && !isFixedEventActive && scrollRate < 30 && <Arrows />}
      {scrollRate > 17.1 && <Titles />}
   </section>
)
}
export default Innovation;