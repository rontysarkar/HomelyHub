import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Components/Estate/EstateDetails";
import ErrorPages from "../Pages/Error/ErrorPages";
import ForSale from "../Pages/Sale or Rent/ForSale";
import ForRent from "../Pages/Sale or Rent/ForRent";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivetRoutes from "./PrivetRoutes";
import Contact from "../Pages/contact/Contact";

export const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPages/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/sale',
          loader: () => fetch('/estateData.json'),
          element:<ForSale/>
        },
        {
          path:'/rent',
          loader: () => fetch('/estateData.json'),
          element:<ForRent/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:"/estateDetails/:id",
          loader: () => fetch('/estateData.json'),
          element:<PrivetRoutes><EstateDetails/></PrivetRoutes>
        },
        {
          path:'/profile',
          element:<PrivetRoutes><Profile/></PrivetRoutes>
        },
        {
          path:'/updateProfile',
          element:<PrivetRoutes><UpdateProfile/></PrivetRoutes>
        },
        {
          path:'/contact',
          element:<PrivetRoutes><Contact/></PrivetRoutes>
        }
        
      ]
    },
  ]);