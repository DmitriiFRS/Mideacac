import './globals.css'
import localFont from 'next/font/local'
import {Inter} from 'next/font/google'
import type { Metadata } from 'next'
import Header from './Header/Header';
import SideMenu from './Aside/SideMenu';
import ReduxProvider from './Redux/Provider';
import Footer from './Footer/Footer';

const avantGarde = localFont({
  src: '../public/fonts/avantgardebkbtrusbyme_demi.otf'
});
const inter = Inter({
  subsets: ['cyrillic'],
  weight: ['400','500','600','700'],
  variable: '--font-inter'
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
      <body className={`${avantGarde.className} ${inter.variable}`}>
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
