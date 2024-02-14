import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
  
const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },{
          path:"services",
          element:<Services></Services>
        },
        {
          path:"portfolio",
          element:<Portfolio></Portfolio>
        },
        {
          path:"blog",
          element:<Blog></Blog>
        },
        {
          path:"aboutus",
          element:<AboutUs></AboutUs>
        }

      ]
    },
  ]);
  export default router;