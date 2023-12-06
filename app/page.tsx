import styles from "./page.module.scss";
import Intro from "./Mainpage/Intro/Intro";
import Achievments from "./Mainpage/Achievments/Achievments";
import SideMenu from "./Aside/SideMenu";
import Innovation from "./Mainpage/Innovation/Innovation";
import Machines from "./Mainpage/Machines/Machines";
import Awards from "./Mainpage/Awards/Awards";
import ReferenceProject from "./Mainpage/ReferenceProject/ReferenceProject";
import TriggerFixEvent from "./Mainpage/Machines/TriggerFixEvent";
import MoveToTop from "./ReusableComponents/MoveToTop";
import MoveToTopBody from "./Mainpage/MoveToTopBody";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const params = [
   {
      title: "V8 Series VRF",
      href: "/VRF",
   },
   {
      title: "V8",
      href: "/V8",
   },
];

export default function Home() {
   return (
      <main className={styles.main}>
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
