"use client";

import styles from "./Machines.module.scss";
import magboost from "../../../public/img/Innovation/magboost.png";
import v8 from "../../../public/img/Innovation/v8.png";
import NewestMachines from "./NewestMachines";
import Image from "next/image";
import shadowbg from "../../../public/img/Innovation/shadow_bg.jpg";
import TriggerFixEvent from "./TriggerFixEvent";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useState } from "react";

const newestData = [
   {
      deviceName: "Magboost",
      image: magboost,
      imageWidth: 700,
      imageHeight: 352,
      href: "/Magboost",
   },
   {
      deviceName: "V8",
      image: v8,
      imageWidth: 700,
      imageHeight: 504,
      href: "V8",
   },
];
function Machines() {
   const [triggerOnce, setTrigger] = useState(false);
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);
   if (scrollRate !== null && scrollRate > 33 && !triggerOnce) {
      setTrigger(true);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
         window.scrollTo(0, 3930);
      }, 100);
      setTimeout(() => {
         document.body.style.overflow = "auto";
      }, 1100);
   }
   if (scrollRate !== null && scrollRate < 33 && triggerOnce) {
      setTrigger(false);
   }
   return (
      <section style={{ opacity: scrollRate !== null && scrollRate > 34 ? 1 : 0 }} className={`${styles.machines}`}>
         <div className={styles.machines__shadow}>
            <Image src={shadowbg} alt="" fill={true}></Image>
         </div>
         {newestData.map((el, idx) => {
            return (
               <NewestMachines
                  key={idx}
                  deviceName={el.deviceName}
                  image={el.image}
                  imageWidth={el.imageWidth}
                  imageHeight={el.imageHeight}
                  href={el.href}
               />
            );
         })}
         <TriggerFixEvent />
      </section>
   );
}
export default Machines;