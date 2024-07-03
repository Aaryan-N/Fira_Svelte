import './Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>

            <img src="" alt="" className='navbar-logo' />

            <ul>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            <div className="search-box">
                <input type='text' placeholder='Search...' />
                <img src="" alt=""/>
            </div>
            <img src="" alt="" className='toggle-icon' />
        </div>
    )
}

export default Navbar;