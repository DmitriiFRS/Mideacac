import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, STIX_Two_Text, M_PLUS_1, Didact_Gothic } from 'next/font/google'
import localFont from 'next/font/local'
import Header from './Header/Header';
import SideMenu from './Aside/SideMenu';
import ReduxProvider from './Redux/Provider';
import Footer from './Footer/Footer';

const avantGarde = localFont({
  src: '../public/fonts/avantgardebkbtrusbyme_demi.otf',
  variable: '--font-avant_garde'
});
const didactGothic = Didact_Gothic({
  subsets: ['latin', 'cyrillic'],
  style: 'normal',
  display: 'swap',
  weight: ['400'],
  variable: '--font-Didact_Gothic'
})
const mplusone = M_PLUS_1({
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-M_PLUS_1'
})

export const stixTwoText = STIX_Two_Text({
    subsets: ['latin', 'cyrillic'],
    style: 'normal',
    display: 'swap',
    weight: ['400', '500', '600', '700']
})
export const metadata: Metadata = {
  title: 'Midea CAC',
  description: 'Midea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${mplusone.variable} ${avantGarde.variable}`}>
        <div className="wrapper">
          <ReduxProvider>
            <Header />
            <SideMenu/>
            <main>{children}</main>
            <Footer />
          </ReduxProvider>
        </div>
      </body>
    </html>
  )
}
