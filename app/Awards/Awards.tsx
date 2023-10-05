import styles from './Awards.module.scss';
import Image from 'next/image';
import ahri from '../../public/icons/AwardsIcons/ahri.svg';
import iso from '../../public/icons/AwardsIcons/iso.svg';
import eurovent from '../../public/icons/AwardsIcons/eurovent.svg';
import gold2022 from '../../public/icons/AwardsIcons/gold.svg';
import '../globals.css'


function Awards() {
return (
   <section className={styles.awards}>
      <h2 className={styles.awards__title}>Награды и сертификаты</h2>
      <div className={`${styles.awards__iconsBody} ${'container'}`}>
         <Image src={ahri} alt='logo' />
         <Image src={iso} alt='logo' />
         <Image src={eurovent} alt='logo' />
         <Image src={gold2022} alt='logo' />
      </div>
   </section>
)
}
export default Awards;