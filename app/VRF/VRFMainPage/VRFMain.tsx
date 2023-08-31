"use client"

import styles from '../VRFv8Page.module.scss';
import ImageTitleRC from './ImageTitleRC';
import vrf1 from '../../../public/img/VRFV8/VRF-1.png'
import vrf2 from '../../../public/img/VRFV8/VRF-2.jpg'
import PreviewTitle from './PreviewTitle';
import { useEffect, useState } from 'react';


function VRFMain() {
   useEffect(() => {
      window.scrollTo(0,0)
   }, [])
   const [isView1, setIsView1] = useState(false)
   const [isView2, setIsView2] = useState(false)
   const imageTitleParams = [{
      image: vrf1,
      title: 'Магнитный подшипник с пространственно-векторным управлением',
      description: ['Меньше трения', 'Меньше износа', 'Высокая точность', 'Большая стабильность'],
      isView: isView1,
      setIsView: setIsView1
   },
   {
      image: vrf2,
      title: 'Компрессор Back-to-Back с магнитной подвеской вала',
      description: ['Меньше трения', 'Отсутствие масла', 'Уменьшение уровня шума', 'Минимальная вибрация'],
      isView: isView2,
      setIsView: setIsView2
   }
   ]

   function itemIsView(status: boolean) {
      
   }
   return (
      <section className={styles.VRFMain}>
         <PreviewTitle />
         {imageTitleParams.map((el, index) => {
            let orders = [];
            index % 2 === 0 ? orders.push('2','1') : orders.push('1','2')
            return (
               <ImageTitleRC key={index} image={el.image} title={el.title} description={el.description}
               orders={orders} isView={el.isView} setIsView={el.setIsView}/>
            )
         })}
      </section>
   )
}
export default VRFMain;