"use client";
import styles from "../V8.module.scss";
import Image from "next/image";
import { ContentInner } from "./V8Main";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
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
      <div className={styles.content}>
         <div
            ref={ref}
            className={`${styles.content__body} ${idx % 2 !== 0 ? styles.content__evenBody : ""} ${
               isInView ? styles.content__body__active : ""
            }`}
         >
            <div className={styles.content__imgBody}>
               <Image src={content.image} alt="v8" fill />
            </div>
            <div className={styles.content__title}>
               <Image src={content.icon} alt="icon" width={300} height={67} />
               <ul className={styles.content__list}>
                  {content.titles.map((el, index) => {
                     return (
                        <li key={index} className={styles.content__item}>
                           {el}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </div>
   );
}
export default ContentBlock;
