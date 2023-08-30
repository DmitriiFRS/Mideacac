import styles from '../VRFv8Page.module.scss';
import Image from 'next/image';

type ordersType = {
   order1: string
   order2: string
}

type ImageTitleProps = {
   image: any
   description: string
   orders: ordersType
}

function ImageTitleRC({ image, description, orders}: ImageTitleProps) {
   return (
      <div className={styles.imageTitle}>
         <div style={{order: orders.order1}} className={styles.image__container}>
            <Image src={image} alt='1' fill={true}/>
         </div>
         <div style={{order: orders.order2}} className={styles.title}>
            <ul className={styles.title__list}>
               <li className={styles.title__item}>Описание 1</li>
               <li className={styles.title__item}>Описание 2</li>
               <li className={styles.title__item}>Описание 3</li>
               <li className={styles.title__item}>Описание 4</li>
            </ul>
         </div>
      </div>
   )
}
export default ImageTitleRC;