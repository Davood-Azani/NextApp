import Spinner from '@/app/_components/Spinner';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading Booking Data</p>
    </div>
  );
}
