import styles from './Machines.module.scss';
import magboost from '../../public/img/Innovation/magboost.png';
import v8 from '../../public/img/Innovation/v8.png';
import NewestMachines from './NewestMachines';

const newestData = [{
   deviceName: 'Magboost',
   image: magboost,
   imageWidth: 614,
   imageHeight: 302
},
{
   deviceName: 'V8',
   image: v8,
   imageWidth: 300,
   imageHeight: 314
}]

function Machines() {
return (
   <section className={styles.machines}>
      {newestData.map((el, idx) => {
         return <NewestMachines key={idx} deviceName={el.deviceName} image={el.image} imageWidth={el.imageWidth} imageHeight={el.imageHeight} />
      })}
   </section>
)
}
export default Machines;