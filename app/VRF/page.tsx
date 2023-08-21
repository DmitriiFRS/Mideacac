import styles  from './VRFv8Page.module.scss';

function VRFv8Page() {
return (
   <section className={styles.vrf}>
      <video className={styles.vrf__videoContainer} autoPlay muted loop>
         <source className={styles.video} src='/video/vrf-video.mp4' type='video/mp4' />
      </video>
   </section>
)
}
export default VRFv8Page;