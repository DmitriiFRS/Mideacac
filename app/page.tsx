import Image from 'next/image'
import styles from './page.module.scss'
import Intro from './Intro/Intro'
import Navigation from './Navigation/Navigation'
import SideMenu from './Aside/SideMenu'

export default function Home() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <Intro />
      <Navigation />
    </main>
  )
}
