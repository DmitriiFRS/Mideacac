"use client";

import styles from "./Service.module.scss";
import Image, { StaticImageData } from "next/image";
import cardImg from "../../public/img/OtherPages/serviceCard1.png";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type ContentCardProps = {
   img: StaticImageData;
   title?: string;
   list: Array<string>;
   id: number;
};

function ContentCard({ img, list, id }: ContentCardProps) {
   const [isInView, setIsView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.8,
      triggerOnce: true,
   });

   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <div ref={ref} className={`${styles.card__cardBody} ${isInView ? styles.card__cardBody__active : ""}`}>
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
