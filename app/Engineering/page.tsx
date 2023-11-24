import styles from "./Engineering.module.scss";
import bg from "../../public/img/OtherPages/logistic-bg.jpg";
import Image from "next/image";
import Cols from "./Cols";

function Engineering() {
   return (
      <div className={styles.engineering}>
         <div className={styles.engineering__bg}>
            <Image src={bg} alt="bg" fill />
         </div>
         <div className="container">
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
