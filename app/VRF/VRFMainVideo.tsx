import StartEffect from './VRFMainPage/StartEffect';
import styles from './VRFv8Page.module.scss';

function VRFMainVideo() {
   return (
      <div className={styles.vrf__container}>
         <StartEffect />
         <video className={styles.vrf__videoContainer} autoPlay muted loop>
            <source className={styles.video} src='/video/vrf-video.mp4' type='video/mp4' />
         </video>
      </div>
      
   )
}
export default VRFMainVideo;