import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import Header from './Header/Header';
import SideMenu from './Aside/SideMenu';
import ReduxProvider from './Redux/Provider';

const inter = Montserrat({ subsets: ['latin', 'cyrillic'] });

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
          </ReduxProvider>
        </div>
      </body>
    </html>
  )
}
