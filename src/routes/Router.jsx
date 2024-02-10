import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
  
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
        }

      ]
    },
  ]);
  export default router;