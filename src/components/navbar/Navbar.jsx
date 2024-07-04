import './Navbar.css'
import logo from '../../assets/logo.jpg'
import dayIcon from '../../assets/navbar/day.png'
import nightIcon from '../../assets/navbar/night.png'
import daySearch from '../../assets/navbar/search-w.png'
import nightSearch from '../../assets/navbar/search-b.png'
// eslint-disable-next-line react/prop-types
const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return(
        <div className='navbar'>

            <img src={logo} alt="Hydra Logo" className='logo' />

            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            <img onClick={() => {toggle_mode()}} src={theme == 'dark' ? dayIcon : nightIcon} alt="" className='toggle-icon' />
        </div>
    )
}

export default Navbar;