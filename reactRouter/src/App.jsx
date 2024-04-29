// import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import {Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import User from './Components/User/User'
import Github, { githubInfoLoader } from './Components/Github/Github'
import GitUser from './Components/Github/GitUser'



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Layout/>}>
        <Route path='' element = {<Home/>}/>
        <Route path='About' element = {<About/>}/>
        <Route path='Contact' element = {<Contact/>}/>
        <Route path='user/:userId' element = {<User/>}/>
        <Route loader={githubInfoLoader} path='Github' element={<Github />}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router = {router} />
    </>
  )
}

export default App
