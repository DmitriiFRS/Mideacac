"use client"

import styles from './Machines.module.scss';
import Image from 'next/image';
import magboost from '../../public/img/Innovation/magboost.png';

function Magboost() {
   return (
      <div className={styles.machines__magboost}>
         <p className={styles.machines__magboost__title}></p>
         <div className={`${styles.machines__magboost__container}`}>
            <Image className={styles.test} src={magboost} alt='magboost' width={614} height={302} />
         </div>
      </div>
   )
}
export default Magboost;