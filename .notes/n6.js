//----->WHAT ARE SERVER ACTIONS
//* First, Server Actions can be defined right inside a Server Component,where they can then be used directly or passed as a prop to a Client Component.
//? And remember how usually we cannot pass functions as props to Client Components.But Server Actions are actually an exception to that rule.So Server Actions can flow from the server to the client and be used there.

//* The second place in which Server Actions can be created,is in a dedicated Server Action Module,which needs to start with the Use Server Directive.which can then be imported into any Server or even Client Component.(recommended)

//!  Use Server is really only for Server Actions,not for Server Components.
//* So remember, Server Components are the default component and don't require any directive.

//| to recap what the Use Client Directive is for,let's say that we're on the server now,in a Server Component.The Use Client Directive is then like a bridge that allows our code to cross from the server to the client.This is similar to including a script URL with the script tag in an HTML file that is sent to the browser.

//# the Use Server Directive is simply the other way around.So it bridges the gap from client to server,basically allowing the client to talk to the server.So in a sense, it's like an API endpoint,which allows frontend applications to do exactly that,so to talk from the client to the server.
//* now, Server Actions are typically used to handle form submissions,meaning that we can use the Server Action as an action attribute of a regular form element no matter if that form is placed in a Server or a Client Component.And this interaction between forms and Server Actions is one of the special things about Server Actions.
//| And again, it doesn't even matter if that form is a Server Component or a Client Component.It will just work like magic.So forms will simply automatically take all the form data and send it to the Server Action in a serialized form using the provided API endpoint behind the scenes.

//? IN SERVER ACTIONS, WE CAN:
//? Perform data mutations (create, update, delete) and
//? Update the Ul with new data: Revalidate cache with revalidatePath and revalidate Tag
//? we can also work with Cookies

//! we need to assume inputs are unsafe as we are working on the backend
//----->UPDATING THE PROFILE USING A SERVER ACTION
