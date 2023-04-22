import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./components/home/Home.jsx"

import { HashRouter,Routes,Route } from 'react-router-dom'
import Login from './components/login/Login.jsx'
import Registro from './components/login-registro/Registro.jsx'

import Estudiantes from './components/estudiantes/Estudiantes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route> 
          <Route path='/registro' element={<Registro/>}></Route> 

          <Route path="/estudiantes" element={<Estudiantes/>} />
          {/* 
          <Route path='/Episodios' element={<Episodios/>}></Route>
          <Route path='/Citas' element={<Citas/>}></Route> */}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
