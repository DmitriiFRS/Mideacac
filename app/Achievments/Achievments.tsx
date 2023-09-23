"use client"

import styles from './Achievments.module.scss';
import '../globals.css'
import Image from 'next/image';
import imagebg from '../../public/img/second/second_framebg.png';
import AchievmentsTitles from './AchievmentsTitles';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Shadow from '../Shadow/Shadow';
const shadowbg = '0px -40px 80px 120px rgb(0, 0, 0)'
function Navigation() {
   const [isFrameInView, setFrameView] = useState<boolean>(false);
   const {ref, inView} = useInView({
      threshold: 0.8,
      delay: isFrameInView ? 4000 : 0
   });
   useEffect(() => {
      setFrameView(inView)
   }, [inView])
   return (
      <section ref={ref} className={styles.achievments}>
         <div className={styles.achievments__img}>
            <Image src={imagebg} alt='bg' fill={true} />
         </div>
         <nav className={`${styles.achievments__nav} container`}>
            <AchievmentsTitles isFrameInView={isFrameInView} />
         </nav>
         <Shadow shadowbg={shadowbg}/>
      </section>
   )
}
export default Navigation;