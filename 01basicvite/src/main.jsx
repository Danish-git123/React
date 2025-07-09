import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

function Myapp(){
  return <h1>Create react app</h1>
}
/*
const reactElement={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank",
    },
    children:'Click me to visit Google'

} */

const areactElement=React.createElement(
  'a',
  {href:"https://www.google.com",
        target:"_blank",},
  'Click to visit Google',
  // if(username==="dan") ? "yes":"no"
)

const AnotherElement=(
  <a href="http://www.google.com" target='_blank'> Visit Google </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Myapp/> //will work
  // AnotherElement //will work
  // reactElement //will not work because react dont understand our custom made properties like type,props,children
  areactElement
)

// as react doesnt know our properties so we used React.createElement() where React will understand now our properties and we can use the reactElement(areactElement)
