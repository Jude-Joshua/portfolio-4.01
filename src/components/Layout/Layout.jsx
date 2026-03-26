import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout({ navbarVariant = "default", footerVariant = "default", children }) {
    return (
        <>
            <Navbar variant={navbarVariant} />
            <main>{children}</main>
            <Footer variant={footerVariant}/>
        </>
    );
}
