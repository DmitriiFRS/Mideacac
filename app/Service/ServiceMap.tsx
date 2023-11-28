import styles from "./Service.module.scss";
import Image from "next/image";
import servicemap from "../../public/img/OtherPages/servicemap.png";

function ServiceMap() {
   return (
      <div className={styles.servicemap}>
         <h2 className={styles.servicemap__title}>Сервисные представительства</h2>
         <div className={styles.servicemap__imgBody}>
            <Image src={servicemap} alt="map" fill />
         </div>
      </div>
   );
}
export default ServiceMap;
