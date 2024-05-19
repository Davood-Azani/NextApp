import Navigation from './components/Navigation';
import Logo from './components/Logo';

export const metadata = {
  title: 'The Wild Oasis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
      </body>
      <main>{children}</main>
      <footer>I Am footer</footer>
    </html>
  );
}
