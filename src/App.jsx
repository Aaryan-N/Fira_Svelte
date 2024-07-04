import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Help from "./pages/help/Help.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
