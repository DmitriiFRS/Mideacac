import styles from "../Magboost.module.scss";
import ContentBlock from "./ContentBlock";
import Titles from "../../ReusableComponents/NumTitles";
import image1 from "../../../public/img/v8magboost/magboost-1.png";
import image2 from "../../../public/img/v8magboost/magboost-2.png";
import image3 from "../../../public/img/v8magboost/magboost-3.png";
import { StaticImageData } from "next/image";
import Efficiancy from "./Efficiancy";
import MagboostTitle from "./MagboostTitle";

export type ContentInner = {
   title: string;
   image: StaticImageData;
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
            <div className={styles.titles}>
               <MagboostTitle />
               <Titles cols={cols} />
            </div>

            {content.map((el, index) => {
               return <ContentBlock key={index} content={el} idx={index} />;
            })}
            <Efficiancy />
         </div>
      </section>
   );
}
export default MagboostMain;
