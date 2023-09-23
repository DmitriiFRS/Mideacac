import Shadow from '../Shadow/Shadow';
import styles from './Intro.module.scss';
import Trigger from './Trigger';
import Video from './Video/Video';
const shadowbg = '0px 0px 100px 120px rgb(0, 0, 0)'
function Intro() {
   return (
   <section className={styles.intro}>
      <Video />
      <Trigger />
      <Shadow shadowbg={shadowbg}/>
   </section>
   )
}
export default Intro;