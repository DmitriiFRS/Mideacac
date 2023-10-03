import styles from './Intro.module.scss';
import ShadowLine from './ShadowLine';
import Video from './Video/Video';

function Intro() {
   return (
   <section className={styles.intro}>
      <div className={`${styles.intro__container} container`}></div>
      <Video />
   </section>
   )
}
export default Intro;