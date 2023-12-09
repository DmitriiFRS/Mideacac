import styles from "./page.module.scss";
import Image from "next/image";
import error from "../public/img/OtherPages/404.jpg";
import Link from "next/link";
import errorMobile from "../public/img/OtherPages/404-mobile.jpg";

function ErrorPage() {
   return (
      <section className={styles.page404}>
         <div className={styles.page404__imgBody}>
            <Image className={styles.page404__img} src={error} alt="404" fill objectFit="cover" />
            <Image className={styles.page404__imgM} src={errorMobile} alt="404" fill objectFit="cover" />
         </div>
         <div className={styles.page404__desc}>
            <p className={styles.page404__main}>Упс</p>
            <p className={styles.page404__sub}> Страница не найдена</p>
            <Link className={styles.page404__btn} href={"/"}>
               На главную
            </Link>
         </div>
      </section>
   );
}
export default ErrorPage;
