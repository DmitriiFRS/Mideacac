import styles from "../V8.module.scss";
import Image from "next/image";
import temp from "../../../public/img/v8magboost/temp.png";

function Temperature() {
   return (
      <div className={styles.temperature}>
         <h2 className={styles.temperature__title}>Широкий диапазон температуры</h2>
         <div className={styles.temperature__imgBody}>
            <Image src={temp} alt="" fill />
         </div>
      </div>
   );
}
export default Temperature;
