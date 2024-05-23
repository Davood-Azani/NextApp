import '@/app/_styles/globals.css';

//? import font
import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';
import { ReservationProvider } from './_components/ReservationContext';
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
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="w-full mx-auto max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
