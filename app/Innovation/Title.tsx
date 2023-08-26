"use client"

import styles from './Innovation.module.scss';

type titlePropsType = {
   isAction?: boolean
}

function Title({isAction}: titlePropsType) {
return (
   <div className={styles.titleBody}>
      <p style={{transform: isAction ? 'translateX(0%)' : 'translateX(100%)', opacity: isAction ? '1' : '0'}} className={styles.titleBody__title}>Midea инвестирует в научно-исследовательскую работу и разработки в области холодильного оборудования.</p>
   </div>
)
}
export default Title;