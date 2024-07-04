import './navbar.css'
import logo from '../../assets/logo.jpg'
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className='navbar'>
            <img src={logo} alt="Hydra Logo" className='logo' />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <button className="loginButton">Login</button>
        </nav>
    )
}

export default Navbar;