import {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar.jsx";

function Home() {
    const current_theme = localStorage.getItem("current_theme");
    const [theme, setTheme] = useState(current_theme ? current_theme : 'dark');

    useEffect(() => {
        localStorage.setItem("current_theme", theme);
    },[theme])

    return(
        <>
            <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
            </div>
        <h1>Hello mr skibidi</h1>
        </>
    );
}

export default Home;