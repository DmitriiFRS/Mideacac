import styles from './page.module.scss'
import Intro from './Intro/Intro'
import Achievments from './Achievments/Achievments'
import SideMenu from './Aside/SideMenu'
import Innovation from './Innovation/Innovation'
import Machines from './Machines/Machines'
import Awards from './Awards/Awards'
import ReferenceProject from './ReferenceProject/ReferenceProject'
import TriggerFixEvent from './Innovation/TriggerFixEvent'

const params = [{
  title: 'V8 Series VRF',
  href: '/VRF'
},
{
  title: 'V8',
  href: '/V8'
}
]

export default function Home() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <Intro />
      <Innovation />
      <TriggerFixEvent />
      <Machines />
      <Awards />
      <ReferenceProject />
    </main>
  )
}
