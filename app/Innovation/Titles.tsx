"use client"

import { useSelector } from 'react-redux';
import styles from './Innovation.module.scss'
import Title from './Title';
import { RootState } from '../Redux/store';

const transformTranslate = ['translateX(-50%)', 'translateX(50%)', 'translateX(-50%)']
const titleData = ['17 научно-исследовательских центров Midea играют определяющую роль в способности компании предлагать клиентам передовые, энергоэффективные и надежные климатические системы и оборудование.',
   'Благодаря инвестициям в инновации Midea остается в авангарде технологий ОВКВ и предоставляет своим клиентам абсолютно революционные разработки в области изготовления чиллеров и систем VRF.',
   'Техника соответствует заявленным характеристикам, стоимости и качеству.']
function Titles() {
   const isKukaActive = useSelector((state: RootState) => state.mainPageReducer.kukaNotVisible);
   const isFirstAction = useSelector((state: RootState) => state.mainPageReducer.isFirstAction);
   const isSecondAction = useSelector((state: RootState) => state.mainPageReducer.isSecondAction);
   const isLastAction = useSelector((state: RootState) => state.mainPageReducer.isThirdAction);
   return (
      <section className={`${styles.titles} ${isLastAction ? styles.titles__unactive : ''}`}>
         {isKukaActive && <Title isAction={isKukaActive} translate={transformTranslate[0]} title={titleData[0]} />}
         {isKukaActive && <Title isAction={isFirstAction} translate={transformTranslate[1]} title={titleData[1]}/>}
         {isKukaActive && <Title isAction={isSecondAction} translate={transformTranslate[2]} title={titleData[2]}/>}
      </section>
   )
}
export default Titles;