import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Error } from './Pages/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cadastro } from './Pages/Cadastro.jsx';
import { Login } from './Pages/Login.jsx';
import { Usuario } from './Pages/Usuario.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
      children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/usuario",
        element: <Usuario/>,
        errorElement: <Error/>,
      },
      {
        path: "/cadastro",
        element: <Cadastro/>,
        errorElement: <Error/>,
      }
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
