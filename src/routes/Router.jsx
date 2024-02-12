import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
  
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
        }

      ]
    },
  ]);
  export default router;