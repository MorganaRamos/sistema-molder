import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cadastro } from './Pages/Cadastro.jsx';
import { Login } from './Pages/Login.jsx';
import { Home } from './Pages/Home.jsx';
import { Usuarios } from './Pages/Usuarios.jsx';
import App from './App.jsx';




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
        path: "/usuarios",
        element: <Usuarios/>,
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
