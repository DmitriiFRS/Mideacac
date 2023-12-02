import styles from "../Magboost.module.scss";
import ContentBlock from "./ContentBlock";
import NumTitles from "../../ReusableComponents/NumTitles";
import Efficiancy from "./Efficiancy";
import MagboostTitle from "./MagboostTitle";
import MagboostTitleContainer from "./MagboostTitleContainer";

export type ContentInner = {
   title: string;
   video: string;
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
      video: "/video/magboost-1.mp4",
      titles: {
         title1: "Меньше трения",
         title2: "Меньше износа",
         title3: "Высокая точность",
         title4: "Большая стабильность",
      },
   },
   {
      title: "Компрессор Back-to-back",
      video: "/video/magboost-1.mp4",
      titles: {
         title1: "Меньше трения",
         title2: "Отсутствие масла",
         title3: "Уменьшение уровня шума",
         title4: "Минимальная вибрация",
      },
   },
   {
      title: "Новейший теплообменник",
      video: "/video/magboost-3.mp4",
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
               <MagboostTitleContainer />
               <NumTitles cols={cols} />
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
