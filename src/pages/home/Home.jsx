import Navbar from "../../components/navbar/Navbar.jsx";
import './home.css'
import Footer from "../../components/footer/Footer.jsx";

function Home() {
    return(
        <>
            <div className='container'>
        <Navbar />
            </div>

            <div>
        <h1>Hello mr skibidi</h1>
            </div>

            <div className="container">
            <Footer />
            </div>
        </>
    );
}

export default Home;