import styles from "../Magboost.module.scss";
import Image from "next/image";
import bearing from "../../../public/img/v8magboost/bearing.png";
import icon1 from "../../../public/icons/MagboostV8/icon1-1.svg";
import icon2 from "../../../public/icons/MagboostV8/icon1-2.svg";
import icon3 from "../../../public/icons/MagboostV8/icon1-3.svg";
import icon4 from "../../../public/icons/MagboostV8/icon1-4.svg";

function MagBearing() {
   return (
      <div className={styles.bearing}>
         <h2 className={styles.bearing__title}>Магнитный подшипник</h2>
         <div className={styles.bearing__body}>
            <div className={styles.bearing__imgBody}>
               <Image src={bearing} alt="bearing" />
            </div>
            <ul className={styles.bearing__list}>
               <li className={styles.bearing__item}>
                  <Image src={icon1} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>Меньше трения</p>
               </li>
               <li className={styles.bearing__item}>
                  <Image src={icon2} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>Меньше износа</p>
               </li>
               <li className={styles.bearing__item}>
                  <Image src={icon3} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>Высокая точность</p>
               </li>
               <li className={styles.bearing__item}>
                  <Image src={icon4} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>Большая стабильность</p>
               </li>
            </ul>
         </div>
      </div>
   );
}
export default MagBearing;
