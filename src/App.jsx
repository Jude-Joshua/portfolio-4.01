import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CaseStudy from "./pages/Casestudy.jsx";

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
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects/:id" element={<CaseStudy />} />
            </Routes>
            
            <Footer/>
        </>
    );
}

export default App
