"use client"

import { useSelector } from 'react-redux';
import Arrow1 from './Arrow1';
import Arrow2 from './Arrow2';
import styles from './Innovation.module.scss';
import { RootState } from '../Redux/store';

function Arrows() {
   const isShakeArrows = useSelector((state: RootState) => state.mainPageReducer.isFirstAction);
return (
   <div className={`${styles.arrowsBody}`}>
      <Arrow1 />
      <Arrow2 />
   </div>
)
}
export default Arrows;