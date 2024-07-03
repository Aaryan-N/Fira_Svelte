import './App.css'
import Navbar from "./components/navbar/Navbar.jsx"
import {useState} from "react";
function App() {

    const [theme, setTheme] = useState("dark")

  return(
      <div className='container'>
          <Navbar theme={theme} setTheme={setTheme} />
      </div>
  );
}

export default App
