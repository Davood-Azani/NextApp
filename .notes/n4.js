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
