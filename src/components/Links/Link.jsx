import { Link } from 'react-router-dom';

import './link.scss';

export default function Url({isNavigationLink, href, className ='', children}) {
	
	return (
		<Link
			to={href}
			className={`t-links flex flex-row ${className} ${
				isNavigationLink
					? "navigation-link"
					: "body-link"
			}`}
		>
			{children}
		</Link>
	);
}