import ColsList from "./ColsList";
import styles from "./Engineering.module.scss";
function Cols() {
   return (
      <div className={`${styles.engineering__cols} ${styles.cols}`}>
         <h3 className={styles.cols__mainTitle}>Этапы разработки</h3>
         <ColsList />
      </div>
   );
}
export default Cols;
