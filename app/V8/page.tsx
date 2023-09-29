import V8Main from '../MagboostV8RC/V8Main';
import V8Video from '../MagboostV8RC/V8Video';
import styles from './V8.module.scss';
import shieldBox from '../../public/icons/MagboostV8/shieldbox.svg';
import supersence from '../../public/icons/MagboostV8/supersence.svg';
import hyperlink from '../../public/icons/MagboostV8/hyperlink.svg';
import v8a1 from '../../public/img/v8magboost/v8 1.png';
import bg1 from '../../public/img/v8magboost/cubesbg1.png';
import bg2 from '../../public/img/v8magboost/cubesbg2.png';
import bg3 from '../../public/img/v8magboost/cubesbg3.png';
import bg4 from '../../public/img/v8magboost/cubesbg4.png';
import temp from '../../public/img/v8magboost/temp.png';


const v8 = {
   video: '/video/V8-Main-Video.mp4',
   modelStartText: '/img/Innovation/v8Text2.png',
   previewTitle: ['Мы не ограничиваемся просто созданием продукта. Мы стремимся к совершенству, и наша', 'новейшая серия - Midea V8 VRF - это воплощение этой философии.',
   'Она объединяет не только ключевые инновации VRF технологий, но и дополняет их', 'передовыми усовершенствованиями, отвечающими потребностям клиентов и вызовам времени.',
   'Наши инженеры и исследователи уделяли внимание каждой детали, чтобы Midea V8 VRF стала', 'идеальным сочетанием функциональности и элегантности.',
   'Это не просто система - это опыт, который добавит', 'качества в вашу жизнь.'],
   titleBlock: [{
      bg: bg1,
      image: v8a1,
      vector: supersence,
      titles: ['Произвольная топология сети для подключения внутренних блоков (традиционная, звезда, петля, древовидная)',
      'Устойчивость к электромагнитным помехам от радиосвязи, высокого напряжения, другого оборудования',
      'Bозможность отключения одного внутреннего блока (режим технического обслуживания)',
      'Электропитания внутренних блоков от отдельных источников энергии']
   },
   {
      bg: bg2,
      image: v8a1,
      vector: shieldBox,
      titles: ['Степень защиты IP55 от влаги, соли, пыли и насекомых', 'Система микроканального охлаждения электронных компонентов хладагентом',
   'Встроенный циркуляционный вентилятор, PTC нагреватель и пять высокоточных температурных датчиков для поддержания постоянной температуры внутри шкафа управления и электроснабжения']
   },
   {
      bg: bg3,
      image: v8a1,
      vector: hyperlink,
      titles: ['19 датчиков в холодильном контуре для анализа состояния в режиме реального времени',
      'В случае отказа физического датчика система создает виртуальный датчик (система Digital twin)',
      'Контроль количества хладагента']
   }],
   titleBlock2: [{
      bg: bg4,
      title: 'Удобство проектирования и соответствие требованием заказчика',
      titles: [{
         title: 'Общая длина труб',
         range: '1100 м'
      },
      {
         title: 'Актуальная длина труб между внутренними и наржуными блоками',
         range: '200 м'
      },
      {
         title: 'Эквивалентная длина труб между внутренними и наржуными блоками',
         range: '260 м'
      },
      {
         title: 'Максимальный перепад по высоте между внутренними и наржуными блоками',
         range: '100 (110) м'
      },
      {
         title: 'Максимальное расстояние между первым разветвителем и последним внутренним блоком',
         range: '90 м'
      },
      {
         title: 'Максимальный перепад по высоте между внутренними блоками',
         range: '40 м'
      },]
   },
   {
      bg: temp,
      title: 'Широкий температурный диапазон'
   }]
}

function V8Magboost() {
   return (
      <section className={styles.v8}>
         <V8Video video={v8.video} modelStartText={v8.modelStartText} />
         <V8Main previewTitle={v8.previewTitle} titleBlock={v8.titleBlock} titleBlock2={v8.titleBlock2} />
      </section>
   )
}
export default V8Magboost;