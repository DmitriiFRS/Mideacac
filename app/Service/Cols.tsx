import styles from "./Service.module.scss";

type ColsProps = {
   title: string;
   sub: string;
};

function Cols({ cols }: { cols: Array<ColsProps> }) {
   return (
      <div className={styles.cols}>
         <h2 className={styles.cols__title}>Долгосрочная гарантия и надежная поддержка</h2>
         <ul className={styles.cols__list}>
            {cols.map((el, index) => {
               return (
                  <li key={index} className={styles.cols__item}>
                     <p className={styles.cols__item__title}>{el.title}</p>
                     <p className={styles.cols__item__sub}>{el.sub}</p>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default Cols;
