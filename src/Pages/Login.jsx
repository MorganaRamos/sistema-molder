import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Login = () => {

    const navigate = useNavigate()
    const logar = event => {
        event.preventDefault()
        navigate('/')
        }


  return (
    
    <div className='container'>
    <main className="form-signin w-100 m-auto" style={{maxWidth:'40%'}}>
        <form onSubmit={logar}>
          
          <h1 className="h3 mb-3 fw-normal">Olá! Faça seu login:</h1>
      
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email </label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Senha</label>
          </div>
      
          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
              me lembre
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
    
  )
}
