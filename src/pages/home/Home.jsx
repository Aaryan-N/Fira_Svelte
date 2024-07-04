import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import './home.css'

function Home() {
    return(
        <>
            <div className='container'>
        <Navbar />
            </div>

            <div>
        <h1>Hello mr skibidi</h1>
            </div>
        </>
    );
}

export default Home;