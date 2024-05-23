import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  //# when we set matcher, if fact we say if url is that this fn will be called and if this returns true user can go forward.
  //? !! the modern way of converting to bool
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  //# change default pages of authentication
  pages: {
    signIn: '/login',
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
