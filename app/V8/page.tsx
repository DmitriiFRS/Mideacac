import VRFMain from '../Magboost/VRFMainPage/VRFMain';
import VRFMainVideo from '../Magboost/VRFMainVideo';
import styles from './VRFFancoil.module.scss';

function VRFFancoil() {
   return (
      <section className={styles.v8}>
         <VRFMainVideo />
         <VRFMain />
      </section>
   )
}
export default VRFFancoil;