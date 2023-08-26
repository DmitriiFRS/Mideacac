"use client"

import { useSelector } from 'react-redux';
import styles from './Innovation.module.scss'
import Title from './Title';
import { RootState } from '../Redux/store';
type titleParamsType = {

}

const titleParams: titleParamsType = [{

}]

function Titles() {
   const isKukaActive = useSelector((state: RootState) => state.mainPageReducer.kukaNotVisible);
   const isFirstAction = useSelector((state: RootState) => state.mainPageReducer.isFirstAction);
   const isSecondAction = useSelector((state: RootState) => state.mainPageReducer.isSecondAction);
   return (
      <section className={styles.titles}>
         {isKukaActive && <Title isAction={isKukaActive} />}
         {isKukaActive && <Title isAction={isFirstAction} />}
         {isKukaActive && <Title isAction={isSecondAction} />}
      </section>
   )
}
export default Titles;