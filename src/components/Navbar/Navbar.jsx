import { useMemo } from "react";

import "./navbar.scss";

import NavbarLink from "./NavbarLink.jsx";
import Url from "../Links/Link.jsx";

import Logo from "../../assets/images/logo.svg?react";

const Links = ["home", "projects", "mentoring", "speaking"];

export default function Navbar({ variant = "default" }) {
	const navClass = useMemo(() => {
		if (variant === "notfound") return "navbar navbar--notfound";
		return "navbar";
	}, [variant]);

	return (
		<nav className={navClass + " flex flex-row justify-between align-center"}>
			<div className="navbar-logo">
				<Logo />
			</div>
			<div className="navbar-links flex flex-row items-center justify-center">
				<NavbarLink navLinks={Links}/>
				<div className="divider navbar-links-navigation-divider"></div>
				<Url href='mailto:work@judejoshua.com' className="navbar-links-navigation-mailer"
				     isNavigationLink={true}>
                    <span>
                        work@judejoshua.com
                    </span>
				</Url>
			</div>
		</nav>
	);
}
