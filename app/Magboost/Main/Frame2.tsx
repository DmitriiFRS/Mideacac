import styles from '../Magboost.module.scss';

function Frame2() {
return (
   <div className={styles.frame2}>
      <div className={styles.frame2__squareContainer}>
         <div className={styles.frame2__square}></div>
      </div>
      <div className={styles.frame2__contentContainer}>
         <div className={styles.frame2__content}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.frame2__inner}></div>
            <p className={styles.frame2__title}>Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы оборудования и сокращают затраты на обслуживание и ремонт.
            </p>
            <p className={styles.frame2__title}>Эффективность: Высокая энергоэффективность снижает
               потребление энергии, позволяя экономить средства.</p>
            <p className={styles.frame2__title}>Компактность: Усовершенствованная конструкция чиллеров
               и теплообменника обеспечивает их удобное и компактное размещение.</p>
            <p className={styles.frame2__title}>Минимальный шум: благодаря электромагнитной технологии снижается уровень шума. Работа оборудования становится комфортной и приемлемой для окружающей среды.
            </p>
         </div>
      </div>
   </div>
)
}
export default Frame2;