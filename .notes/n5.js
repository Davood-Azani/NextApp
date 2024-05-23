//----->SETTING UP NEXT AUTH
//? Now NextAuth, or now Auth.js, is just a library that simplifies authentication in a Next.js application.And so it is not its own auth service,like Supabase authentication.instead we can use clerk
//? make auth.js in _lib folder
//? config env file with url and secret with teh exact name as they are
//? for having random secret we can use this
//? https://generate-secret.vercel.app/32
//# we use google provider so we need to config google
//?https://console.cloud.google.com/project
//# Create new Project > Api Services > Credential > below that OAuth Consent Screen > select External > Fill the form(no need to add domain ) > Save Again > Add user > Enter your email > Save

//* Credential > Create New Credentials > oAuth Client Id > Select Web ,Authorized JavaScript origins : http://localhost:3000 , Authorized redirect URIs : http://localhost:3000/api/auth/callback/google > Save >
//# Copy Client ID and Secret
//# instal auth : npm i next-auth@beta

//# import Google and nextAuth
//* Create Config  and use client Secret and ID
//? pass the config to the nextAuth and export auth and handlers(GET and Post)
//? make a folder in api called > auth > [...nextauth] > route.js  ==> /api/auth/
//? inside that export GET and POST from auth.js
//? to test and access use :  http://localhost:3000/api/auth/signin
//----->GETTING THE USER SESSION
//? in auth (await auth()) there are some info about the logged {user : {name:"" email:"" image:""} and expires :{expires: '2024-06-22T21:52:04.564Z'}}

// # using auth  make route dynamic because auth uses cookies and headers

//! so  we're calling this auth function in the navigation,which is part of the layout,so it is part of every single route,this makes it so that, basically,our entire website becomes dynamic.So every single route here is now dynamic, basically,because of this image right here,
//? because we called the auth function.And so indirectly we are reading headers right here in this navigation now.(every single route)

//# add user image after login in navigation.js
//# only logged user can reservation form

//* use authentication on server component to achieve the second purpose we use auth in the Reservation.js
