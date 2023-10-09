import { ReactNode } from 'react';
import styles from '../Magboost.module.scss';

function MagboostContainer({children}: {children: ReactNode}) {
return (
   <div className={styles.container}>
      {children}
   </div>
)
}
export default MagboostContainer;