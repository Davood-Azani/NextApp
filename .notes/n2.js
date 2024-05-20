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
