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
