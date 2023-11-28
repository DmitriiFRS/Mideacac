import styles from "./Service.module.scss";
import Image from "next/image";
import bg from "../../public/img/OtherPages/servicebg.png";
import Reason from "./Reason";
import ServiceMap from "./ServiceMap";
import Cols from "./Cols";
import ContentCard from "./ContentCard";
import cardImg1 from "../../public/img/OtherPages/serviceCard1.png";
import cardImg2 from "../../public/img/OtherPages/serviceCard2.png";
import cardImg3 from "../../public/img/OtherPages/serviceCard3.png";
import cardImg4 from "../../public/img/OtherPages/serviceCard4.png";

const cols = [
   {
      title: "36 и более месяцев",
      sub: "Мы предоставляем гарантию на всю поставляемую продукцию",
   },
   {
      title: "от 3 до 5 лет",
      sub: "Гарантии на бытовые сплит-системы",
   },
   {
      title: "1-3 года",
      sub: "Гарантии на полупромышленные и промышленные системы кондиционирования",
   },
   {
      title: "24/7",
      sub: "Служба технической поддержки",
   },
   {
      title: "Оптимизация обслуживания клиентов",
      sub: "Имеется собственный склад запчастей",
   },
   {
      title: "10 лет",
      sub: "Гарантии на компрессор",
   },
];

const cardItem1 = {
   id: 1,
   img: cardImg1,
   title: "Услуги сервисного центра",
   list: [
      "Монтаж бытовых сплит-систем",
      "Монтаж систем теплохолодоснабжения (раздел ОВиК под ключ)",
      "Монтаж систем вентиляций и вент. оборудования",
      "Ремонт всех систем кондиционирования",
      "Техническое обслуживание",
   ],
};

const cardItem = [
   {
      id: 2,
      img: cardImg2,
      list: [
         "Заказчик",
         "Получает качественно выполненные работы",
         "Увеличивается срок эксплуатации оборудования",
         "Избегает непредвиденных расходов",
         "Получает 100% гарантию",
      ],
   },
   {
      id: 3,
      img: cardImg3,
      list: [
         "Исполнитель",
         "Уверенно производит работы",
         "Получает техническую поддержку",
         "Повышает собственную квалификацию",
      ],
   },
   {
      id: 4,
      img: cardImg4,
      list: [
         "Компания",
         "Уверенно предоставляет гарантию",
         "Избегает лишних разногласий и споров",
         "Несет 100% обязательства по гарантии",
      ],
   },
];

function Service() {
   return (
      <section className={styles.service}>
         <div className="container">
            <div className={styles.service__titleBody}>
               <h2 className={styles.service__title}>Сервис</h2>
               <p className={styles.service__sub}>Надежный сервис для вашего климатического комфорта</p>
            </div>
            <div className={styles.service__mainImgBody}>
               <Image src={bg} alt="service img" fill />
            </div>
            <Reason />
            <ServiceMap />
            <Cols cols={cols} />
            <div className={styles.card}>
               <ContentCard img={cardItem1.img} title={cardItem1.title} list={cardItem1.list} id={cardItem1.id} />
               <h3 className={styles.card__specialTitle}>Польза услуги шеф монтаж</h3>
               {cardItem.map((el, index) => {
                  return <ContentCard key={el.id} img={el.img} list={el.list} id={el.id} />;
               })}
            </div>
         </div>
      </section>
   );
}
export default Service;
