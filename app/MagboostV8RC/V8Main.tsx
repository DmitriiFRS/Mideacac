"use client"
import styles from './MagboostV8.module.scss';
import Description from './Description';
import PreviewTitle from './PreviewTitle';
import { useEffect, useState } from 'react';
import PreviewTitleText from './PreviewTitleText';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import Description2 from './Description2';
import { setSidemenuVisible } from '../Redux/Slice/mainPageSlice';
type ImageTitleBlockType = {
   bg: any
   image: any
   vector: any
   titles: Array<string>
}
type titles = {
   title: string
   range: string
}
type titleBlock2 = {
   bg: any
   title: string
   titles?: Array<titles>
}

function V8Main({previewTitle, previewTitleMobile, titleBlock, titleBlock2}
   : {previewTitle: Array<string>, previewTitleMobile: Array<string>, titleBlock: Array<ImageTitleBlockType>, titleBlock2: Array<titleBlock2>}) {
   useEffect(() => {
      window.scrollTo(0,0)
   }, [])
   const dispatch = useDispatch();
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
   useEffect(() => {
      console.log(scrollPosition)
      if (scrollPosition !== null && scrollPosition > 7) {
         dispatch(setSidemenuVisible(false))
      }
      if (scrollPosition !== null && scrollPosition < 7) {
         dispatch(setSidemenuVisible(true))
      }
   }, [scrollPosition])
   return (
      <section className={styles.VRFMain}>
         <PreviewTitle>
            <PreviewTitleText previewTitle={previewTitle} previewTitleMobile={previewTitleMobile} scrollPosition={scrollPosition}/>
         </PreviewTitle>
         {imageTitleParams.map((el, index) => {
            return (
               <Description key={index} bg={titleBlock[index].bg} image={titleBlock[index].image} vector={titleBlock[index].vector}
               titles={titleBlock[index].titles} index={index}/>
            )
         })}
         {titleBlock2.map((el, index) => {
            return (
               <Description2 key={index} el={el} />
            )
         })}
      </section>
   )
}
export default V8Main;