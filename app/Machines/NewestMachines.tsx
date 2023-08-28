"use client"
import { useSelector } from 'react-redux';
import styles from './Machines.module.scss';
import Image from 'next/image';
import { RootState } from '../Redux/store';

type NewestMachinesPropsType = {
   deviceName: string
   image: any
   imageWidth: number
   imageHeight: number
}

function NewestMachines({deviceName, image, imageWidth, imageHeight}: NewestMachinesPropsType) {
   const visibility = useSelector((state: RootState) => state.mainPageReducer.isThirdAction);
   return (
      <div className={`${imageHeight === 302 ? styles.machines__newest1 : styles.machines__newest2} ${visibility ? styles.active : ''}`}>
         <p className={styles.machines__newest__title}>{deviceName}</p>
         <div className={styles.machines__container}>
            <Image src={image} alt='magboost' width={imageWidth} height={imageHeight} />
         </div>
      </div>
   )
}
export default NewestMachines;