import styles from "./Engineering.module.scss";
const cols = [
   {
      title: "Теплотехнические расчеты помещений",
      sub: "Расчет теплопотерь и теплопоступлений для определения необходимой мощности системы",
   },
   {
      title: "Гидравлический расчет системы",
      sub: "Подбор диаметров воздуховодов, диффузоров, расчет потерь давления",
   },
   {
      title: "Аэродинамический расчет",
      sub: "Расчет скоростей и расходов воздуха",
   },
   {
      title: "Проектирование систем",
      sub: "Чертежи планировки систем вентиляции и кондиционирования",
   },
   {
      title: "Подбор оборудования",
      sub: "Подбор оптимальных моделей вентиляционного",
   },
   {
      title: "Технические детали",
      sub: "Спецификация материалов и оборудования со всеми техническими характеристиками",
   },
];
function Cols() {
   return (
      <div className={`${styles.engineering__cols} ${styles.cols}`}>
         <h3 className={styles.cols__mainTitle}>Этапы разработки</h3>
         <ul className={styles.cols__body}>
            {cols.map((el, index) => {
               return (
                  <li key={index} className={styles.cols__item}>
                     <p className={styles.cols__title}>{el.title}</p>
                     <p className={styles.cols__sub}>{el.sub}</p>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default Cols;
