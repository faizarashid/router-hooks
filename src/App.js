import React from "react";
import {  NavLink, Route, Routes, useLocation, useRoutes } from "react-router-dom";
import { Home }  from "./pages/Home"

import { NotFound } from "./pages/NotFound"
import { BookRouter } from "./pages/BookRouter";
import "./style.css"

export default function App() {
  const location = useLocation()
  console.log(location)
  // let element = useRoutes([
  // {
  //   path: "/",
  //   children:[
  //     {
  //       index: true,
  //       element: <Home/>
  //     },
  //     {
  //       path:"about",
  //       index: true,
  //       element: <About />
  //     },
  //     {
  //       path:"contact",
  //       index: true,
  //       element: <Contact/>
  //     }
  //   ]
  // }
  // ])
  //fragment to render multiple things
  return (
  <> 
  <nav>
    <ul>
      <li> <NavLink 
        
        style={({ isActive })=>{
          return isActive ? {color: "red"}:{}}}
        to="/"
        
        >
          {({ isActive })=>{
          return isActive ? "Home is Active": "Home"}} 
       </NavLink ></li>
      <li> <NavLink  state="Hello State from Book" to="/book"> Book </NavLink ></li>
      <li> <NavLink  to="/book/new"> New Book </NavLink ></li>
    </ul>
  </nav>
  {location.state}
  {/* {element} */}
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/book/*" element={<BookRouter />}/>
      {/* <Route path=":id" element={<Book />}/>
      <Route path="new" element={<NewBook />}/>
      <Route index element={<BookList />}/>
    </Route> */}
    {/* <Route path="/book" element={<BookList />}/>
    <Route path="/book/:id" element={<Book />}/>
    <Route path="/book/new" element={<NewBook />}/>  */}
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </>
  );
}