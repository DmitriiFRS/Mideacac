import styles from "./Logistic.module.scss";
import Image from "next/image";
import bg from "../../public/img/OtherPages/logistic-bg.jpg";
import NumTitles from "../ReusableComponents/NumTitles";
import BottomTitles from "./BottomTitles";
import bgBottom from "../../public/img/OtherPages/logistic-bg-bottom.jpg";
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
         <div className={styles.logistic__bg}>
            <Image src={bg} alt="bg" fill />
         </div>
         <div className="container">
            <h2 className={styles.logistic__title}>Мы предлагаем гибкие опции доставки продукции Midea:</h2>
            <NumTitles cols={cols} />
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
            <p></p>
         </div>
      </div>
   );
}
export default Logistic;