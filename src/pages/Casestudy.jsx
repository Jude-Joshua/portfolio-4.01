import { ArrowLeftIcon, X } from "@phosphor-icons/react"

import Button from "../components/Button/Button.jsx";

import HmwMarker from '../assets/images/hmw-marker.svg?react';
import RoleIconEm from '../assets/images/role.svg?react';
import ScopeIconEm from '../assets/images/scope.svg?react';
import FocusIconEm from '../assets/images/focus.svg?react';
import ContextIconEm from '../assets/images/context.svg?react';

import caseStudyImage from '../assets/images/fmta-screen.webp';

import imageOkafor from '../assets/images/Okafor.png';
import imageSarah from '../assets/images/Sarah.png';
import crossImage from '../assets/images/wrong.png';
import diagramImage from '../assets/images/diagram.png'
import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";


export default function CaseStudy() {
	return (
		<main className={'flex flex-col items-start justify-start'}>
			<section className="hero flex flex-col justify-center items-center">
				<article className="hero-title flex flex-col items-center justify-center">
					<div className="hero-title-link flex flex-row justify-center items-center">
						<Button target={''} hierarchy={'tertiary'} type={'link'} link={'/projects'}>
							<ArrowLeftIcon weight={'bold'} fontSize={'24'} />
							<span>Back to projects </span>
						</Button>
					</div>
					<h2 className="h2 text-center">
						<span className="hero-title-hmw flex flex-col items-center inline-block">
							<HmwMarker /> <span>How might we</span>
						</span> reduce cognitive load and make ordering medical supplies feel immediate, controlled, and trustworthy?
					</h2>
				</article>
				<article className="hero-info items-center flex flex-col items-start justify-center">
					<div className="hero-info-cover">
						<ImageComponent src={caseStudyImage} alt={"Case Study hero image"} />
					</div>

					<div className="hero-info-inner flex items-start justify-between">
						<div className="hero-info-inner-section flex items-start flex-col justify-start">
							<div className="hero-info-inner-section-highlights flex flex-row justify-center items-center">
								<p className="t-highlights">Role</p> <RoleIconEm />
							</div>
							<p className="t-copy-small">Product Designer</p>
						</div>
						<div className="divider vertical" />
						<div className="hero-info-inner-section flex items-start flex-col justify-start">
							<div className="hero-info-inner-section-highlights flex flex-row justify-center items-center">
								<p className="t-highlights">Scope</p> <ScopeIconEm />
							</div>
							<p className="t-copy-small">
								UX strategy, UI redesign,<br />interaction design
							</p>
						</div>
						<div className="divider vertical" />
						<div className="hero-info-inner-section flex items-start flex-col justify-start">
							<div className="hero-info-inner-section-highlights flex flex-row justify-center items-center">
								<p className="t-highlights">Focus</p> <FocusIconEm />
							</div>
							<p className="t-copy-small">
								Reduce friction in product discovery and checkout.
							</p>
						</div>

					</div>
				</article>
			</section>

			<section className="context flex flex-col casestudy-section items-center justify-center">
				<article className="context-title casestudy-section-title flex flex-col items-center justify-center text-center">
					<p className="t-highlights flex flex-row justify-center items-center">CONTEXT <ContextIconEm /> </p>
					<h3 className="h3">Users are not buying from the website.</h3>
				</article>

				<article className="context-info flex flex-col items-center justify-center">
					<div className="context-info-inner flex flex-col items-start justify-start">
						<p className="t-copy"> FirstMedtrade is an online marketplace connecting healthcare providers and individuals to verified medical supplies. The platform offered a wide catalogue of products, but the buying experience did not match the urgency and precision required in healthcare procurement.</p>

						<p className="t-copy">I was responsible for rethinking the product experience from discovery to checkout,<b> with the goal of understanding why users were not buying from the platform.</b>
						</p>
					</div>
				</article>

				{/*Diagram*/}
				<div className="context-header max-w-3xl text-center leading-tight">
					<h3 className="h4 font-bold">The users pattern after monitoring the website for a month was something like this:</h3>
				</div>

				<div className="context-diagram">
					<img src={diagramImage} alt="image" />
				</div>

			</section>

			{/*Tension section*/}
			<section className="tension flex flex-col justify-center items-center">
				<article className="w-full max-w-3xl">
					<div className="tension flex justify-center items-center ">
						<h6 className="h6">TENSION</h6>
						<img src={crossImage} alt="Wrong" className="w-5 h-5" />
					</div>

					<div className="tension-header max-w-3xl text-center leading-tight">
						<h3 className="h4 font-bold">Buyers operate under pressure.They do not browse casually.
							They browse with intent.
						</h3>
					</div>

					<div className="tension-image flex">
						<img src={imageOkafor} alt="okafor" />
						<img src={imageSarah} alt="sarah" />
					</div>


				</article>
			</section>

		</main>
	)
}