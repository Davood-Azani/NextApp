import Navigation from './_components/Navigation';
import Logo from './_components/Logo';
import '@/app/_styles/globals.css';

//? import font
import { Josefin_Sans } from 'next/font/google';
//? configure font
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  //title: 'The Wild Oasis',
  title: {
    template: '%s / The Wild Oasis', //?the page title will be placed on the %s
    default: 'Welcome / The Wild Oasis', //?if the title of a page are not defined
  },
  //? this will be on all page by default if we dont set anything on any pages
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites,surrounded by beautiful mountains and dark forest',
};

//? using fonts
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>I Am footer</footer>
      </body>
    </html>
  );
}
