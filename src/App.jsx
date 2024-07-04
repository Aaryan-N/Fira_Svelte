import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage} from "./pages/login/LoginPage.jsx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
