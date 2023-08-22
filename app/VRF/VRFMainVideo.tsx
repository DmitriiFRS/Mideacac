import styles from './VRFv8Page.module.scss';

function VRFMainVideo() {
   return (
      <video className={styles.vrf__videoContainer} autoPlay muted loop>
         <source className={styles.video} src='/video/vrf-video.mp4' type='video/mp4' />
      </video>
   )
}
export default VRFMainVideo;