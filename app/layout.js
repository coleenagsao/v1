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
  description: "Personal Portfolio V1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="bg-gray-950 px-6">
          <Nav />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
