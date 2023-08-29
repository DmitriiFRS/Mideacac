"use client"
import { useSelector } from 'react-redux';
import styles from './Machines.module.scss';
import Image from 'next/image';
import { RootState } from '../Redux/store';
import Link from 'next/link';

type NewestMachinesPropsType = {
   deviceName: string
   image: any
   imageWidth: number
   imageHeight: number
}

function NewestMachines({deviceName, image, imageWidth, imageHeight}: NewestMachinesPropsType) {
   const visibility = useSelector((state: RootState) => state.mainPageReducer.isThirdAction);
   return (
      <Link href='/VRF' className={`${deviceName === 'Magboost' ? styles.machines__newest1 : styles.machines__newest2} ${visibility ? styles.active : ''}`}>
         <p className={`${styles.machines__newest__title} ${deviceName === 'Magboost' ? styles.machines__newest__title1 : styles.machines__newest__title2} ${visibility ? styles.titleActive : ''}`}>{deviceName}</p>
         <div className={styles.machines__container}>
            <Image src={image} alt='magboost' width={imageWidth} height={imageHeight} />
         </div>
      </Link>
   )
}
export default NewestMachines;