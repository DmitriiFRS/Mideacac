"use client"

import { useInView } from 'react-intersection-observer';
import styles from '../Innovation.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thirdAction } from '../../Redux/Slice/mainPageSlice';

function TriggerSection4() {
   const dispatch = useDispatch()
   const {ref, inView} = useInView({
      threshold: 0
   });

   useEffect(() => {
      dispatch(thirdAction(inView));
   },[inView])
return (
   <div ref={ref} className={styles.fakeBlock2}>Third action</div>
)
}
export default TriggerSection4;