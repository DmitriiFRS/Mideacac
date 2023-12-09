import styles from "./Logistic.module.scss";
import Image from "next/image";
import bg from "../../public/img/OtherPages/logisticbg.jpg";
import NumTitles from "../ReusableComponents/NumTitles";
import BottomTitles from "./BottomTitles";
import bgBottom from "../../public/img/OtherPages/logistic-bg-bottom.jpg";
import SideMenuTrigger from "../ReusableComponents/SideMenuTrigger";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const cols = [
   {
      title: "FOB-Схема самовывоза",
      sub: "Самовывоз с завода по схеме FOB. Вы забираете груз на нашем заводе.",
      num: 1,
   },
   {
      title: "CPT-Доставка",
      sub: "Доставка до таможни страны получателя по схеме CPT. Мы оказываем содействие в таможенной очистке.",
      num: 2,
   },
   {
      title: "Самовывоз Узбекистан",
      sub: "Самовывоз со склада в Узбекистане. Мы храним продукцию на наших складах в Узбекистане.",
      num: 3,
   },
   {
      title: "DDP Доставка",
      sub: "Доставка продукции до объекта клиента по схеме DDP.",
      num: 4,
   },
];

function Logistic() {
   return (
      <div className={styles.logistic}>
         <Header />
         <SideMenuTrigger />
         <div className="container">
            <div className={styles.logistic__titleBody}>
               <h2 className={styles.logistic__titleMain}>Логистика</h2>
               <p className={styles.logistic__sub}>Гарантируем быстрое и безопасное перемещение</p>
            </div>
            <div className={styles.logistic__bg}>
               <Image src={bg} alt="bg" fill />
            </div>
            <div className={styles.logistic__titlesColsBody}>
               <h3 className={styles.logistic__title}>Мы предлагаем гибкие опции доставки продукции Midea:</h3>
               <NumTitles cols={cols} />
            </div>
            <BottomTitles />
            <div className={styles.logistic__bottombg}>
               <Image src={bgBottom} alt="bg" fill />
            </div>
            <div className={styles.logistic__sub2}>
               <p>
                  Суть договора заключается в том, что мы можем предоставить клиентам товары со своих складов до момента
                  их поставки с завода. Когда клиенту нужно оборудование, мы выдаем его со склада. После получения
                  заказанного товара с завода клиент возвращает нам аналогичный товар с нашего склада. Это позволяет
                  клиентам получать доступ к необходимому оборудованию без ожидания поставки, упрощает управление
                  запасами.
               </p>
            </div>
         </div>
         <Footer />
      </div>
   );
}
export default Logistic;
