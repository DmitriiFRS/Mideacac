import styles from "../Magboost.module.scss";
import efficiancy from "../../../public/img/v8magboost/efficiancy.png";
import Image from "next/image";

function Efficiancy() {
   return (
      <div className={styles.efficiancy}>
         <h2 className={styles.efficiancy__title}>Энергоэффективность</h2>
         <div className={styles.efficiancy__imgBody}>
            <Image src={efficiancy} alt="efficiancy" fill />
         </div>
      </div>
   );
}
export default Efficiancy;
