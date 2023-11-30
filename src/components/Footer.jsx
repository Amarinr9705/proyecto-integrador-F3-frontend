import './Footer.scss'
import { FaInstagram, FaFacebookF,FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="footer">
    <div className="footer__grupo-1">
        <div className="footer__box">
            <figure>
                <a href="#">
                    <img src="img/Logo.png" alt="Logo de SLee Dw"/>
                </a>
            </figure>
        </div>
        <div className="footer__box">
          <h2 className="footer__tittle">POLÍTICAS</h2>
          <p>Envíos gratis por compras mayores a 10 USD.</p>
          <p>Garantía de 90 días en todos tus productos.</p>
        </div>
        <div className="footer__box">
            <h2 className="footer__tittle" >SIGUENOS</h2>
            <div className="footer__red-social">
                <a href="#" className="fa fa-facebook"><FaFacebookF style= {{fontSize: '25px'}}/></a>
                <a href="#" className="fa fa-instagram"><FaInstagram style= {{fontSize: '25px'}}/></a>
                <a href="#" className="fa fa-twitter"><FaTwitter style= {{fontSize: '25px'}}/></a>
                <a href="#" className="fa fa-youtube"><FaYoutube style= {{fontSize: '25px'}}/></a>
            </div>
        </div>
    </div>
    <div className="footer__grupo-2">
        <small>&copy; 2023 <b>THI</b> - Todos los Derechos Reservados.</small>
    </div>
</footer>
    </>
  )
}

export default Footer