import V8Main from '../MagboostV8RC/V8Main';
import V8Video from '../MagboostV8RC/V8Video';
import styles from './V8.module.scss';

const v8 = {
   video: '/video/V8-Main-Video.mp4',
   modelStartText: '/img/Innovation/MagboostStart.png',
   previewTitle: {
      title1: 'Мы не ограничиваемся просто созданием продукта. Мы стремимся к совершенству, и наша',
      title2: 'новейшая серия - Midea V8 VRF - это воплощение этой философии.',
      title3: 'Она объединяет не только ключевые инновации VRF технологий, но и дополняет их',
      title4: 'передовыми усовершенствованиями, отвечающими потребностям клиентов и вызовам нашего времени.',
      title5: 'Наши инженеры и исследователи уделяли внимание каждой детали, чтобы Midea V8 VRF стала',
      title6: 'идеальным сочетанием функциональности и элегантности.',
      title7: 'Это не просто система - это опыт, который добавит',
      title8: 'качества в вашу жизнь.'
   }
}

function V8Magboost() {
   return (
      <section className={styles.v8}>
         <V8Video video={v8.video} modelStartText={v8.modelStartText} />
         <V8Main previewTitle={v8.previewTitle} />
      </section>
   )
}
export default V8Magboost;