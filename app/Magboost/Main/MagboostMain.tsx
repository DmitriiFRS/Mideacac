import styles from "../Magboost.module.scss";
import ContentReusable from "./ContentReusable";
import Titles from "../../ReusableComponents/NumTitles";
import image1 from "../../../public/img/v8magboost/magboost-1.png";
import image2 from "../../../public/img/v8magboost/magboost-2.png";
import image3 from "../../../public/img/v8magboost/magboost-3.png";
import icon1 from "../../../public/icons/MagboostV8/icon1.svg";
import icon2 from "../../../public/icons/MagboostV8/icon2.svg";
import icon3 from "../../../public/icons/MagboostV8/icon3.svg";
import icon4 from "../../../public/icons/MagboostV8/icon4.svg";
import icon5 from "../../../public/icons/MagboostV8/icon5.svg";
import icon6 from "../../../public/icons/MagboostV8/icon6.svg";
import icon7 from "../../../public/icons/MagboostV8/icon7.svg";
import icon8 from "../../../public/icons/MagboostV8/icon8.svg";
import icon9 from "../../../public/icons/MagboostV8/icon9.svg";
import icon10 from "../../../public/icons/MagboostV8/icon10.svg";
import { StaticImageData } from "next/image";
import Efficiancy from "./Efficiancy";

export type ContentInner = {
   title: string;
   image: StaticImageData;
   icons: {
      icon1: string;
      icon2: string;
      icon3: string;
      icon4: string;
   };
   titles: {
      title1: string;
      title2: string;
      title3: string;
      title4: string;
   };
};

type ContentType = Array<ContentInner>;
const content: ContentType = [
   {
      title: "Магнитный подшипник",
      image: image1,
      icons: {
         icon1: icon1,
         icon2: icon2,
         icon3: icon3,
         icon4: icon4,
      },
      titles: {
         title1: "Меньше трения",
         title2: "Меньше износа",
         title3: "Высокая точность",
         title4: "Большая стабильность",
      },
   },
   {
      title: "Компрессор Back-to-back",
      image: image2,
      icons: {
         icon1: icon1,
         icon2: icon5,
         icon3: icon6,
         icon4: icon2,
      },
      titles: {
         title1: "Меньше трения",
         title2: "Отсутствие масла",
         title3: "Уменьшение уровня шума",
         title4: "Минимальная вибрация",
      },
   },
   {
      title: "Новейший теплообменник",
      image: image3,
      icons: {
         icon1: icon7,
         icon2: icon8,
         icon3: icon9,
         icon4: icon10,
      },
      titles: {
         title1: "Снижение потребления фреона на 40%",
         title2: "Увеличенная поверхность контакта на 30%",
         title3: "Снижение габаритов теплообменника и чиллера",
         title4: "Наиболее эффективный теплообменник",
      },
   },
];
const cols = [
   {
      title: "Долговечность",
      sub: "Инновационные технологии и отсутствие трения увеличивают срок службы оборудования и сокращают затраты на обслуживание и ремонт.",
      num: 1,
   },
   {
      title: "Эффективность",
      sub: "Высокая энергоэффективность снижает потребление энергии, позволяя экономить средства.",
      num: 2,
   },
   {
      title: "Компактность",
      sub: "Усовершенствованная конструкция чиллеров и теплообменника обеспечивает их удобное и компактное размещение.",
      num: 3,
   },
   {
      title: "Минимальный шум",
      sub: "Благодаря электромагнитной технологии снижается уровень шума. Работу оборудования становится комфортной и приемлемой для окружающей среды.",
      num: 4,
   },
];
function MagboostMain() {
   return (
      <section className={styles.magboostMain}>
         <div className={styles.container}>
            <Titles cols={cols} />
            {content.map((el, index) => {
               return <ContentReusable key={index} content={el} idx={index} />;
            })}
            <Efficiancy />
         </div>
      </section>
   );
}
export default MagboostMain;
