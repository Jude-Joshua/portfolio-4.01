import NavbarLink from "./NavbarLink.jsx";

import Url from "../Links/Link.jsx";
import "./navbar.scss";

import Logo from "../../assets/images/logo.svg?react";

const Links = ["home", "projects", "mentoring", "speaking"];

export default function Navbar() {
	
	return (
	
		<nav className="navbar flex flex-row justify-between align-center">
			<div className="navbar-logo">
				<Logo />
			</div>
			<div className="navbar-links flex flex-row items-center justify-center">
				<NavbarLink navLinks={Links}/>
				<div className="divider navbar-links-navigation-divider"></div>
				<Url href='mailto:thejudejoshua@gmail.com' className="navbar-links-navigation-mailer"
				     isNavigationLink={true}>
                    <span>
                        thejudejoshua@gmail.com
                    </span>
				</Url>
			</div>
		</nav>
	);
}
