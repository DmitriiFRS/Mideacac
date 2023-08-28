"use client"

import { useInView } from 'react-intersection-observer';
import styles from '../Innovation.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fourthAction, thirdAction } from '../../Redux/Slice/mainPageSlice';

function TriggerSection4() {
   const dispatch = useDispatch()
   const {ref, inView} = useInView({
      threshold: 0
   });

   useEffect(() => {
      dispatch(fourthAction(inView));
   },[inView])
return (
   <div ref={ref} className={styles.lastFakeBlock}>Third action</div>
)
}
export default TriggerSection4;