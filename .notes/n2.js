//----->Project Organization
//? the first approach is co-located
//? means each related things must be at the same folder ==>(ex: move the Counter to the Cabins folder) but it's messy and it's ok for small app so we dont use that in this app
//? other approach is having a component folder fo reusable components
//| with using _ at the first name of folder we make it as a private folder so we can use the component folder in the app folder
//| we can add src folder and in that have app and components but this is ok
//# public folder is for images to display directly in the site, logo(it's accessible from everywhere)
//? so we have app folder in that we have _components , _lib,_styles and other path folder
//# to activate @ alias be aware we are using js so delete ts.config then replace and chnage
//? import Counter from './../_components/Counter' to  import Counter from '@/app/_components/Counter';
// removed fetch code
//  const res = await fetch('https://jsonplaceholder.typicode.com/users');
//  const data = await res.json();
//  console.log(data);

//----->
