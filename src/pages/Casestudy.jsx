import { ArrowLeftIcon, X } from "@phosphor-icons/react"

import Button from "../components/Button/Button.jsx";

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import HmwMarker from '../assets/images/hmw-marker.svg?react';
import RoleIconEm from '../assets/images/role.svg?react';
import ScopeIconEm from '../assets/images/scope.svg?react';
import FocusIconEm from '../assets/images/focus.svg?react';
import ContextIconEm from '../assets/images/context.svg?react';
import TensionIconEm from '../assets/images/tension.svg?react';
import CopierImage from '../assets/images/copier.png';
import IdeaImage from '../assets/images/fmt2.webp';
import SolutionImage from '../assets/images/fmt3.webp';
import ArrowPointImage from '../assets/images/arrow-point.png';
import ConstraintsImage from '../assets/images/constraints.png';
import BoxImage from '../assets/images/box.png';
import DiceImage from '../assets/images/dice.png';
import PaintImage from '../assets/images/paint.png';

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

			<section className="">
				<article className="divider"/>
			</section>

             
			{/*begin*/}
			<section className="begin flex flex-col justify-center items-center">
				<article className="begin-title justify-start">
					<h6 className="begin-title flex items-center  h6">BEFORE WE BEGIN
						<span >
							<img src={CopierImage} alt="copier-image" className="begin-title-image" />
						</span>
					</h6>

					<h5 className="h5">Here is what we already know ...</h5>
					 </article>

					 <article className="begin-box-1">
						<h6 className="h6 max-w-2xl">Problem 1: Having an homepage with too much information at once might work 
							for a normal e-commerce website but it'll fail for these set of  users .
						</h6>
						<div className="begin-box-2 justify-start">
						<img src={IdeaImage} alt="idea-image" className="begin-box-2-image" />
						</div>

					 </article>

					 <article className="begin-box-1">
						<h6 className="h6 max-w-2xl">Problem 2: Too many registration points. The registration.
						</h6>
						<div className="begin-box-2 justify-start">
						<img src={SolutionImage} alt="solution-image" className="begin-box-2-image" />
						</div>

					 </article>

			</section>


               {/*goal*/}
			<section className="goal flex flex-col justify-center items-center">
				<article className="goal-box-1 justify-center">
					<div className=" justify-start">
						<h6 className="h6 flex items-center goal-box-1-title ">THE GOAL
						<span> <img src={ArrowPointImage} alt="target-image" className="goal-box-1-image" /></span>
						</h6> 
					</div>

						<h5 className="goal-box-1-title-header h5">Simplify the shopping experience so users can easily buy on the 
							platform.
						</h5>

						<p className="goal-box-1-par-1 t-copy">
							Early conversations with stakeholders revealed a share priority. 
                            The experience needed to become faster for users, but without introducing 
                            complexity into the system or delaying implementation. Each 
							stakeholder approached the problem from a differnt angle, raising 
							practical concerns that shaped the direction of the designs.
						</p>

				</article>

				<article className=" goal-grid justify-center grid grid-rows-3 ">
					<div className="flex goal-grid-item">
						<h6 className="h6">Product Owner</h6>
                          {/* --- FIRST ---*/}
						<p className="t-copy">
							"We need to make ordering faster and more reliable for users, especially for healthcare 
							providers who depend on this daily. But we cannot risk breaking the existing system."
						</p>

						<p className="t-copy">
							"The redesign focused on improving clarity and speed without the current structure, 
							avoiding changes that would require a full system overhaul."
						</p>
					</div>
                      {/* --- SECOND ---*/}
					<div className="flex goal-grid-item">
						<h6 className="h6">Product Manager</h6>

						<p className="t-copy">
							"How do we reduce friction in the buying experience without increasing operatiional 
							complexity for the business ? "						</p>

						<p className="t-copy">
							"Designs decisions had to balance user efficiency with business workflows, ensuring that improvements 
							remained practical and scalable. "
						</p>
					</div>
					  {/* --- THIRD ---*/}
					<div className="flex goal-grid-item">
						<h6 className="h6">Developer</h6>

						<p className="t-copy">
							"The checkout flow and product structure are already tighly connected to the backend. Major changes will take
							time and may intoduce risk ."
						</p>

						<p className="t-copy">
							"The solution prioritised frontend and interaction improvements, working with existing technical boundaries 
							instead of restructuring the system ."
						</p>
					</div>
				</article>

				<article className="goal-box-2 justify-center">
					<div>
						<h6 className="h6 flex items-center goal-box-1-title">
							CONSTRAINTS  
							<span>
								<img src={BoxImage} alt="constraints-image" className="goal-box-1-image" />
							</span>
						</h6>
					</div>

                    <section className="goal-border " >
					<article className="divider"/>
					</section>
 
					<div>
						<img src={ConstraintsImage} alt="constraints-image" className="" />
					</div>


				</article>
			</section>

			<section className="decision flex flex-col justify-center items-center">
				<article>
					<h6 className="h6 flex items-center goal-box-1-title">
						 DECISIONS 
						<span>
							<img src={DiceImage} alt="dice-image" className="goal-box-1-image" />
						</span>
					</h6>
					<p className="t-copy decision-par">
						FirstMedtrade is an online market place connecting healthcare  providers and individuals 
						 to verified medical supplies. 
					</p>
				</article>

				<article className=" decision-content">
					<div className="decision-content-item flex">
						<h1 className="h6">Priority 1</h1>
			
						<ul className="t-copy decision-content-list">
							<li>Guest checkout </li>
							<li>Minimal home page</li>
							<li>Cleaner secondary links for navigation</li>
							<li>Improved search, filter and categories</li>
							<li>Easier registration flow</li>
							<li>Separate buyer and seller registration points</li>
							<li>Cleaner error states</li>
							<li>Error affordance for users </li>
						</ul>
					</div>

                    {/* --- second ---*/}
					<div className="decision-content-item decision-content flex">
						<h1 className="h6">Priority 2</h1>
			
						<ul className="t-copy decision-content-list">
							<li>Improved search and filter and categories </li>
							<li>Add team-mate to dashboard</li>
							<li>Send a list (improved request a quote)</li>
						</ul>
					</div>

                     {/* --- third ---*/}
					<div className="decision-content-item decision-content flex">
						<h1 className="h6">Priority 3</h1>
			
						<ul className="t-copy decision-content-list">
							<li>Personalised dashboard with easy chat access</li>
							<li>Add team-mate to dashboard</li>
							<li>Easier order tracking</li>
						</ul>
					</div>

				</article>

			</section>
 

            <section className="decision flex flex-col justify-center items-center">
				<article>
					<h6 className="h6 flex items-center goal-box-1-title">
						 VISUAL
						<span>
							<img src={PaintImage} alt="paint-image" className="goal-box-1-image" />
						</span>
					</h6>
					<p className="t-copy decision-par">
						FirstMedtrade is an online market place connecting healthcare  providers and individuals 
						 to verified medical supplies. 
					</p>
				</article>

				<article className=" decision-content">
					<div className="decision-content-item flex">
						<h1 className="h6">Priority 1</h1>
			
						<ul className="t-copy decision-content-list">
							<li>Guest checkout </li>
							<li>Minimal home page</li>
							<li>Cleaner secondary links for navigation</li>
							<li>Improved search, filter and categories</li>
							<li>Easier registration flow</li>
							<li>Separate buyer and seller registration points</li>
							<li>Cleaner error states</li>
							<li>Error affordance for users </li>
						</ul>
					</div>

                    {/* --- second ---*/}
					<div className="decision-content-item decision-content flex">
						<h1 className="h6">Priority 2</h1>
			
						<ul className="t-copy decision-content-list">
							<li>Improved search and filter and categories </li>
							<li>Add team-mate to dashboard</li>
							<li>Send a list (improved request a quote)</li>
						</ul>
					</div>

                     {/* --- third ---*/}
					<div className="decision-content-item decision-content flex">
						<h1 className="h6">Priority 3</h1>
			
						<ul className="t-copy decision-content-list">
							<li>Personalised dashboard with easy chat access</li>
							<li>Add team-mate to dashboard</li>
							<li>Easier order tracking</li>
						</ul>
					</div>

				</article>

			</section>






		</main>
	)
}