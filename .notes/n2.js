//----->Project Organization
//? the first approach is co-located
//? means each related things must be at the same folder ==>(ex: move the Counter to the Cabins folder) but it's messy and it's ok for small app so we dont use that in this app
//? other approach is having a component folder fo reusable components
//| with using _ at the first name of folder we make it as a private folder so we can use the component folder in the app folder
//| we can add src folder and in that have app and components but this is ok
//# public folder is for images to display directly in the site, logo(it's accessible from everywhere)
//? so we have app folder in that we have _components , _lib,_styles and other path folder
//# to activate @ alias be aware we are using js so delete ts.config then replace and change
//? import Counter from './../_components/Counter' to  import Counter from '@/app/_components/Counter';
// removed fetch code
//  const res = await fetch('https://jsonplaceholder.typicode.com/users');
//  const data = await res.json();
//  console.log(data);

//----->STYLING WITH TAILWIND CSS
//? import globals.css into the rootLayout
//# by default in global we have these
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
//? we add ourCustom colors to the tailwind config
//# cssModule,StyledComponent can be used but we use tailwind
//# install npm i @heroicons/react
//----->MetaData and Fav icon
//? activate the code on the global
//? take a look at the rootLayout
//# for fav icon , we use next convention name , icon , with any format we put it in the app then it will be appeared on the title as fav Icon
//----->LOADING AND OPTIMIZING FONTS
//# to use font , import , configure and pass the class name
//----->MakeCenter Main and Navbar
//? add some component instead of navBar and header,
//? make as center the body with and the main with flex flex-col and flex-1 trick
//----->optimizing images
//# by using Image tag from next :
//? it will automatically serve correctly sized images in modern formats.ex WebP
//? Second, the Image component prevents layout shifts
//? And finally, it also automatically lazy loads images only when they actually enter the viewport,
//# if we pass teh address of image directly like src='./logo' , in this way we should pass the W and H but
//| we can also pass the image as imported file and the use it in the src in this way Next first analyzes the image , and no need to pass the W and H, of course we need to add them , but the benefit is we can use some useful properties
//# the Image , will calculate image Size on demand automatically
//----->HomePage
//? we use pre-built home component : Image : fill quality placeholder
//# className="object-cover object-top"
//----->AboutPage responsiveTechniques and adding other prebuild components
//? we make the about page and cabins and cabinCard
//# in some scenario when we get a pic from database the Image cant handle the ability to responsive for pic (in many situations we can use Image(with imported pic) without W and H and it makes the pic responsive )
//? to solve we use Image + fill + a container around our pic
//# take a look for ex the second image in about page
//? parent: aspect-square  + relative   | child :object-cover
//| so it's a technique : we don use dimensions fro the image and pass to the parent | we use this way if we are not able to use the Image Way! (about pic 1)
//----->Add Nested Routes and Pages
//? we make these paths (by adding folder in the account) : reservations and profile
//----->Nested Layout
//# just make layout in each section to have layout for each section
