'use client';
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteReservation } from '../_lib/actions';

import { useTransition } from 'react';
import SpinnerMini from './SpinnerMini';

function DeleteReservation({ bookingId }) {
  //? it's possible to write here but we write in the serverActions
  // async function deleteReservation() {
  //   'use server'
  //   await deleteBooking(bookingId);

  // }
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm('⛔Are you Sure to DELETE this Reservation?'))
      startTransition(() => deleteReservation(bookingId));
  }

  return (
    <button
      // onClick={() => deleteReservation(bookingId)}
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {isPending ? (
        <div className="mx-auto">
          <SpinnerMini />
        </div>
      ) : (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
