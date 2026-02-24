import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from './pages/Home.jsx';

import {BodyClass} from "./hooks/bodyClass.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";


function App() {
    BodyClass()
    
    return (
        <>
            <ScrollToTop />
            
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            
            <Footer/>
        </>
    );
}

export default App
