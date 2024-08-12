import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Nav, Footer } from './components';

const inter = Inter({ subsets: ["latin"] });

// const poppins = Poppins({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata = {
  title: "Coleen Agsao",
  description: "Coleen Agsao is a software engineer dedicated to creating above-average digital experiences. While her primary passion lies in backend development, she also take pride in bringing designs to life through frontend work.",
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
