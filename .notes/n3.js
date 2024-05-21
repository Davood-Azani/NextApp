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
