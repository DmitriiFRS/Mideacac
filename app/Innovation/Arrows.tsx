import Arrow1 from './Arrow1';
import Arrow2 from './Arrow2';
import styles from './Innovation.module.scss';

function Arrows() {
return (
   <div className={styles.arrowsBody}>
      <Arrow1 />
      <Arrow2 />
   </div>
)
}
export default Arrows;