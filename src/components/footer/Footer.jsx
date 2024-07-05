import "./footer.css"
import logo from "../../assets/logo.jpg";

const Footer = () => (
    <footer className='footer-container'>
        <span className="footer-logo">
        <img src={logo} alt="Hydra Logo" className='logo'/>
        <p className="bot-name">Hydra</p>
        </span>
    </footer>
)

export default Footer;