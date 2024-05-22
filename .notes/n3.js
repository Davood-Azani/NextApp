//----->Supabase
//? instal the supaBase Lib
//#: npm i @supabase/supabase-js
//# get the Keys from supabase configuration > api but this key is for authenticated user and has activated role-security | we want to bypass the role security and show the cabins fol all users without authentication
//| we have to use this service_role , but be careful this key is a master Key
//? in Next the env is activated automatically , so we can use it to preserve our security vars, we can use then in just server( prevent browser access) or using in publicity way by NEXT_PUBLIC_Any_Name

//? So they're only really available inside this environment where the application is running.
//? to make this public to the client.And all we need for that is to just prefix the variable with NEXT_PUBLIC_,

//# after that , we make a file called supabase.js and set all needed vars ,  the we export them and we use it in the data-service.js
//----->Fetch and  Display Data
//? one of the great thing about RSC  pattern is that we are really close to the data source right here on the server,and many times don't even need the API layer.Now in this case, since we're using an external service,which relies on an API,we actually do still have an API layer here.It's just hidden from us because these supabase functions here,in data-service.js
//? we did some configuration in next.Config.mjs
//-----> Streaming Routes
//? a trick to set center children in the div  <div className="grid items-center justify-center">
//? to make loading for each segment just create a new loading in that segment folder
//? we add some prebuilt spinner
//# and we made custom class in the global.css file for that, take a look at that.
//| if we disable js in the browser the data which coming from api wont be displayed
//? we have noticed that in cabins page we have  a text with data, bud we can see the data wont be displayed until the data comes from api , whereas we know this text has nothing to do with the api! Ho to solve that ?
//----->React Suspense
//? suspense is  available just with Next js, RQuery , ...
//? we use suspense in these techs for async operation , fetching data, loading code
//? when the data is not ready suspense comes to play and show the loading.js and then the data got ready, the data will be displayed
//| regular fetch, inside an effect wont work for suspense.
//# Using Suspense

//* Tip: when  two Content (like cabinsList and it's Content) do not depend on the data at all,we just moved the data fetching into its own component,which is in Next.js always a good thing to do.So we should get used to always have the data fetching as close as possible to the place that actually needs that data, because by doing so, we can then implement a more granular data fetching strategy.

//? Note : So we basically have two options when it comes to streaming and showing loading indicators. We have a more global one,which will stream in and replace the entire page,like each loading we use for each page , But the second option is to be a bit more granular in our streaming approach and having only a certain component which fetches data to be streamed in and therefore to be replaced initially by a loading indicator.

//# to achieve that : we needed to first move the data loading into its own component because there is of course no way of wrapping this entire page into a Suspense. the Suspense needs to be outside the component that does the asynchronous work.and then placed the Suspense outside of that.

//* Bp:  it is a good idea to keep the data fetching as close to the components,or even inside the component itself that actually needs the data.So this is always the best practice in Next.js that you should follow in your own applications.

//! always pay attention how import the component in other pages
//? dont import default export  by name import!!!!
//----->DYNAMIC ROUTE SEGMENT
//? to have dynamic route  we make a folder in wanted path , the name of that folder is  [whatever like id or segment or..] and in that folder we make a page.js
//# to get that we use {params} in the page :  in params : {id:1}
//? note each loading will be used for that segment and it's children
//# reminder : div parent relative , image fill + object-cover
//-----> GENERATING DYNAMIC METADATA
//# use this name to have dynamic metaData : generateMetadata
//? it's convention name
// ? ex : getCabin

// export async function generateMetadata({ params }) {
//   const { name } = await getCabin(params.cabinId);
//   return { title: `Cabin ${name}` };
// }
//----->ERROR HANDLING SETTING UP ERROR BOUNDARIES
//? Global error Boundary
//? define a file with teh convention name error.js , and must have use client
//#  that this works for all errors and exceptions that happen anywhere in the app, but only in rendering.So any errors that will happen in callback functions will actually not be caught by a React error boundary.
// | So only rendering errors will be caught right here.
//|  this Error.js boundary does not catch errors that might happen in the root layout. to catch any errors,even if they are in the root layout,then we would need to create a file called global-error.js.
//-----> ERROR HANDLING  NOT FOUND  ERRORS
//# use this Convention : not-found.js
// |  in Next.js,the not found page can actually be shown in two ways.First, an automatic way, simply if the URL doesn't exist,And second, we can also manually basically trigger this page by calling the notFound function. (ex we use it in the data-service)
//-----> DIFFERENT TYPES OF SSR  STATIC VS  DYNAMIC RENDERING
//----->Analyze the routes
//# to see which routes are Static or Dynamic we need to build it
//? npm run build
//----->MAKING DYNAMIC PAGES STATIC WITH GENERATESTATICPARAMS
//? in some scenario we can make Dynamic pages into static
//? if we have limited dynamic var we can use this for having better performances
// export async function generateStaticParams() {
//   const cabins = await getCabins();
//   const ids = cabins.map((cabin) => ({
//// cabinId base on the param namw
//     cabinId: String(cabin.id),
//   }));

//   return ids;
// }
//------>STATIC SITE GENERATION  SSC
//# now our we is static we want to export it as static through a process called static site generation,so that we could then very, very easily deploy it so that we could then very, very easily deploy it to any hosting provider that supports static sites,which is basically every hosting provider out there,
//? add this to the next config   output: 'export',
//? npm run build
//# to test open the output folder by vsCode  and use go live in the vscode
//# in this way we have problem with images as Image is an optimized tag by next and in this situation does not work as needs vercel and vercel server, to solve we have 2 way : using old img tag , or using cloudinary
//----->PARTIAL PRE RENDERING PPR
//# Not yet Available
//----->Cache Data in Next
//? Caching always ON by default
//# we have 4 kind of caching in Next
//| REQUEST MEMOIZATION(Server) | DATA CACHE(Server) | FULL ROUTE CACHE(Server) | ROUTER CACHE(Client)

//| REQUEST MEMOIZATION(Server)
//# What Data    ? Data fetched with similar GET requests (same url and options in fetch function)
//?How long      ? One page request (one render, one user)
//?How To Enable ? No need to fetch at the top of tree: the same fetch in multiple components only makes one request
//!  Only in components (not route handlers or server actions)

//| DATA CACHE(Server)
//# What Data    ? Data fetched in a route or a single fetch request
//?How long      ? Indefinitely, even across de-deploys (can revalidate or opt out)
//?How To Enable ? Data for static pages + ISR when revalidated

//| FULL ROUTE CACHE(Server)
//# What Data    ? Entire static pages (HTML and RSC payload)
//?How long      ? Until the "Data cache" is invalidated (or app is re-deployed)
//?How To Enable ? Static Pages

//| ROUTER CACHE(Client)
//# What Data    ? Pre-fetched and visited pages: static and dynamic
//?How long      ? 30 sec dynamic / 5 min static (throughout one user session)
//?How To Enable ? SPA-like navigation (instant navigation and no full reloads)

//* Caching doesn't work in development  just in Production Mode.

//? to see the caching do this
//# npm run build && npm run start or we can add the command into the package.json and run this npm run prod

//? if we change the price of ex cabin one we can see with refreshing the new price wont be updated on the Next.
//# It is actually because of the data cache and therefore, of the full route cache.So again, this page has been statically generated.And so this means that this route here has now been cached with this data.So with the data that was in place when the page was statically generated.So basically at that point in time,all the data from our website was set in stone and will now be used for all the users who will visit our page until we revalidate that data.
// ? export const revalidate = 0;
//? now we can see the marker for static have changed to the dynamic

//* Now this page is now regenerated for each request,and therefore, it's always getting the fresh data out of the database.

//! as we know Static rendering is Active by default.so if we don need to get fresh data, dont do this

//? we can define and set the time to get fresh data , in fact we are between static and dynamic
// ? export const revalidate = 3600;  //> 1 hour
//* we use this when data that changes from time to time but not constantly.

//# another way to disable cache : we can disable cache for specific components like here , cabins we have static data no need to regenerate and awe have a component need to be refetch in suspense
//? so we can use fetch no store as we using supabase we cant use it or use this
//#  import { unstable_noStore } from 'next/cache';
//# and :   unstable_noStore(); at first line of that component
// or
// import { unstable_noStore as noStore } from 'next/cache';
// noStore();

//# as a challenge , we changed the number of cabins in about page and activated the revalidate for a day
