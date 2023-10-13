import styles from '../Magboost.module.scss';
import Image from 'next/image';
import frame3 from '../../../public/img/v8magboost/frame3.png';
import bearing from '../../../public/img/v8magboost/bearing.png';
const list = ['Большая стабильность', 'Высокая точность', 'Меньше износа', 'Меньше трения'];

function Frame3() {
return (
   <div className={`${styles.frame} ${styles.frame3}`}>
      <div className={styles.frame__bg}>
         <Image src={frame3} alt='' fill={true} />
      </div>
      <div className={`${styles.container} ${styles.frame3__container}`}>
         <h2 className={styles.frame3__title}>МАГНИТНЫЙ ПОДШИПНИК C ПРОСТРАНСТВЕННО-ВЕКТОРНЫМ УПРАВЛЕНИЕМ</h2>
         <div className={styles.frame3__img}>
            <div className={styles.frame3__imgContainer}>
               <Image src={bearing} alt='bearing' fill={true} />
            </div>
         </div>
         <ul className={styles.frame3__list}>
            {list.map((el, index) => {
               return (
                  <li key={index} className={styles.frame3__item}>{el}</li>
               )
            })}
         </ul>
      </div>
   </div>
)
}
export default Frame3;