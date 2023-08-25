import styles from './page.module.scss'
import Intro from './Intro/Intro'
import Achievments from './Achievments/Achievments'
import SideMenu from './Aside/SideMenu'
import Innovation from './Innovation/Innovation'
import Machines from './Machines/Machines'
import FakeSection from './Innovation/FakeSection'
import FakeSection2 from './Innovation/FakeSection2'

const params = [{
  title: 'V8 Series VRF',
  href: '/VRF'
},
{
  title: 'VRF Fancoil',
  href: '/Fancoil'
}
]

export default function Home() {
  return (
    <main className={styles.main}>
      <SideMenu />
      <Intro />
      <Achievments />
      <Innovation />
      <FakeSection />
      <FakeSection2 />
      <Machines />
    </main>
  )
}
