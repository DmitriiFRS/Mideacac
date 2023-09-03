import V8Main from './V8Main/V8Main';
import V8Video from './V8Main/V8Video';
import styles from './V8.module.scss';


const Newest = [{
   magboots: {
      video: '/video/Magboost-Main-Video.mp4',
      modelStartText: '../../../public/img/Innovation/MagboostStart.png',
   },
   v8: {
      video: '/video/Magboost-Main-Video.mp4',
      modelStartText: '../../../public/img/Innovation/MagboostStart.png',
   }
}]

function V8Magboost() {
   return (
      <section className={styles.v8}>
         <V8Video video={Newest[0].magboots.video} />
         <V8Main />
      </section>
   )
}
export default V8Magboost;