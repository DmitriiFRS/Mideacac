import styles from "./V8.module.scss";
import MagboostMain from "./Main/V8Main";
import MagboostVideo from "./V8Video";

const magboost = {
   video: "/video/Magboost-Main-Video.mp4",
   modelStartText: "/img/Innovation/v8Text2.png",
};

function VRFv8Page() {
   return (
      <section className={styles.magboost}>
         <MagboostVideo video={magboost.video} modelStartText={magboost.modelStartText} />
         <MagboostMain />
      </section>
   );
}
export default VRFv8Page;
