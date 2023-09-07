import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, STIX_Two_Text } from 'next/font/google'
import Header from './Header/Header';
import SideMenu from './Aside/SideMenu';
import ReduxProvider from './Redux/Provider';
import Footer from './Footer/Footer';

const inter = Montserrat({ subsets: ['latin', 'cyrillic'] });

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
      <body className={inter.className}>
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
