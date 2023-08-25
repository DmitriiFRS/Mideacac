import styles from './Machines.module.scss';
import Image from 'next/image';
import magboost from '../../public/img/Innovation/magboost.png';
import v8 from '../../public/img/Innovation/v8.png';

function Machines() {
return (
   <section className={styles.machines}>
      <div className={styles.machines__magboost}>
         <p className={styles.machines__magboost__title}></p>
         <div className={styles.machines__magboost__container}>
            <Image className={styles.test} src={magboost} alt='magboost' width={614} height={302} />
         </div>
      </div>
      <div className={styles.machines__v8}>
         <p className={styles.machines__v8__title}></p>
         <div className={styles.machines__v8__container}>
            <Image className={styles.test} src={v8} alt='v8' width={300} height={314} />
         </div>
      </div>
   </section>
)
}
export default Machines;