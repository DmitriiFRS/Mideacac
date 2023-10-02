
import Description2List from './Description2List';
import styles from './MagboostV8.module.scss';
import Image from 'next/image';
type titles = {
   title: string
   range: string
}

export type Description2Props = {
   bg: any
   title: string
   titles?: Array<titles>
}

function Description2({el}: {el : Description2Props}) {
   return (
      <div className={styles.description2}>
         <div className={`${styles.description2__bg}`}>
            <Image src={el.bg} alt='' fill={true} quality={100}/>
         </div>
         <h2 className={styles.description2__title}>{el.title}</h2>
         <div className={`${styles.container} ${styles.description2__container}`}> 
            {el.titles && <Description2List el={el}/>} 
         </div>
      </div>
   )
}
export default Description2;