import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";

import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CaseStudy from "./pages/Casestudy.jsx";
import NotFound from "./pages/NotFound.jsx";

import { BodyClass } from "./hooks/bodyClass.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";


function App() {
    BodyClass()

    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/projects" element={<Layout><Projects /></Layout>} />
                <Route path="/projects/:id" element={<Layout><CaseStudy /></Layout>} />
                <Route path="*" element={<Layout navbarVariant="notfound" footerVariant="notfound"><NotFound /></Layout>} />
            </Routes>
        </>
    );
}

export default App
