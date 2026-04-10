import { ArrowLeftIcon, X } from "@phosphor-icons/react"

import Button from "../components/Button/Button.jsx";

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import HmwMarker from '../assets/images/hmw-marker.svg?react';
import RoleIconEm from '../assets/images/role.svg?react';
import ScopeIconEm from '../assets/images/scope.svg?react';
import FocusIconEm from '../assets/images/focus.svg?react';
import ContextIconEm from '../assets/images/context.svg?react';
import TensionIconEm from '../assets/images/tension.svg?react';

import caseStudyImage from '../assets/images/fmta-screen.webp';
import diagramImage from '../assets/images/diagram.png';


const personas = [
	{
		id: 1,
		meta: {
			role: "Sample Doctor",
			name: "Dr. Ibrahim Okafor",
			age: 45,
			avatar: "persona-doctor.png",
			tagStyle: {
				backgroundColor: "#c2ddf2"
			}
		},
		content: {
			bio: "Dr. Ibrahim runs a busy neighborhood clinic. He treats between 30–40 patients daily and is responsible for ensuring the clinic always has the medical supplies needed for treatment.",
			quote: "When I’m ordering supplies, I don’t want to browse. I want to find what I need and complete the order immediately."
		}
	},
	{
		id: 2,
		meta: {
			role: "Sample Buyer",
			name: "Sarah Adeyemi",
			age: 32,
			avatar: "persona-buyer.png",
			tagStyle: {
				backgroundColor: "#f4beaf"
			}
		},
		content: {
			bio: "Sarah occasionally buys medical supplies for personal use and for family members. She is not a medical professional, so she relies heavily on product descriptions and platform guidance when choosing the right items.",
			quote: "I need to understand what I’m buying before I add it to my cart."
		}
	}
];


export default function CaseStudy() {
	return (
		<main className={'flex flex-col items-start justify-start'}>
			<section className="hero flex flex-col justify-center items-center">
				<article className="hero-title flex flex-col items-center justify-center">
					<div className="hero-title-link flex flex-row justify-center items-center">
						<Button target={''} hierarchy={'tertiary'} type={'link'} link={'/#projects'}>
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

				<article className="context-info casestudy-section-info flex flex-col items-center justify-center">
					<div className="context-info-inner flex flex-col items-start justify-start">
						<p className="t-copy"> FirstMedtrade is an online marketplace connecting healthcare providers and individuals to verified medical supplies. The platform offered a wide catalogue of products, but the buying experience did not match the urgency and precision required in healthcare procurement.</p>

						<p className="t-copy">I was responsible for rethinking the product experience from discovery to checkout, with <b>the goal of reducing user drop-off rates at checkout.</b>
						</p>
					</div>
				</article>
			</section>

			<section className="monitor flex flex-col casestudy-section items-center justify-center">
				<article className="monitor-title casestudy-section-title flex flex-col items-center justify-center text-center">
					<h3 className="h3">The user pattern after monitoring the website for a month looked like this:</h3>
				</article>

				<article className="monitor-info  casestudy-section-info">
					<div className="monitor-info-inner flex flex-col items-start justify-start">
						<ImageComponent src={diagramImage} alt={"monitor-image"} />
					</div>
				</article>
			</section>

			<section className="">
				<article className="divider"/>
			</section>

			<section className="tension flex flex-col casestudy-section items-center justify-center">
				<article className="tension-title casestudy-section-title flex flex-col items-center justify-center text-center">
					<p className="t-highlights flex flex-row justify-center items-center">TENSION <TensionIconEm /> </p>
					<h3 className="h3">Buyers on the platform are under pressure. They do not browse for products casually.</h3>
				</article>

				<article className="tension-info casestudy-section-info flex flex-col items-center justify-center">
					<div className="tension-info-inner flex items-center justify-center">
						{personas.map((person) => (
							<div
								key={person.id}
								className="persona flex flex-col items-start justify-start"
							>
								<div className="persona-hero flex items-center">
									<ImageComponent
										src={`/assets/images/fmta/${person.meta.avatar}`}
										alt={person.meta.name}
										className="persona-hero-image"
									/>

									<div className="persona-hero-data flex flex-col">
										<span style={person.meta.tagStyle} className={`t-caption taglabel`}>
											{person.meta.role}
										</span>

										<h6 className="h6 namer flex items-center justify-start">
											{person.meta.name}
											<span className="t-highlights">
												({person.meta.age}yrs)
											</span>
										</h6>
									</div>
								</div>
								<div className="persona-bio flex flex-col items-start justify-start">
									<div className="persona-bio-inner flex flex-col items-start justify-start">
										<p className="t-highlights">BIO</p>
										<p className="t-copy">
											{person.content.bio}
										</p>
									</div>

									<div className="persona-bio-inner flex flex-col items-start justify-start">
										<p className="t-highlights">QUOTE</p>
										<p className="t-copy">
											{person.content.quote}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</article>
			</section>



		</main>
	)
}