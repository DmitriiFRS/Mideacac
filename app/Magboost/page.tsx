import styles from "./Magboost.module.scss";
import v8a1 from "../../public/img/v8magboost/v8 1.png";
import supersence from "../../public/icons/MagboostV8/supersence.svg";
import shieldBox from "../../public/icons/MagboostV8/supersence.svg";
import hyperlink from "../../public/icons/MagboostV8/supersence.svg";
import temp from "../../public/img/v8magboost/temp.png";
import MagboostMain from "./Main/MagboostMain";
import MagboostVideo from "./MagboostVideo";
import MoveToTopBody from "./MoveToTopBody";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const magboost = {
   video: "/video/Magboost-Main-Video.mp4",
   modelStartText: "/img/Innovation/MagboostStart.png",
   previewTitle: [
      "Midea MagBoost - это прорыв в системах охлаждения, который навсегда изменит ваши",
      "представления о надежности и эффективности.",
      "Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы",
      "оборудования и сокращают затраты на обслуживание и ремонт.",
      "Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя",
      "экономить средства.",
      "Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает",
      "их удобное и компактное размещение.",
      "Минимальный шум: благодаря электромагнитной технологии снижается уровень шума.",
   ],
   previewTitleTablet: [
      "Midea MagBoost - это прорыв в системах охлаждения, который",
      "навсегда изменит ваши",
      "представления о надежности и эффективности.",
      "Долговечность: Инновационные технологии и отсутствие трения увеличивают срок службы",
      "оборудования и сокращают затраты на обслуживание и ремонт.",
      "Эффективность: Высокая энергоэффективность снижает потребление энергии, позволяя",
      "экономить средства.",
      "Компактность: Усовершенствованная конструкция чиллеров и теплообменника обеспечивает",
      "их удобное и компактное размещение.",
      "Минимальный шум: благодаря электромагнитной технологии снижается уровень шума.",
   ],
   previewTitleMobile: [
      "Midea MagBoost - это прорыв в системах охлаждения,",
      "который навсегда изменит ваши представления о",
      "надежности и эффективности.",
      "Долговечность: Инновационные технологии и",
      "отсутствие трения увеличивают срок службы",
      "оборудования и сокращают затраты на",
      "обслуживание и ремонт.",
      "Эффективность: Высокая энергоэффективность",
      "снижает потребление энергии, позволяя",
      "экономить средства.",
      "Компактность: Усовершенствованная конструкция",
      "чиллеров и теплообменника обеспечивает",
      "их удобное и компактное размещение.",
      "Минимальный шум: благодаря электромагнитной",
      "технологии снижается уровень шума.",
   ],
};

function VRFv8Page() {
   return (
      <section className={styles.magboost}>
         <Header />
         <MoveToTopBody />
         <MagboostVideo video={magboost.video} modelStartText={magboost.modelStartText} />
         <MagboostMain />
         <Footer />
      </section>
   );
}
export default VRFv8Page;
