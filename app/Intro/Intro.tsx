import styles from './Intro.module.scss';
import Video from './Video/Video';

function Intro() {
   return (
   <section className={styles.intro}>
      <Video />
   </section>
   )
}
export default Intro;