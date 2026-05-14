import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";

import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CaseStudy from "./pages/Casestudy.jsx";

import NotFound from "./pages/NotFound.jsx";
import NoJavascript from "./pages/NoJavascript.jsx";
import NoInternet from "./pages/NoInternet.jsx";
import Maintenance from "./pages/Maintenance.jsx"; 

import { BodyClass } from "./hooks/bodyClass.jsx";
import { FadeInClass } from "./hooks/fadeInClass.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";


function App() {
    FadeInClass()
    BodyClass()

    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout navbarVariant="notfound" footerVariant="notfound"><Maintenance/></Layout>} />
                <Route path="/projects" element={<Layout><Projects /></Layout>} />
                <Route path="/projects/:id" element={<Layout navbarVariant="notfound" footerVariant="notfound"><Maintenance /></Layout>} />
                <Route path="*" element={<Layout navbarVariant="notfound" footerVariant="notfound"><NotFound/></Layout>} />
                
                <Route path="/no-javascript" element={<Layout navbarVariant="notfound" footerVariant="notfound"><Maintenance /></Layout>} />
                <Route path="/maintenance" element={<Layout navbarVariant="notfound" footerVariant="notfound"><Maintenance /></Layout>} />
                <Route path="/no-internet" element={<Layout navbarVariant="notfound" footerVariant="notfound"><Maintenance /></Layout>} />
            </Routes>
        </>
    );
}

export default App
