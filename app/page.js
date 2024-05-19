import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>Home Next!</h1>

      <Link href="/cabins">Cabins</Link>
    </div>
  );
}
