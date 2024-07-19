import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from './components';

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Coleen Agsao",
  description: "Personal Portfolio V1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
