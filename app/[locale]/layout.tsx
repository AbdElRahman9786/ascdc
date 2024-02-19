import type { Metadata } from "next";

import "../../app/globals.css";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import useTextDirection from '../../Hooks/useTextDirection';



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props={
  children: React.ReactNode;
  params:{
    locale: "en"|"Ar"
  }
}

const RootLayout:React.FC<Props>=({
  children,
  params:{locale},
})=> {
  const messages=useMessages();
  const direction = useTextDirection(locale);
  return (
    <html lang={locale} dir={direction}>
      
      <body >
      <NextIntlClientProvider messages={messages}>
        <Navbar/>

        {children}
        <Footer/>
        </NextIntlClientProvider>
        </body>
        
    </html>
  );
}
export default RootLayout;