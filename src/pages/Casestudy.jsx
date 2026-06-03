import { ArrowLeftIcon, X } from "@phosphor-icons/react";

import Button from "../components/Button/Button.jsx";
import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import HmwMarker from '../assets/images/hmw-marker.svg?react';
import RoleIconEm from '../assets/images/role.svg?react';
import ScopeIconEm from '../assets/images/scope.svg?react';
import FocusIconEm from '../assets/images/focus.svg?react';
import ContextIconEm from '../assets/images/context.svg?react';
import TensionIconEm from '../assets/images/tension.svg?react';


export default function CaseStudy({ project }) {
	const detail = project.detail;

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
						{project.title}
					</h2>
				</article>
				<article className="hero-info items-center flex flex-col items-start justify-center">
                        <div className="hero-info-cover">
                        	<ImageComponent src={detail.heroImage} alt={"Case Study hero image"} />
                    	</div>

					<div className="hero-info-inner flex items-start justify-between">
						<div className="hero-info-inner-section flex items-start flex-col justify-start">
							<div className="hero-info-inner-section-highlights flex flex-row justify-center items-center">
								<p className="t-highlights">Role</p> <RoleIconEm />
							</div>
							<p className="t-copy-small">{detail.role}</p>
						</div>
						<div className="divider vertical" />
						<div className="hero-info-inner-section flex items-start flex-col justify-start">
							<div className="hero-info-inner-section-highlights flex flex-row justify-center items-center">
								<p className="t-highlights">Scope</p> <ScopeIconEm />
							</div>
							<p className="t-copy-small">
								{detail.scope}
							</p>
						</div>
						<div className="divider vertical" />
						<div className="hero-info-inner-section flex items-start flex-col justify-start">
							<div className="hero-info-inner-section-highlights flex flex-row justify-center items-center">
								<p className="t-highlights">Focus</p> <FocusIconEm />
							</div>
							<p className="t-copy-small">
								{detail.focus}
							</p>
						</div>

					</div>
				</article>
			</section>

			<section className="context flex flex-col casestudy-section items-center justify-center">
				<article className="context-title casestudy-section-title flex flex-col items-center justify-center text-center">
					<p className="t-highlights flex flex-row justify-center items-center">CONTEXT <ContextIconEm /> </p>
					<h3 className="h3">{detail.contextTitle}</h3>
				</article>

				<article className="context-info casestudy-section-info flex flex-col items-center justify-center">
					<div className="context-info-inner flex flex-col items-start justify-start">
						{detail.contextParagraphs.map((paragraph, index) => (
							<p key={index} className="t-copy">{paragraph}</p>
						))}
					</div>
				</article>
			</section>

			<section className="monitor flex flex-col casestudy-section items-center justify-center">
				<article className="monitor-title casestudy-section-title flex flex-col items-center justify-center text-center">
					<h3 className="h3">{detail.monitorTitle}</h3>
				</article>

				<article className="monitor-info  casestudy-section-info">
					<div className="monitor-info-inner flex flex-col items-start justify-start">
								<ImageComponent src={detail.monitorImage} alt={"monitor-image"} />
					</div>
				</article>
			</section>

			<section className="">
				<article className="divider"/>
			</section>

			<section className="tension flex flex-col casestudy-section items-center justify-center">
				<article className="tension-title casestudy-section-title flex flex-col items-center justify-center text-center">
					<p className="t-highlights flex flex-row justify-center items-center">TENSION <TensionIconEm /> </p>
					<h3 className="h3">{detail.tensionTitle}</h3>
				</article>

				<article className="tension-info casestudy-section-info flex flex-col items-center justify-center">
					<div className="tension-info-inner flex items-center justify-center">
						{detail.personas.map((person) => (
							<div
								key={person.id}
								className="persona flex flex-col items-start justify-start"
							>
								<div className="persona-hero flex items-center">
									<ImageComponent
										src={`/assets/images/firstmedtrade/${person.meta.avatar}`}
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
							<img src={detail.copierImage} alt="copier-image" className="begin-title-image" />
						</span>
					</h6>

					<h5 className="h5">{detail.begin.heading}</h5>
				</article>

				{detail.begin.problems.map((problem) => (
					<article key={problem.id} className="begin-box-1">
						<h6 className="h6 max-w-2xl">{problem.title}</h6>
						<div className="begin-box-2 justify-start">
							<img src={problem.image} alt={problem.alt} className="begin-box-2-image" />
						</div>
					</article>
				))}

			</section>


               {/*goal*/}
			<section className="goal flex flex-col justify-center items-center">
				<article className="goal-box-1 justify-center">
					<div className=" justify-start">
						<h6 className="h6 flex items-center goal-box-1-title ">THE GOAL
						<span> <img src={detail.arrowPointImage} alt="target-image" className="goal-box-1-image" /></span>
						</h6> 
					</div>

<h5 className="goal-box-1-title-header h5">{detail.goal.heading}</h5>

						<p className="goal-box-1-par-1 t-copy">
							{detail.goal.description}
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
								<img src={detail.boxImage} alt="constraints-image" className="goal-box-1-image" />
							</span>
						</h6>
					</div>

                    <section className="goal-border " >
					<article className="divider"/>
					</section>
 
					<div>
						<img src={detail.goal.constraintsImage} alt="constraints-image" className="" />
					</div>


				</article>
			</section>

			<section className="decision flex flex-col justify-center items-center">
				<article>
					<h6 className="h6 flex items-center goal-box-1-title">
						 DECISIONS 
						<span>
							<img src={detail.diceImage} alt="dice-image" className="goal-box-1-image" />
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
							<img src={detail.paintImage} alt="paint-image" className="goal-box-1-image" />
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