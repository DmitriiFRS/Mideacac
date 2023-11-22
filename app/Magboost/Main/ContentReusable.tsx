import styles from "../Magboost.module.scss";
import Image from "next/image";
import { ContentInner } from "./MagboostMain";
function ContentReusable({ content, idx }: { content: ContentInner; idx: number }) {
   return (
      <div className={styles.bearing}>
         <h2 className={styles.bearing__title}>{content.title}</h2>
         <div className={`${styles.bearing__body} ${idx % 2 !== 0 ? styles.bearing__evenBody : ""}`}>
            <div className={styles.bearing__imgBody}>
               <Image src={content.image.src} alt="bearing" width={500} height={300} />
            </div>
            <ul className={styles.bearing__list}>
               <li className={styles.bearing__item}>
                  <Image src={content.icons.icon1} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>{content.titles.title1}</p>
               </li>
               <li className={styles.bearing__item}>
                  <Image src={content.icons.icon2} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>{content.titles.title2}</p>
               </li>
               <li className={styles.bearing__item}>
                  <Image src={content.icons.icon3} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>{content.titles.title3}</p>
               </li>
               <li className={styles.bearing__item}>
                  <Image src={content.icons.icon4} alt="icon" width={50} height={50} />
                  <p className={styles.bearing__item__title}>{content.titles.title4}</p>
               </li>
            </ul>
         </div>
      </div>
   );
}
export default ContentReusable;
