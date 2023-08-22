import styles from './page.module.scss'
import Intro from './Intro/Intro'
import Achievments from './Achievments/Achievments'
import SideMenu from './Aside/SideMenu'
import Vrf from './VRFv8/Vrf'
import vrf from '../public/img/vrf-v8-main.jpeg';
import changeName from '../public/img/testimg.jpg'

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
      <Vrf imageFullScreen={vrf} title={params[0].title} href={params[0].href}/>
      <Vrf imageFullScreen={changeName} title={params[1].title} href={params[1].href} />
    </main>
  )
}
