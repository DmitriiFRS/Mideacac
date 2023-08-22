import styles from './Vrf.module.scss';
import Image from 'next/image';
import vrf from '../../public/img/vrf-v8-main.jpeg';
import pulse from '../../public/icons/pulse-img.png';
import Link from 'next/link';

function Vrf() {
   return (
      <section className={styles.vrf}>
         <Link href={'/VRF'} className={styles.vrf__imgContainer}>
            <div className={styles.vrf__titleContainer}>
               <h2 className={styles.vrf__title}>V8 Series VRF</h2>
               <Image className={styles.vrf__pulseIcon} src={pulse} alt='pulse' width={92} height={92} />
            </div>
            <Image src={vrf} alt='VRF-V8' fill={true} quality={100} style={{objectFit: 'cover', objectPosition: 'top'}} />
         </Link>
      </section>
   )
}
export default Vrf;