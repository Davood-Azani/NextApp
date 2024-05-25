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
//? to fetch dat awe need to be in a server component
//? server actions can be in a server component directly or the cleaner way is to be in a separated file
//? to get data from a form we get data fro formData, and we have to set the name for inputs
//? we dont use try catch in server actions , instead we use throw
//? after updating we need to revalidate the result to be applied in the ui otherwise because of the browser cache or also called the Router cache about 30 sec we have the previous data
//----->MANUAL CACHE REVALIDATION
//# revalidatePath('/account/profile');
//----->DISPLAYING A LOADING INDICATOR  THE USEFORMSTATUS HOOK
//#  useFormStatus :  it must be used in a component that's rendered inside a form.So not inside a component that simply contains a form.
//? because of this we make a component for button
//? sample in UpdateButton in UpdateProfileForm
//----->BUILDING THE GUESTS RESERVATIONS PAGE
//? get reservation
//----->DELETING A RESERVATION
//* we can define server action in the component(need to write the use server) but we do it in the server file
//# whenever we use onClick need to wite use client
//# in this deleteButton we  dont use form , so we pass the server action to the on click, and in this wat to manage loadin we use use Transition
//# useTransition() |
//? So at the core, useTransition allows us to mark a state update as a so-called transition. And when a state update is marked as a transition by using the useTransition hook,that state update will happen without blocking the UI.So, which means that the UI will stay responsive during a re-render, and we also get an indication that a state transition is happening.
//! always check user is allowed to delete the specific id
//----->Edit Booking
//? we dont have something new to tell
//?add hidden field(input )in to form
//? using useStatusForm to loading
//? revalidate 2 path in the server action
//? Shift + alt +o
//----->THE USE OPTIMISTIC HOOK
//# So essentially, optimistic UI is a trick and a technique that we can use in order to improve the perceived performance of a user interface.
//? And it's called optimistic because we assume that a certain asynchronous operation will be successful before it has even finished,so while it's still working in the background.
//?So the goal of this technique is to improve the user experience by a lot,because it makes the app feel so much faster and more responsive,without having all these loading spinners Now in this application,
//? as this is a hook we need a client component
//? so as previous tip , we separated the reservation list into a component to use the new hoo in there

//*  So the useOptimistic hook takes two arguments.It takes first the current state, which will be the one that is usually rendered here,unless there is currently an async operation happening.
//# take a look at the reservation List
//| for adding : [...curBookings,newBooking]

//# the great thing about optimistic is , if we get error the data ex here will be backed!
//----->FINISHING THE DATE SELECTOR
//? add some logic to Date Selector
