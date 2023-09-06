import styles from './Footer.module.scss';
import Image from 'next/image';
import logo from '../../public/icons/midea-footer.png';

function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.footer__container}>
            <div className={styles.footer__logo}>
               <div className={styles.footer__logo__logo}>
                  <Image src={logo} alt='Midea' fill={true} />
               </div>
               <h3 className={styles.footer__logo__title}>Авторские права Midea, 2023 г. Все права защищены. Политика конфиденциальности</h3>
            </div>
            <div className={styles.footer__contacts}></div>
         </div>
         
      </footer>
   )
}
export default Footer;