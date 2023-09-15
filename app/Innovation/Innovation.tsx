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
import imagebg from '../../public/img/Innovation/innovation_bg.png'

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
   
return (
   <section className={styles.innovation}>
     <div className={styles.innovation__img}>
            <Image src={imagebg} alt='bg' fill={true} />
      </div>
         <nav className={styles.innovation__nav}>
            
         </nav>
   </section>
)
}
export default Innovation;