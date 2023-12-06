import styles from "./V8.module.scss";
import V8Main from "./Main/V8Main";
import V8Video from "./V8Video";
import MoveToTopBody from "./MoveToTopBody";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const magboost = {
   video: "/video/V8-Main-Video.mp4",
   modelStartText: "/img/Innovation/v8Text2.png",
};

function VRFv8Page() {
   return (
      <section className={styles.magboost}>
         <Header />
         <MoveToTopBody />
         <V8Video video={magboost.video} modelStartText={magboost.modelStartText} />
         <V8Main />
         <Footer />
      </section>
   );
}
export default VRFv8Page;
