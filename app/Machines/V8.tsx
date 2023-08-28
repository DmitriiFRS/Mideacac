import styles from './Machines.module.scss';
import Image from 'next/image';
import v8 from '../../public/img/Innovation/v8.png';

function V8() {
   return (
      <div className={styles.machines__v8}>
         <p className={styles.machines__v8__title}></p>
         <div className={`${styles.machines__v8__container}`}>
            <Image className={styles.test} src={v8} alt='v8' width={300} height={314} />
         </div>
      </div>
   )
   }
   export default V8;