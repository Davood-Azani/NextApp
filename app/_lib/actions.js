'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';
import { getBookings } from './data-service';
import { redirect } from 'next/navigation';

//# we can get the name of the providers by the url which is in the notes,an dwe can do loop of we have more than one

//* Server fn for SignIn to use in server Components
export async function signInAction() {
  //? after successful login go to the account
  await signIn('google', { redirectTo: '/account' });
}
//* Server fn for SignOut to use in server Components

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}
//? we don use try cache block in server actions(it's common)
export async function updateGuest(formData) {
  const session = await auth();
  //# check user is login ?
  if (!session) throw new Error('You Must be logged in!');
  //  console.log(formData);
  //----->
  //# get data
  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');
  //----->
  //# check validity for nationalID
  let regex = /^[a-zA-Z0-9]{6,12}$/;
  let isValid = regex.test(nationalID);
  if (!isValid) throw new Error('Please Provide a valid national Id');
  //----->
  const updateData = { nationalID, nationality, countryFlag };
  //----->
  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) {
    throw new Error('Guest could not be updated');
  }
  //----->
  revalidatePath('/account/profile');
}

export async function deleteBooking(bookingId) {
  //# test for optimistic
  //   await new Promise((res) => setTimeout(res, 5000));
  //   throw new Error('Fake Error');
  //# here we passed a single param simply!
  //----->
  const session = await auth();
  //# check user is login ?
  if (!session) throw new Error('You Must be logged in!');
  //----->
  //? check it user is owner of this bookings?
  //! Dangerous Code (if we don have this part of code!)
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to perform this action');
  //----->
  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId);

  if (error) {
    throw new Error('Booking could not be deleted');
  }
  //----->
  revalidatePath('/account/reservations');
}
// if we use a server action as the action prop of a FORM,then this is the way to go.So we use the useFormStatus as we did here.
export async function updateBooking(formData) {
  const bookingId = Number(formData.get('bookingId'));
  //----->Authentication
  const session = await auth();
  //# check user is login ?
  if (!session) throw new Error('You Must be logged in!');
  //----->Authorization
  //? check it user is owner of this bookings?
  //! Dangerous Code (if we don have this part of code!)
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId))
    throw new Error('You are not allowed to perform this action');
  //-----> Data
  const updateData = {
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').trim().slice(0, 1000),
  };

  //----->Send to Server
  const { error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .select()
    .single();

  if (error) {
    throw new Error('Booking could not be updated');
  }
  //----->Revalidation
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath(`/account/reservations`);

  //----->Redirect

  redirect('/account/reservations');
}
export async function createBooking(bookingData, formData) {
  //----->
  const session = await auth();
  //# check user is login ?
  if (!session) throw new Error('You Must be logged in!');
  //----->

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get('numGuests')),
    observations: formData.get('observations').trim().slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: 'unconfirmed',
  };
  //----->
  const { error } = await supabase.from('bookings').insert([newBooking]);

  if (error) {
    throw new Error('Booking could not be created');
  }
  // console.log(newBooking);
  //Object.entries(formData.entries())
  //----->
  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect('/cabins/thankyou');
}
