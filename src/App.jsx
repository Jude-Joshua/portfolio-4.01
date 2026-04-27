import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";

import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import CaseStudy from "./pages/Casestudy.jsx";
import NotFound from "./pages/NotFound.jsx";
import NoJavascript from "./pages/NoJavascript.jsx";
import NoInternet from "./pages/NoInternet.jsx";

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
                <Route path="/no-javascript" element={<Layout navbarVariant="notfound" footerVariant="notfound"><NoJavascript /></Layout>} />
                <Route path="/no-internet" element={<Layout navbarVariant="notfound" footerVariant="notfound"><NoInternet /></Layout>} />
                <Route path="*" element={<Layout navbarVariant="notfound" footerVariant="notfound"><NotFound /></Layout>} />
            </Routes>
        </>
    );
}

export default App
