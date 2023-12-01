import styles from "./V8.module.scss";
import V8Main from "./Main/V8Main";
import V8Video from "./V8Video";

const magboost = {
   video: "/video/Magboost-Main-Video.mp4",
   modelStartText: "/img/Innovation/v8Text2.png",
};

function VRFv8Page() {
   return (
      <section className={styles.magboost}>
         <V8Video video={magboost.video} modelStartText={magboost.modelStartText} />
         <V8Main />
      </section>
   );
}
export default VRFv8Page;
