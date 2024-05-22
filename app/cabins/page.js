import { Suspense } from 'react';
import Spinner from '@/app/_components/Spinner';
import CabinList from '@/app/_components/CabinList';
import Filter from '../_components/Filter';

//# make using all time fresh Data
// export const revalidate = 0;
//# each 15 Seconds
// export const revalidate = 15; // 15 seconds for test
// export const revalidate = 3600; // 15 seconds for test

export const metadata = {
  title: 'Cabins',
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? 'all';

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        {' '}
        <Filter />
      </div>
      {/* suspense will not re-render the fallback.And the way we fix that is to pass in a unique key.And so then whenever the key is different and the child component here suspense,then the fallback will be shown again,*/}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
