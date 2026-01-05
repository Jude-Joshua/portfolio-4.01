import Url from "../Links/Link.jsx";

import './button.scss';

export default function Button ({hierarchy, type, children, link=''}) {
	if (type === 'link'){
		return (
			<Url className={`button t-buttons justify-center items-center ${hierarchy}`} href={link}>
				{children}
			</Url>
		)
	}
}