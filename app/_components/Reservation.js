import { getBookedDatesByCabinId, getSettings } from '../_lib/data-service';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';

async function Reservation({ cabin }) {
  //# we fetch data in here as it's server components and they are client component
  const [settings, bookDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className=" grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector settings={settings} bookDates={bookDates} cabin={cabin} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
