import styles from './ReferenceProject.module.scss';
import Image from 'next/image';
import reference from '../../public/img/ReferenceImg.png';

function ReferenceProject() {
   return (
   <section className={styles.reference}>
      <h2 className={styles.reference__title}>Референтный проект</h2>
      <div className={styles.reference__imgBody}>
         <div className={styles.reference__img}>
            <Image quality={100} fill={true} src={reference} alt='referenceProjects' />
         </div>
      </div>
   </section>
   )
}
export default ReferenceProject;