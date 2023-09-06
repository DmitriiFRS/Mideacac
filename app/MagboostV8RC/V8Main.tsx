"use client"

import styles from './MagboostV8.module.scss';
import ImageTitleRC from './ImageTitleRC';
import vrf1 from '../../public/gif/fonsiz_siklli0000-1000.gif';
import vrf2 from '../../public/img/Innovation/VRF-2.jpg'
import PreviewTitle from './PreviewTitle';
import { useEffect, useState } from 'react';

type PreviewTitleType = {
   title1: string,
   title2: string,
   title3: string,
   title4: string,
   title5: string,
   title6: string,
   title7: string,
   title8: string
}
export type V8MagboostMainType = {
   previewTitle: PreviewTitleType;
 }

function VRFMain({previewTitle} : V8MagboostMainType) {
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
   return (
      <section className={styles.VRFMain}>
         <PreviewTitle previewTitle={previewTitle} />
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