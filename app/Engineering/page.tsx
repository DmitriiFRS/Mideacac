import styles from "./Engineering.module.scss";
import bg from "../../public/img/OtherPages/engineering-bg.jpg";
import Image from "next/image";
import Cols from "./Cols";
import SideMenuTrigger from "../ReusableComponents/SideMenuTrigger";

function Engineering() {
   return (
      <div className={styles.engineering}>
         <SideMenuTrigger />

         <div className="container">
            <div className={styles.engineering__titleBody}>
               <h2 className={styles.engineering__titleMain}>Проектирование</h2>
               <p className={styles.engineering__sub}>Проект позволяет подобрать оптимальное оборудование</p>
            </div>
            <div className={styles.engineering__bg}>
               <Image src={bg} alt="bg" fill />
            </div>
            <h2 className={styles.engineering__title}>
               При заказе оборудования для систем вентиляции и кондиционирования мы можем разработать проект ОВК при
               необходимости. Проект позволяет подобрать оптимальное оборудование и спроектировать максимально
               эффективную систему для вашего объекта.
            </h2>
            <Cols />
            <div className={styles.engineering__bottomBody}>
               <p className={styles.engineering__bottom}>
                  Такой комплексный подход позволяет подобрать наиболее экономичное и оптимальное решение, гарантируя
                  эффективную и надежную систему ОВК, идеально соответствующую вашим задачам. Мы учитываем все нюансы
                  проектирования таких систем.
               </p>
            </div>
         </div>
      </div>
   );
}
export default Engineering;
