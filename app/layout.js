import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from './components';

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
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
