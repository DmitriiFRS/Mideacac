import styles from "./Header.module.scss";
import Image from "next/image";
import MideaLogo from "../../public/icons/Midea-logo.svg";
import Link from "next/link";

function Header() {
   return (
      <header className={styles.header}>
         <Link href={"/"}>
            <div className={styles.header__logo}>
               <Image src={MideaLogo} alt="Midea CAC" fill />
            </div>
         </Link>
      </header>
   );
}
export default Header;
