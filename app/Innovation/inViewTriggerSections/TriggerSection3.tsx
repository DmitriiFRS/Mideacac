"use client"

import { useInView } from 'react-intersection-observer';
import styles from '../Innovation.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { secondAction } from '../../Redux/Slice/mainPageSlice';

function TriggerSection3() {
   const dispatch = useDispatch()
   const {ref, inView} = useInView({
      threshold: 0
   });

   useEffect(() => {
      dispatch(secondAction(inView));
   },[inView])
return (
   <div ref={ref} className={styles.fakeBlock2}>Second action</div>
)
}
export default TriggerSection3;