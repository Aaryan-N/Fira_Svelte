import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Dashboard from "./pages/dashboard/Dashboard.jsx"
import About from "./pages/about/About.jsx"
import Features from "./pages/features/Features.jsx"
import Pricing from "./pages/pricing/Pricing.jsx"
import ContactUs from "./pages/contact-us/ContactUs.jsx"

function A  pp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
