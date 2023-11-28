import styles from "../V8.module.scss";
import ContentBlock from "./ContentBlock";
import image1 from "../../../public/img/v8magboost/v8 1.png";
import image2 from "../../../public/img/v8magboost/v8 1.png";
import image3 from "../../../public/img/v8magboost/v8 1.png";
import { StaticImageData } from "next/image";
import MagboostTitle from "./V8Title";
import superSence from "../../../public/icons/MagboostV8/supersence.svg";
import shieldBox from "../../../public/icons/MagboostV8/shieldbox.svg";
import hyperlink from "../../../public/icons/MagboostV8/hyperlink.svg";
import Cols from "./Cols";
import Temperature from "./Temperature";

export type ContentInner = {
   icon: string;
   image: StaticImageData;
   titles: Array<string>;
};

type ContentType = Array<ContentInner>;
const content: ContentType = [
   {
      icon: superSence,
      image: image1,
      titles: [
         "Произвольная топология сети для подключения внутренних блоков (традиционная, звезда, петля, древовидная).",
         "Устойчивость к электромагнитным помехам от радиосвязи, высокого напряжения, другого оборудования.",
         "Возможность отключения одного внутреннего блока (режим технического обслуживания).",
         "Электропитания внутренних блоков от отдельных источников энергии.",
      ],
   },
   {
      icon: shieldBox,
      image: image2,
      titles: [
         "Степень защиты IP55 от влаги, соли, пыли и насекомых.",
         "Система микроканального охлаждения электронных компонентов хладагентом.",
         "Встроенный циркуляционный вентилятор, PTC нагреватель и пять высокоточных температурных датчиков для поддержания постоянной температуры внутри шкафа управления и электроснабжения.",
      ],
   },
   {
      icon: hyperlink,
      image: image3,
      titles: [
         "19 датчиков в холодильном контуре для анализа состояния в режиме реального времени.",
         "В случае отказа физического датчика система создает виртуальный датчик (система Digital twin).",
         "Контроль количества хладагента",
      ],
   },
];

const cols = [
   {
      title: "1100 м",
      sub: "Общая длина труб",
   },
   {
      title: "100 (110) м",
      sub: "Максимальный перепад по высоте между внутренними и наржуными блоками",
   },
   {
      title: "200 м",
      sub: "Актуальная длина труб между внутренними и наржуными блоками",
   },
   {
      title: "90 м",
      sub: "Максимальное расстояние между первым разветвителем и последним внутренним блоком",
   },
   {
      title: "260 м",
      sub: "Эквивалентная длина труб между внутренними и наржуными блоками",
   },
   {
      title: "40 м",
      sub: "Максимальный перепад по высоте между внутренними блоками",
   },
];
function MagboostMain() {
   return (
      <section className={styles.magboostMain}>
         <div className={styles.container}>
            <div className={styles.titles}>
               <MagboostTitle />
            </div>

            {content.map((el, index) => {
               return <ContentBlock key={index} content={el} idx={index} />;
            })}
            <Cols cols={cols} />
            <Temperature />
         </div>
      </section>
   );
}
export default MagboostMain;
