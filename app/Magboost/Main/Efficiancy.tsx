"use client";

import styles from "../Magboost.module.scss";
import efficiancy from "../../../public/gif/speed-magboost.gif";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Efficiancy() {
   const [isInView, setIsView] = useState<boolean>(false);
   const { ref, inView } = useInView({
      threshold: 0.3,
      triggerOnce: true,
   });
   useEffect(() => {
      setIsView(inView);
   }, [inView]);
   return (
      <div className={styles.efficiancy}>
         <h2 className={styles.efficiancy__title}>Энергоэффективность</h2>
         <div
            ref={ref}
            className={`${styles.efficiancy__imgBody} ${isInView ? styles.efficiancy__imgBody__active : ""}`}
         >
            <Image src={efficiancy} alt="efficiancy" fill />
         </div>
      </div>
   );
}
export default Efficiancy;
