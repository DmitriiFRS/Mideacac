import styles from "./Service.module.scss";

function Reason() {
   return (
      <div className={styles.reason}>
         <h3 className={styles.reason__title}>Причина обращения в сервисный центр</h3>
         <p className={styles.reason__sub}>По причине низкой квалификации монтажников или неправильной эксплуатации.</p>
         <p className={styles.reason__sub}>
            Первичной и основной задачей сервисного центра является обеспечение своевременного <br /> выполнения
            гарантийных обязательств!
         </p>
      </div>
   );
}
export default Reason;
