"use client"

import { useInView } from 'react-intersection-observer';
import styles from './Innovation.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibleLines } from '../Redux/Slice/mainPageSlice';

function FakeSection2() {
   const dispatch = useDispatch()
   const {ref, inView} = useInView({
      threshold: 0.5
   });

   useEffect(() => {
      dispatch(setVisibleLines(inView));
   },[inView])
return (
   <div ref={ref} className={styles.fakeBlock2}>inView checkpoint</div>
)
}
export default FakeSection2;