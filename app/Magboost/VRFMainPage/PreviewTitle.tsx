"use client"

import { useSelector } from 'react-redux';
import styles from '../VRFv8Page.module.scss';
import { RootState } from '@/app/Redux/store';

function PreviewTitle() {
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
   <div className={styles.preview}>
      <div className={styles.preview__titleContainer}>
         <div className={styles.preview__textLine}>
            Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши
            <div style={{width: scrollPosition > 18.5 ? '100%' :'0%'}} className={styles.preview__textFiller}>
               Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши
            </div>
         </div>
         <div className={styles.preview__textLine}>
            представления о надежности и эффективности.
            <div style={{width: scrollPosition > 20 ? '100%' : '0%'}} className={styles.preview__textFiller}>представления о надежности и эффективности.</div>
         </div>
         <div className={styles.preview__textLine}>
            Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы
            <div style={{width: scrollPosition > 21.5 ? '100%' : '0%'}} className={styles.preview__textFiller}>Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы</div>
         </div>
         <div className={styles.preview__textLine}>
         оборудования и сокращают затраты на обслуживание и ремонт.
            <div style={{width: scrollPosition > 23 ? '100%' : '0%'}} className={styles.preview__textFiller}>оборудования и сокращают затраты на обслуживание и ремонт.</div>
         </div>
         <div className={styles.preview__textLine}>
         Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя
            <div style={{width: scrollPosition > 24 ? '100%' : '0%'}} className={styles.preview__textFiller}>Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя</div>
         </div>
         <div className={styles.preview__textLine}>
         экономить средства.
            <div style={{width: scrollPosition > 25 ? '100%' : '0%'}} className={styles.preview__textFiller}>
               экономить средства.</div>
            </div>
         <div className={styles.preview__textLine}>
         Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает
            <div style={{width: scrollPosition > 26 ? '100%' : '0%'}} className={styles.preview__textFiller}>
            Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает</div>
            </div>
         <div className={styles.preview__textLine}>
         их удобное и компактное размещение.
            <div style={{width: scrollPosition > 27 ? '100%' : '0%'}} className={styles.preview__textFiller}>
               их удобное и компактное размещение.
            </div>
         </div>
         <div className={styles.preview__textLine}>
         Минимальный шум: благодаря электромагнитной технологии снижается уровень шума.
            <div style={{width: scrollPosition > 28 ? '100%' : '0%'}} className={styles.preview__textFiller}>
               Минимальный шум: благодаря электромагнитной технологии снижается уровень шума.
            </div>
         </div>
         <div className={styles.preview__textLine}>
         Работу оборудования становится комфортной и приемлемой для окружающей среды.
            <div style={{width: scrollPosition > 29 ? '100%' : '0%'}} className={styles.preview__textFiller}>
               Работу оборудования становится комфортной и приемлемой для окружающей среды.
            </div>
         </div>
      </div>
   </div>
   )
}
export default PreviewTitle;