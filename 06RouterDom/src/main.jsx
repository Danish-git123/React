import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { getGithubData } from './components/Github/Github.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}></Route> //here no need to write path="/about" as we are already sandwiched the path after '/' so only write "about"
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/' element={<User/>}>
      <Route path=':userid' element={<User/>}></Route>
      </Route>
      <Route
      loader={getGithubData}  //loader is used to fetch data before rendering the component
       path='github' 
       element={<Github/>}></Route>
      <Route path='*' element={<div>Not Found</div>}></Route> 
      {/* this '*' is used when elements are not found */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router} />
  </StrictMode>,
)
