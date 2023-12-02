import styles from "./Service.module.scss";
import ColsList from "./ColsList";

export type ColsProps = {
   title: string;
   sub: string;
};

function Cols({ cols }: { cols: Array<ColsProps> }) {
   return (
      <div className={styles.cols}>
         <h2 className={styles.cols__title}>Долгосрочная гарантия и надежная поддержка</h2>
         <ColsList cols={cols} />
      </div>
   );
}
export default Cols;
