import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./Header/Header";
import SideMenu from "./Aside/SideMenu";
import ReduxProvider from "./Redux/Provider";
import Footer from "./Footer/Footer";
import Head from "next/head";

const gotham = localFont({
   variable: "--gotham",
   src: [
      {
         path: "../public/fonts/gotham/Gotham-Book.woff",
         weight: "300",
         style: "light",
      },
      {
         path: "../public/fonts/gotham/Gotham-Medium.woff",
         weight: "500",
         style: "medium",
      },
      {
         path: "../public/fonts/gotham/Gotham-Bold.woff",
         weight: "700",
         style: "bold",
      },
      {
         path: "../public/fonts/gotham/Gotham-Regular.otf",
         weight: "400",
         style: "normal",
      },
   ],
});

export const metadata: Metadata = {
   title: "Midea CAC",
   description: "Midea",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html>
         <Head>
            <meta name="mailru-domain" content="gnXl5i1NnzQsZPYr"></meta>
         </Head>
         <body className={`${gotham.variable}`}>
            <div className="wrapper">
               <ReduxProvider>
                  <SideMenu />
                  <main>{children}</main>
               </ReduxProvider>
            </div>
         </body>
      </html>
   );
}
