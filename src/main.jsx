import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cadastro } from './Pages/Cadastro.jsx';
import { Login } from './Pages/Login.jsx';
import { Usuario } from './Pages/Usuario.jsx';
import { Home } from './Pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
     children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/usuario",
        element: <Usuario/>,
     },
      {
        path: "/cadastro",
        element: <Cadastro/>,
      },
      {
        path: "/home",
        element: <Home/>
      }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
