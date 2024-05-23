'use server';

import { signIn, signOut } from './auth';

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
