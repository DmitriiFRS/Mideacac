import styles from './Header.module.scss';
import Image from 'next/image';
import MideaLogo from '../../public/icons/MainLogo.png'
import Link from 'next/link';

function Header() {
   return (
   <header className={styles.header}>
      <Link href={'/'}>
         <h1 className={styles.header__title}>Midea|cac</h1>
      </Link>
   </header>
   )
}
export default Header;