import styles from './Awards.module.scss';
import Image from 'next/image';
import ahri from '../../public/icons/AwardsIcons/AHRI.png';
import iso from '../../public/icons/AwardsIcons/ISO.png';
import eurovent from '../../public/icons/AwardsIcons/EUROVENT.png';
import gold2022 from '../../public/icons/AwardsIcons/GOLD 2022.png';


function Awards() {
return (
   <section className={styles.awards}>
      <h2 className={styles.awards__title}>Награды и сертификаты</h2>
      <div className={styles.awards__iconsBody}>
         <Image src={ahri} alt='' />
         <Image src={iso} alt='' />
         <Image src={eurovent} alt='' />
         <Image src={gold2022} alt='' />
         <Image src={eurovent} alt='' />
      </div>
   </section>
)
}
export default Awards;