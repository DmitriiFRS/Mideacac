
import styles from './MagboostV8.module.scss';
import Image from 'next/image';
import TitleImage from './TitleImage';
import DescriptionList from './DescriptionList';

export type ImageTitleProps = {
   bg: any
   image: any
   vector: any
   titles: Array<string>
   index: number
}

function Description({ bg, image, vector, titles, index }: ImageTitleProps) {
   // flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' and  flex-direction: column !important when max-width: 725px
   return (
      <div className={styles.description}>
         <div className={styles.description__bg}>
            <Image src={bg} alt='' fill={true} quality={100} />
         </div>
         <div style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}} className={`${styles.description__container} ${styles.container}`}>
            <TitleImage image={image} />
            <div style={{alignItems: index % 2 === 0 ? 'flex-end' : 'flex-start'}} className={styles.description__titles}>
               <Image className={styles.description__img} src={vector} alt={''} width={340} height={120} />
               <DescriptionList index={index} titles={titles} />
            </div>
         </div>
      </div>
   )
}
export default Description;