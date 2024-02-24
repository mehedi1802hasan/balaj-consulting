import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import TermsAndCondition from "../pages/TermsAndCondition.jsx/TermsAndCondition";
import Career from "../pages/Career/Career";
import AddBlogs from "../pages/AddBlogs/AddBlogs";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import ManageBlogs from "../pages/ManageBlogs/ManageBlogs";
import PrivateRoute from "./PrivateRoute";
  
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
        },
        {
          path:"contactus",
          element:<ContactUs></ContactUs>
        },
        {
          path:"termsandcondition",
          element:<TermsAndCondition></TermsAndCondition>
        },
        {
          path:"career",
          element:<Career></Career>
        }

      ]
    },{
       path:"/addblogs",
       element:<PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>

    },{
      path:"/manageblogs",
      element:<PrivateRoute><ManageBlogs></ManageBlogs></PrivateRoute>

   },
    {
      path:"/login",
      element:<Login></Login>

   },
//    {
//     path:"/registration",
//     element:<Registration></Registration>

//  }
  ]);
  export default router;