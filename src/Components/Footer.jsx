import React from 'react'
import { Container } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <Container>
        <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-body-secondary">© 2017–2023</small>
      </div>
      <div className="col-6 col-md">
        <h5>Serviços</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Transformação digital</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Arquitetura de soluções</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Gestão da qualidade</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Projetos ágeis</a></li>
          
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Produtos</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Analytics</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Sistema ERP</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Automação</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Processos</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Sobre</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Parcerias</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Contato</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacidade</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Termos</a></li>
        </ul>
      </div>
    </div>
        </Container>
   
  </footer>
  )
}
