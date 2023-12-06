import SideMenuTrigger from "../ReusableComponents/SideMenuTrigger";
import styles from "./Contacts.module.scss";
import Ymap from "./Ymap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Contacts() {
   return (
      <section className={styles.contacts}>
         <Header />
         <SideMenuTrigger />
         <div className={`container ${styles.contacts__container}`}>
            <h2 className={styles.contacts__title}>Контакты</h2>
            <div className={styles.contacts__content}>
               <div className={styles.contacts__titles}>
                  <div className={styles.contacts__contentItem}>
                     <h4 className={styles.contacts__contentItem__title}>Адрес</h4>
                     <p className={styles.contacts__contentItem__sub}>г. Ташкент, Чиланзар 1, ул. Лабихавуз, 57</p>
                  </div>
                  <div className={styles.contacts__contentItem}>
                     <h4 className={styles.contacts__contentItem__title}>Контакты</h4>
                     <p className={styles.contacts__contentItem__sub}>+998 71 200 05 45</p>
                     <p className={styles.contacts__contentItem__sub}>+998 99 443 06 66</p>
                  </div>
                  <div className={styles.contacts__contentItem}>
                     <h4 className={styles.contacts__contentItem__title}>Сервис</h4>
                     <p className={styles.contacts__contentItem__sub}>+998 71 200 34 56</p>
                  </div>
               </div>
               <Ymap />
            </div>
         </div>
         <Footer />
      </section>
   );
}
export default Contacts;
