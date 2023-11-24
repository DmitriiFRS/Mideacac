import styles from "./Logistic.module.scss";

function BottomTitles() {
   return (
      <div className={styles.logistic__bottom}>
         <h2 className={styles.logistic__bottom__title}>Услуга ответственного хранения</h2>
         <div className={styles.logistic__bottom__subBody}>
            <p className={styles.logistic__bottom__sub}>
               Также предлагаем услугу ответственного хранения на наших складах. Компания Midea располагает тремя
               крупными складами готовой продукции в Узбекистане с запасом более 20 000 единиц промышленного,
               коммерческого и бытового оборудования. Мы предлагаем услугу &quot;договор ответственного хранения&quot;,
               которая позволяет оперативно удовлетворить потребности клиентов в продукции.
            </p>
         </div>
      </div>
   );
}
export default BottomTitles;
