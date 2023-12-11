"use client";
import styles from "../Magboost.module.scss";
import Image from "next/image";
import { ContentInner } from "./MagboostMain";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import ContentVideo from "./ContentVideo";
import ContentImage from "./ContentImage";
function ContentBlock({ content, idx }: { content: ContentInner; idx: number }) {
   const [isInView, setIsView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
   });

   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <div className={styles.bearing}>
         <div
            ref={ref}
            className={`${styles.bearing__body} ${idx % 2 !== 0 ? styles.bearing__evenBody : ""} ${
               isInView ? styles.bearing__body__active : ""
            }`}
         >
            {content.video ? <ContentVideo video={content.video} /> : <ContentImage image={content.image} />}

            <div className={styles.bearing__titlesBody}>
               <h2 className={styles.bearing__title}>{content.title}</h2>
               <ul className={styles.bearing__list}>
                  <li className={styles.bearing__item}>
                     <p className={styles.bearing__item__title}>{content.titles.title1}</p>
                  </li>
                  <li className={styles.bearing__item}>
                     <p className={styles.bearing__item__title}>{content.titles.title2}</p>
                  </li>
                  <li className={styles.bearing__item}>
                     <p className={styles.bearing__item__title}>{content.titles.title3}</p>
                  </li>
                  <li className={styles.bearing__item}>
                     <p className={styles.bearing__item__title}>{content.titles.title4}</p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
export default ContentBlock;
