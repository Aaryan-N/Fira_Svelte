import './navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
    return(
        <span className='navbar'>
            <img src={logo} alt="Hydra Logo" className='logo' />
            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact Us</li>
            </ul>
            <button className="loginButton">Login</button>
        </span>
    )
}

export default Navbar;