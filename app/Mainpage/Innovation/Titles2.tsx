import { useSelector } from "react-redux";
import styles from "./Innovation.module.scss";
import { RootState } from "../../Redux/store";
const list2 = [
   {
      title: "$51.16 млрд",
      subtitle: "Общий доход",
   },
   {
      title: "166,000+",
      subtitle: "Наших специалистов по всему миру",
   },
   {
      title: "278 место",
      subtitle: "В списке Fortune Global 500",
   },
   {
      title: "200+",
      subtitle: "Стран и регионов деятельности",
   },
];
type Titles1Props = {
   isZoomed: boolean;
   setZoom: Function;
};
function Titles2({ isZoomed, setZoom }: Titles1Props) {
   const scrollRate = useSelector((state: RootState) => state.mainPageReducer.scrollRate);
   return (
      <nav className={styles.innovation__navTwo}>
         <ul className={styles.innovation__listTwo}>
            {list2.map((el, index) => {
               return (
                  <li
                     key={index}
                     className={`${styles.innovation__itemTwo} ${
                        isZoomed && scrollRate !== null && scrollRate < 31 ? styles.innovation__itemTwo__active : ""
                     }`}
                  >
                     <div className={styles.innovation__titleBlockTwo}>
                        <p className={styles.innovation__titleElemTwo}>{el.title}</p>
                        <p className={styles.innovation__subElemTwo}>{el.subtitle}</p>
                     </div>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
export default Titles2;
