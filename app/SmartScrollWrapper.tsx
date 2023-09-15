"use client"

import { ReactNode } from 'react';
import styles from './page.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';

function SmartScrollWrapper({children}: {children: ReactNode}) {
   const isAwardsView = useSelector((state: RootState) => state.mainPageReducer.isAwardsView);
   const isReferenceView = useSelector((state: RootState) => state.mainPageReducer.isReferenceView);
   return (
      <div style={{scrollSnapType: !isAwardsView && !isReferenceView ? 'y mandatory' : 'none'}} className={styles.scrollWrapper}>
         {children}
      </div>
   )
}
export default SmartScrollWrapper;