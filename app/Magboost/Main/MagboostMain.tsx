
import styles from '../Magboost.module.scss';
import MainVideo from './MainVideo';
import Frame1 from './Frame1';
import Frame2 from './Frame2';
import Frame3 from './Frame3';
import MagboostContainer from './MagboostContainer';
import Frame4 from './Frame4';

function MagboostMain() {
   return (
      <section className={styles.magboostMain}>
         <Frame1 />
         <Frame2 />
         <Frame3 />
         <Frame4 />
      </section>
   )
}
export default MagboostMain;