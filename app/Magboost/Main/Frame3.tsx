import styles from '../Magboost.module.scss';
import Image from 'next/image';
import bearing from '../../../public/img/v8magboost/bearing.png';

function Frame3() {
return (
   <div className={styles.frame3}>
      <div className={styles.frame3__imgBlock}>
         <div className={styles.circle}></div>
         <div className={styles.circle}></div>
         <h2 className={styles.frame3__imgBlock__title}>МАГНИТНЫЙ ПОДШИПНИК C ПРОСТРАНСТВЕННО-ВЕКТОРНЫМ УПРАВЛЕНИЕМ</h2>
         <div className={styles.frame3__imgBlock__img}>
            <Image fill={true} src={bearing} alt='bearing'/>
         </div>
         <div className={styles.frame3__inner}></div>
      </div>
      <div className={styles.frame3__titleBlock}>
         <ul className={styles.frame3__list}>
            <li className={styles.frame3__item}>Меньше трения</li>
            <li className={styles.frame3__item}>Меньше износа</li>
            <li className={styles.frame3__item}>Высокая точность</li>
            <li className={styles.frame3__item}>Большая стабильность</li>
         </ul>
      </div>
   </div>
)
}
export default Frame3;