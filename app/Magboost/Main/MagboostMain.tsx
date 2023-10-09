
import styles from '../Magboost.module.scss';
import MainVideo from './MainVideo';
import Frame1 from './Frame1';
import Frame2 from './Frame2';
import Frame3 from './Frame3';
import MagboostContainer from './MagboostContainer';

function MagboostMain() {
   return (
      <section className={styles.magboostMain}>
         <MainVideo />
         <MagboostContainer>
            <Frame1 />
            <Frame2 />
            <Frame3 />
         </MagboostContainer>
      </section>
   )
}
export default MagboostMain;