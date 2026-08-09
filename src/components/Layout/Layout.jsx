import { useState } from "react";

import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout({ navbarVariant = "default", footerVariant = "default", children }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);

        window.setTimeout(() => {
            setIsVisible(false);
        }, 300);
    };

    return (
        <>
            {isVisible && (
                <div className={`site-development-notice ${isClosing ? "is-closing" : ""}`} role="status" aria-live="polite">
                    <span
                        className="site-development-notice__close h5"
                        aria-label="Close development notice"
                        onClick={handleClose}
                    >
                        ×
                    </span>
                    <p className="t-copy-small">
                        This website is still under development and you might notice some missing parts while browsing.
                    </p>
                </div>
            )}
            <Navbar variant={navbarVariant} />
            {children}
            <Footer variant={footerVariant}/>
        </>
    );
}
