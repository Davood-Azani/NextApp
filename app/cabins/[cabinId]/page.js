import Cabin from '@/app/_components/Cabin';
import Reservation from '@/app/_components/Reservation';
import Spinner from '@/app/_components/Spinner';
import { getCabin, getCabins } from '@/app/_lib/data-service';
import { Suspense } from 'react';

// export const metadata = {
//   title: 'Cabin',
// };
//? Dynamic MetaData
//# params : convention name to get params from route
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}
//# Make Dynamic To Static
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));

  return ids;
}

export default async function Page({ params }) {
  //!blocking waterfall
  //# get Cabin to display info
  const cabin = await getCabin(params.cabinId);
  //# get cabin Setting
  //const settings = await getSettings();
  //#get Book Dates
  // const bookDates = await getBookedDatesByCabinId(params.cabinId);

  //* Solution1 for waterfall
  // const [cabin, settings, bookDates] = await Promise.all([
  //   getCabin(params.cabinId),
  //   getSettings(),
  //   getBookedDatesByCabinId(params.cabinId),
  // ]);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="mb-10 text-accent-400 text-5xl font-semibold text-center">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        {/* <div className=" grid grid-cols-2 border border-primary-800 min-h-[400px]">
          <DateSelector />
          <ReservationForm />
        </div> */}
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
