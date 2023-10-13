import styles from '../Magboost.module.scss';
import Image from 'next/image';
import frame4 from '../../../public/img/v8magboost/frame4.png';
const list = ['Минимальная вибрация', 'Уменьшение уровня шума', 'Отсутствие масла', 'Меньше трения'];
function Frame4() {
return (
   <div className={`${styles.frame} ${styles.frame4}`}>
      <div className={styles.frame4__shadow}></div>
      <div className={styles.frame__bg}>
         <Image src={frame4} alt='' fill={true} />
      </div>
      <div className={`${styles.container} ${styles.frame4__container}`}>
         <ul className={styles.frame4__list}>
            {list.map((el, index) => {
               return (
                  <li key={index} className={styles.frame4__item}>{el}</li>
               )
            })}
         </ul>
         <div className={styles.frame4__title}>
            <div className={styles.frame4__blur}></div>
            <h2 className={styles.frame4__titleText}>КОМПРЕССОР BACK-TO-BACK С МАГНИТНОЙ ПОДВЕСКОЙ ВАЛА</h2>
         </div>
      </div>
   </div>
)
}
export default Frame4;