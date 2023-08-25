import LeftLine from "./LeftLine";
import RightLine from "./RightLine";
import styles from './Innovation.module.scss';

function Lines() {
return (
   <div className={styles.lines}>
      <LeftLine />
      <RightLine />
   </div>
)
}
export default Lines;