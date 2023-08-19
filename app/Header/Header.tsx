import styles from './Header.module.scss';
import Image from 'next/image';
import MideaLogo from '../../public/icons/MideaCAC.png'

function Header() {
   return (
   <header className={styles.header}>
      <Image src={MideaLogo} alt='Midea-CAC logo' width={256} height={90} priority={true} />
   </header>
   )
}
export default Header;