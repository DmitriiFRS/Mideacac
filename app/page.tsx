import styles from './page.module.scss'
import Intro from './Intro/Intro'
import Achievments from './Achievments/Achievments'
import SideMenu from './Aside/SideMenu'
import Innovation from './Innovation/Innovation'
import Machines from './Machines/Machines'
import TriggerSection1 from './Innovation/inViewTriggerSections/TriggerSection1'
import TriggerSection2 from './Innovation/inViewTriggerSections/TriggerSection2'
import TriggerSection3 from './Innovation/inViewTriggerSections/TriggerSection3'
import TriggerSection4 from './Innovation/inViewTriggerSections/TriggerSection4'
import TriggerSection5 from './Innovation/inViewTriggerSections/TriggerSection5'

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
      <TriggerSection1 />
      <TriggerSection2 />
      <TriggerSection3 />
      <TriggerSection4 />
      <TriggerSection5 />
      <Machines />
    </main>
  )
}
