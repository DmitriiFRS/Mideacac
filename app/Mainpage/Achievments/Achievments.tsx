import styles from './Achievments.module.scss';
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
   <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
         {list.map((el, index) => {
            return (
               <li key={index} className={styles.navigation__item}>
                  <h4 className={styles.navigation__main}>{el.number}</h4>
                  <p className={styles.navigation__subtitle}>{el.subtitle}</p>
               </li>
            )
         })}
      </ul>
   </nav>
   )
}
export default Navigation;