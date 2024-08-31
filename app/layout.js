import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from './components';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coleen Agsao",
  description: "Coleen Agsao is a software engineer dedicated to creating above-average digital experiences.",
  metadataBase: new URL('https://coleenagsao.com/'), 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="bg-slate-950">
          <Nav />
          <Script
            src="/snow.js"
            defer
          />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
