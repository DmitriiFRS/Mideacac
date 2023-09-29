
import styles from './MagboostV8.module.scss';
import Image from 'next/image';
type titles = {
   title: string
   range: string
}

type Description2Props = {
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
         {el.titles && <div className={styles.container}>
            <ul className={styles.description2__titles}>
                  {el.titles.map((el, index) => {
                     return (
                        <li key={index} className={styles.description2__titleItem}>
                           <span className={styles.description2__range}>{el.range}</span>
                           <p className={styles.description2__subtitle}>{el.title}</p>
                        </li>
                     )
                  })}
            </ul>
         </div>
         }
      </div>
   )
}
export default Description2;