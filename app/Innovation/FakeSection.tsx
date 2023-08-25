"use client"

import { useInView } from 'react-intersection-observer';
import styles from './Innovation.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeKukaStatus } from '../Redux/Slice/mainPageSlice';

function FakeSection() {
   const dispatch = useDispatch()
   const {ref, inView} = useInView({
      threshold: 0
   })

   useEffect(() => {
      dispatch(changeKukaStatus(inView));
   },[inView])
return (
   <div ref={ref} className={styles.fakeBlock}> inView checkpoint</div>
)
}
export default FakeSection;