"use client"

import { useSelector } from 'react-redux';
import Arrow1 from './Arrow1';
import Arrow2 from './Arrow2';
import styles from './Innovation.module.scss';
import { RootState } from '../Redux/store';

function Arrows() {
   const isLastAction = useSelector((state: RootState) => state.mainPageReducer.isThirdAction);
return (
   <div className={`${styles.arrowsBody} ${isLastAction ? styles.arrowsBody__unactive : ''}`}>
      <Arrow1 />
      <Arrow2 />
   </div>
)
}
export default Arrows;