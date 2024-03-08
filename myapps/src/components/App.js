import "./App.css";

import Login from './components/Login'
import Signup from './components/Signup'
import Home from './Home'
import {BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      
     </Routes>
      
     </BrowserRouter>

      
      

      
    </>
  );
}

export default App;
