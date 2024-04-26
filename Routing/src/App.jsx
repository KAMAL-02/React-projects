import Navbar from './Navbar'
import './App.css'
import Home from './Home';
import Login from './Login';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></> ,
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></> ,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App
