import VRFMain from './VRFMainPage/VRFMain';
import VRFMainVideo from './VRFMainVideo';
import styles  from './VRFv8Page.module.scss';

function VRFv8Page() {
return (
   <section className={styles.vrf}>
      <VRFMainVideo />
      <VRFMain />
   </section>
)
}
export default VRFv8Page;