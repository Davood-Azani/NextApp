'use server';

import { revalidatePath } from 'next/cache';
import { auth, signIn, signOut } from './auth';
import { supabase } from './supabase';

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
  //# get data
  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  //# check validity for nationalID
  let regex = /^[a-zA-Z0-9]{6,12}$/;
  let isValid = regex.test(nationalID);
  if (!isValid) throw new Error('Please Provide a valid national Id');

  const updateData = { nationalID, nationality, countryFlag };

  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) {
    throw new Error('Guest could not be updated');
  }

  revalidatePath('/account/profile');
}
