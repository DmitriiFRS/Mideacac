import { useSelector } from "react-redux";
import styles from "./Innovation.module.scss";
import { RootState } from "../../Redux/store";

const list = [
   {
      number: "0%",
      subtitle: "Количество брака",
   },
   {
      number: "17",
      subtitle: "Научно-исследовательских центров",
   },
   {
      number: "20,000+",
      subtitle: "Экспертов НИЦ",
   },
   {
      number: "$4.05 млрд",
      subtitle: "Инвестиций за последние 5 лет",
   },
];
type Titles1Props = {
   isZoomed: boolean;
   setZoom: Function;
};
function Titles1({ isZoomed, setZoom }: Titles1Props) {
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);
   return (
      <nav className={styles.innovation__nav}>
         <ul className={styles.innovation__list}>
            {list.map((el, index) => {
               return (
                  <li
                     key={index}
                     className={`${styles.innovation__item} ${
                        scrollRate !== null && scrollRate > 0.3 && !isZoomed
                           ? styles.innovation__item__active
                           : styles.innovation__item__unactive
                     }`}
                  >
                     <div className={styles.innovation__titleBlock}>
                        <p className={styles.innovation__titleElem}>{el.number}</p>
                        <p className={styles.innovation__subElem}>{el.subtitle}</p>
                     </div>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
export default Titles1;
