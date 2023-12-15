import styles from "./page.module.scss";
import Intro from "./Mainpage/Intro/Intro";
import Achievments from "./Mainpage/Achievments/Achievments";
import SideMenu from "./Aside/SideMenu";
import Innovation from "./Mainpage/Innovation/Innovation";
import Machines from "./Mainpage/Machines/Machines";
import Awards from "./Mainpage/Awards/Awards";
import ReferenceProject from "./Mainpage/ReferenceProject/ReferenceProject";
import MoveToTopBody from "./Mainpage/MoveToTopBody";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Preloader from "./Mainpage/Preloader";

export default function Home() {
   return (
      <main className={styles.main}>
         <Preloader />
         <Header />
         <SideMenu />
         <MoveToTopBody />
         <Intro />
         <Innovation />
         <Machines />
         <Awards />
         <ReferenceProject />
         <Footer />
      </main>
   );
}
