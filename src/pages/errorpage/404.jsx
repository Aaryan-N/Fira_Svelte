import Navbar from "../../components/navbar/Navbar.jsx";
import './404.css'

function FourOhFour() {
    return(
        <>
            <div className='container'>
                <Navbar />
            </div>
            <h1>404 page not found!</h1>
        </>
    );
}

export default FourOhFour;