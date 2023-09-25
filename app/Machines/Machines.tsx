import styles from './Machines.module.scss';
import magboost from '../../public/img/Innovation/magboost.png';
import v8 from '../../public/img/Innovation/v8.png';
import NewestMachines from './NewestMachines';
import Image from 'next/image';
import shadowbg from '../../public/img/Innovation/shadow_bg.jpg';
import TriggerFixEvent from './TriggerFixEvent';

const newestData = [{
   deviceName: 'Magboost',
   image: magboost,
   imageWidth: 700,
   imageHeight: 352,
   href: '/Magboost'
},
{
   deviceName: 'V8',
   image: v8,
   imageWidth: 700,
   imageHeight: 504,
   href: 'V8'
}]

function Machines() {
return (
   <section className={styles.machines}>
      <div className={styles.machines__shadow}>
         <Image src={shadowbg} alt='' fill={true}></Image>
      </div>
      {newestData.map((el, idx) => {
         return <NewestMachines key={idx} deviceName={el.deviceName} image={el.image} imageWidth={el.imageWidth} imageHeight={el.imageHeight} href={el.href} />
      })}
      <TriggerFixEvent />
   </section>
)
}
export default Machines;