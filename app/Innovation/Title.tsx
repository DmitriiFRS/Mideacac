"use client"

import styles from './Innovation.module.scss';

type titlePropsType = {
   isAction?: boolean
   translate: string
   title: string
}

function Title({isAction, translate, title}: titlePropsType) {
return (
   <div style={{transform: isAction ? 'translateX(0%)' : translate, opacity: isAction ? '1' : '0'}} className={styles.titleBody}>
      <p
      className={styles.titleBody__title}>{title}
      </p>
   </div>
)
}
export default Title;