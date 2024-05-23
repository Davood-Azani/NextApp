import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Guest Area',
};
async function page() {
  //? as user cant see this page without authentication, so no need to use optional chaining ?
  const session = await auth();
  const firstName = session.user.name.split(' ').at(0);

  return (
    <div>
      <h1>Hi {firstName}</h1>
    </div>
  );
}

export default page;
