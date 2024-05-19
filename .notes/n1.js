//# Instal by  : npx create-next-app@14 project-name
//----->
//# Clean Project
//? Edit page.js and clean it
//# Run : npm run dev
//? we can see the src of page and we can see the code of hello next, means it comes from server
//----->Route
//? Each folder in App is Segment and into it we need a component called page.js
//# it's server Comp
//? the page in the route in homePage
//----->Navigate Between Page
//# a tag : using it navigate us to the target page but with full reloading
//# we use Link (next) :  <Link href="/cabins">Cabins</Link>
//? we make a folder called components in app and we make a component called navigation and we put our link in there,
//----->Layout and GlobalLayout or rootLayout
//? make a file called layout in the root of app folder
//# this name is a convention name in next like page , we can write the component name as what we want here we Write RootLayout, take children to display in body(outlet was in react)
//# we make the main layout in the RootLayout with main footer header and body and html.
//| we can put some meta data in the layout, and as if it a server component we can see it in the source
//| we make a conponent called logo to display logo
//? we put the logo in the public folder and we have access with a slash
//----->
