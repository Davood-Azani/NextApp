//----->BLURRING THE BOUNDARY BETWEEN SERVER AND CLIENT
//? Client Components :
//# Can import : Only Client Components
//# Can render : Client and Server Components passed as Props

//? Server Components
//# Can import : Client and Server Components
//# Can render : Client and Server Components

//! we can render  A Server Component inside a Client Component with passing as props (children , props)

//? ex: in A we want Client Component  B and Server Component A
//? first in A, Component B and D must be imported then in B as children must be D
//!  children of client components will automatically become client components as well.
//# it's Possible a component in a place is Server Component and in other place is Client Component : for this to make sense, it's very important to understand that components actually create instances when they are used and that therefore the type of component instance that will be created is not set in stone when we write the component code.
//* If the component is imported and used by a client component,so inside the client server boundary,it'll end up creating an instance of a client component too. Otherwise an instance of a server component is created instead.

//----->CLIENT COMPONENTS IN SERVER COMPONENTS
//? we used TextExpander (client component into a server Component)
//# we can use react developer tools , to see the client components , in this tools we can see just client components
//----->HIGHLIGHTING CURRENT SIDE NAVIGATION LINK
//? using react hook called : usePathname();
//? we can get the path name and compare to the href and based on that add class
//# and we know all react hooks are client side
//----->SHARING STATE BETWEEN CLIENT AND SERVER  THE URL
//# to get the params on the url we use another convention called : searchParams | and also we have useSearchParams hook
//# on logging :http://localhost:3000/cabins?cap=small&max=5 ==>  { cap: 'small', max: '5' }
//! And again, this searchParams is only available on the page.So really only in page.js, not in server components.
//# see the cabins
//# we get the filter from url, check nullability and pass all if it's null,then we do and use filter based on this params on client
//# this is not a best way but it's ok
//? reminder this page is not static anymore as we use a searchParam and as result if we have revalidate , it's not working

//# whenever this searchParams here changes,which is a result of the URL changing,this server component here will re-render.
//* that a server component re-renders whenever there is a navigation.And so that's exactly the situation that we have right here.

//| summary : we need to simulate the changing url, and get and pass the search params,
//? we ned to pass the key to the suspense.
//* suspense will not re-render the fallback.And the way we fix that is to pass in a unique key.And so then whenever the key is different and the child component here suspense,then the fallback will be shown again,
//----->Server Component in Client Component
//! as we sail earlier: just with props or children we can pass server Component into the client component
//?ex: here we pass the select country which is a server component into the client component which is form(assume , we need state in the form so we make a client component into the profile paste and ...)
