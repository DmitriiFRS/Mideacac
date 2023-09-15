import styles from './Achievments.module.scss';
import Image from 'next/image';
import imagebg from '../../public/img/second/second_framebg.png';
const list = [{
   number: '$51.16 млрд',
   subtitle: 'Общий доход'
},
{
   number: '166,000+',
   subtitle: 'Наших специалистов по всему миру'
},
{
   number: '278 место',
   subtitle: 'В списке Fortune Global 500'
},
{
   number: '200+',
   subtitle: 'Стран и регионов деятельности'
}
]

function Navigation() {
   return (
      <section className={styles.achievments}>
         <div className={styles.achievments__img}>
            <Image src={imagebg} alt='bg' fill={true} />
         </div>
         <nav className={styles.achievments__nav}>
            
         </nav>
      </section>
   )
}
export default Navigation;