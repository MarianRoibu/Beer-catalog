import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage,} from "../UI/pages/users";



const router = createBrowserRouter([
    {
      path: '/',
      element:  <HomePage /> 
    },

    // {
    //   path: '/profile',
    //   element: <ProfilePage />
    // },
  ]);
  
  export default function Router() {
    return <RouterProvider router={router} />;
  }