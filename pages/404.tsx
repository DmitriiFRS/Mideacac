import styles from "./Utils.module.scss";
import Image from "next/image";
import error from "../../public/img/OtherPages/404.jpg";

function ErrorPage() {
   return (
      <section className={styles.page404}>
         <div className={styles.page404__imgBody}>
            <Image src={error} alt="404" fill />
         </div>
      </section>
   );
}
export default ErrorPage;
