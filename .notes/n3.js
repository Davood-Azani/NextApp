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
