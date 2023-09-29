"use client"

import styles from './MagboostV8.module.scss';
import ImageTitleRC from './ImageTitleRC';
import PreviewTitle from './PreviewTitle';
import { useEffect, useState } from 'react';
import PreviewTitleText from './PreviewTitleText';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
type ImageTitleBlockType = {
   bg: any
   image: any
   vector: any
   titles: Array<string>
}

function V8Main({previewTitle, titleBlock} : {previewTitle: Array<string>, titleBlock: Array<ImageTitleBlockType>}) {
   useEffect(() => {
      window.scrollTo(0,0)
   }, [])
   const [isView1, setIsView1] = useState(false)
   const [isView2, setIsView2] = useState(false)
   const [isView3, setIsView3] = useState(false)
   const imageTitleParams = [{
      isView: isView1,
      setIsView: setIsView1
   },
   {
      isView: isView2,
      setIsView: setIsView2
   },
   {
      isView: isView3,
      setIsView: setIsView3
   }
   ]
   const scrollPosition = useSelector((state: RootState) => state.innovationsReducer.scrollRate);
   return (
      <section className={styles.VRFMain}>
         <PreviewTitle>
            <PreviewTitleText previewTitle={previewTitle} scrollPosition={scrollPosition}/>
         </PreviewTitle>
         {imageTitleParams.map((el, index) => {
            let orders = [];
            index % 2 === 0 ? orders.push('1','2') : orders.push('2','1')
            return (
               <ImageTitleRC bg={titleBlock[index].bg} image={titleBlock[index].image} vector={titleBlock[index].vector}
               titles={titleBlock[index].titles} orders={orders} isView={el.isView} setIsView={el.setIsView}/>
            )
         })}
      </section>
   )
}
export default V8Main;