import styles from '../VRFv8Page.module.scss';
import ImageTitleRC from './ImageTitleRC';
import vrf1 from '../../../public/img/VRFV8/VRF-1.png'
import vrf2 from '../../../public/img/VRFV8/VRF-2.jpg'
import PreviewTitle from './PreviewTitle';

const imageTitleParams = [{
   image: vrf1,
   description: '',
},
{
   image: vrf2,
   description: '',
}
]
function VRFMain() {
   return (
      <section className={styles.VRFMain}>
         <PreviewTitle />
         {imageTitleParams.map((el, index) => {
            let orders = [];
            index % 2 === 0 ? orders.push('1','2') : orders.push('2','1')
            return (
               <ImageTitleRC key={index} image={el.image} description={el.description}
               orders={{order1: orders[0], order2: orders[1]}} />
            )
         })}
      </section>
   )
}
export default VRFMain;