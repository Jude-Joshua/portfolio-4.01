import Url from "../Links/Link.jsx";

import './button.scss';

export default function Button ({hierarchy, type, children, target, link=''}) {
	if (type === 'link'){
		return (
			<Url data-cursor='hover' className={`button t-buttons justify-center items-center ${hierarchy}`} href={link} target={target}>
				{children}
			</Url>
		)
	}
}