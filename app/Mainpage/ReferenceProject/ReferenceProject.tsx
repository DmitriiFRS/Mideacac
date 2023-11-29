import styles from "./ReferenceProject.module.scss";
import Image from "next/image";
import reference from "../../../public/img/ReferenceImg.png";
import Effectbg from "./Effectbg";

function ReferenceProject() {
   return (
      <section className={styles.reference}>
         <h2 className={styles.reference__title}>Референтный проект</h2>
         <div className={styles.reference__imgBody}>
            <div className={styles.reference__img}>
               <Image quality={100} fill={true} src={reference} alt="referenceProjects" />
            </div>
            <Effectbg />
         </div>
      </section>
   );
}
export default ReferenceProject;
