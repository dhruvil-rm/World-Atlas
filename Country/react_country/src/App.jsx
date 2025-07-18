import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import {ErrorPage} from "./Components/UI/ErrorPage";

import "./App.css";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";


const router = createBrowserRouter([  
  {
    path:"/",
    element: <AppLayout />,
    errorElement:<ErrorPage />,
    children:[  
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "country",
      element: <Country />,
    },
    {
      path: "contact",
      element: <Contact />,
    },]
  }
]);

const App = () => {
  return <RouterProvider  router={router}></RouterProvider>
}

export default App;