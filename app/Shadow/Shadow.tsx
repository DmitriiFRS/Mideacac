import styles from './Shadow.module.scss';

function Shadow({shadowbg}: {shadowbg: string}) {
   return <div style={{boxShadow: shadowbg}} className={styles.shadow}></div>
}
export default Shadow;