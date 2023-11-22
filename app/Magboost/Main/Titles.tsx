import styles from "../Magboost.module.scss";
const cols = [
   {
      title: "Долговечность",
      sub: "Инновационные технологии и отсутствие трения увеличивают срок службы оборудования и сокращают затраты на обслуживание и ремонт.",
      num: 1,
   },
   {
      title: "Эффективность",
      sub: "Высокая энергоэффективность снижает потребление энергии, позволяя экономить средства.",
      num: 2,
   },
   {
      title: "Компактность",
      sub: "Усовершенствованная конструкция чиллеров и теплообменника обеспечивает их удобное и компактное размещение.",
      num: 3,
   },
   {
      title: "Минимальный шум",
      sub: "Благодаря электромагнитной технологии снижается уровень шума. Работу оборудования становится комфортной и приемлемой для окружающей среды.",
      num: 4,
   },
];

function Titles() {
   return (
      <div className={styles.titles}>
         <div className={styles.titles__mainBody}>
            <h2 className={styles.titles__main}>
               Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши представления о
               надежности и эффективности
            </h2>
         </div>

         <div className={styles.titles__cols}>
            {cols.map((el, index) => {
               return (
                  <li key={index} className={styles.titles__col}>
                     <h4 className={styles.titles__col__title}>{el.title}</h4>
                     <p className={styles.titles__col__sub}>{el.sub}</p>
                     <span className={styles.titles__col__num}>{el.num}</span>
                  </li>
               );
            })}
         </div>
      </div>
   );
}
export default Titles;
