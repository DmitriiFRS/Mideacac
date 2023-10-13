import styles from '../Magboost.module.scss';
import Image from 'next/image';
import frame2 from '../../../public/img/v8magboost/frame2.png';
const items = [
'Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы оборудования и сокращают затраты на обслуживание и ремонт.',
'Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя экономить средства.',
'Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает их удобное и компактное размещение.',
'Минимальный шум: благодаря электромагнитной технологии снижается уровень шума. Работу оборудования становится комфортной и приемлемой для окружающей среды.'
]
function Frame2() {
return (
   <div className={`${styles.frame} ${styles.frame2}`}>
      <div className={styles.frame__bg}>
            <Image src={frame2} alt='' fill={true} />
      </div>
      <div className={`${styles.frame__container} ${styles.frame2__container}`}>
         <div className={styles.frame2__listBody}>
            <ul className={styles.frame2__list}>
               {items.map((el, index) => {
                  return (
                     <li key={index} className={styles.frame2__item}>{el}</li>
                  )
               })}
            </ul>
         </div>
      </div>
   </div>
)
}
export default Frame2;