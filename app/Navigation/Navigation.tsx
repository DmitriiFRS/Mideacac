import Link from 'next/link';
import styles from './Navigation.module.scss';
const list = ['Pattern 1', 'Pattern 2', 'Pattern 3', 'Pattern 4', 'Pattern 5', 'Pattern 6']

function Navigation() {
   return (
   <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
         {list.map((el, index) => {
            return (
               <li key={index} className={styles.navigation__item}>
                  <Link style={{color: 'inherit', width: 'inherit', height: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center'}} href={'#'}>{el}</Link>
               </li>
            )
         })}
      </ul>
   </nav>
   )
}
export default Navigation;