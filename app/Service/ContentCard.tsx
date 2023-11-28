import styles from "./Service.module.scss";
import Image, { StaticImageData } from "next/image";
import cardImg from "../../public/img/OtherPages/serviceCard1.png";

type ContentCardProps = {
   img: StaticImageData;
   title?: string;
   list: Array<string>;
   id: number;
};

function ContentCard({ img, title, list, id }: ContentCardProps) {
   return (
      <div className={styles.card__cardBody}>
         <div className={`${styles.card__imgBody} ${id % 2 === 0 ? styles.card__imgBody__order : ""}`}>
            <Image src={img.src} alt="image" fill />
         </div>
         <div className={`${styles.card__titlesBody} ${id % 2 === 0 ? styles.card__titlesBody__order : ""}`}>
            <ul className={styles.card__list}>
               {list.map((el, index) => {
                  return (
                     <li key={index} className={`${styles.card__item} ${index === 0 ? styles.card__title : ""}`}>
                        {el}
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
export default ContentCard;
