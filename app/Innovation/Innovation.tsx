"use client"
import styles from './Innovation.module.scss';
import kuka from '../../public/img/Innovation/kuka.png';
import lab from '../../public/img/Innovation/lab.png';
import Image from 'next/image';
import { RootState } from '../Redux/store';
import { useSelector } from 'react-redux';
import Arrows from './Arrows';
import Titles from './Titles';
import { useEffect, useState } from 'react';
import ScrollLock from '../UtilsComponents/ScrollLock';

const list = [{
   number: '$51.16 B',
   subtitle: 'Total Revenue'
},
{
   number: '166,000+',
   subtitle: 'Employees'
},
{
   number: '278th',
   subtitle: 'On the Fortune Global 500'
},
{
   number: '200+',
   subtitle: 'Countries & Regions of Operation'
}
]

function Innovation() {
   const kukaVisible = useSelector((state: RootState) => state.mainPageReducer.kukaNotVisible);
   const isLastAction = useSelector((state: RootState) => state.mainPageReducer.isThirdAction);

return (
   <section className={styles.innovation}>
      <h2 className={styles.innovation__title}>Innovation and technologies</h2>
      <div className={styles.innovation__contentBody}>
         <div className={`${styles.innovation__imgContainer1} ${styles.innovation__imges} ${ kukaVisible ? styles.innovation__imgContainer1__active : ''}`}>
            <Image src={kuka} alt='kuka' fill={true} />
         </div>
         <div className={`${styles.innovation__imgContainer2} ${styles.innovation__imges}
         ${ kukaVisible ? styles.innovation__imgContainer2__active : ''}
         ${isLastAction ? styles.innovation__imgContainer2__unactive : ''}`}>
            <Image src={lab} alt='lab' fill={true} />
         </div>
         <ul className={`${styles.innovation__sideTitle} ${ kukaVisible ? styles.innovation__sideTitle__active : ''}`}>
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
      {kukaVisible && <Arrows />}
      {kukaVisible && <Titles />}
   </section>
)
}
export default Innovation;