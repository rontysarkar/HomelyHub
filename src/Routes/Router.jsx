import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<div>hellloo bang</div>
        }
      ]
    },
  ]);