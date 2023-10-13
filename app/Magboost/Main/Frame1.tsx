import styles from '../Magboost.module.scss';
import Image from 'next/image';
import frame1 from '../../../public/img/v8magboost/frame1.png';

function Frame1() {
return (
   <div className={`${styles.frame} ${styles.frame1}`}>
      <div className={styles.frame__bg}>
         <Image className={styles.frame__img} src={frame1} alt='' fill={true} />
      </div>
      <div className={styles.frame__container}>
         <h2 className={styles.frame1__title}>Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши представления о надежности и эффективности</h2>
      </div>
   </div>
)
}
export default Frame1;