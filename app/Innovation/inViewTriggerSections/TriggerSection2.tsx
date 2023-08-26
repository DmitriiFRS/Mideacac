"use client"

import { useInView } from 'react-intersection-observer';
import styles from '../Innovation.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstAction } from '../../Redux/Slice/mainPageSlice';

function TriggerSection2() {
   const dispatch = useDispatch()
   const {ref, inView} = useInView({
      threshold: 0
   });
   useEffect(() => {
      dispatch(firstAction(inView));
   },[inView])
return (
   <div ref={ref} className={styles.fakeBlock2}>First action</div>
)
}
export default TriggerSection2;