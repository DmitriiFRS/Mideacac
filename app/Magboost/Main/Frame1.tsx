import styles from '../Magboost.module.scss';
import Image from 'next/image';
import magboost1 from '../../../public/img/v8magboost/magboost1.png';

function Frame1() {
return (
   <div className={styles.frame1}>
      <h2 className={styles.frame1__title}>Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши представления о надежности и эффективности.
      </h2>
         <div className={styles.frame1__imgContainer}>
         <Image className={styles.frame1__img} height={745} width={1058} src={magboost1} alt='magboost' />
         </div>
   </div>
)
}
export default Frame1;