import { ArrowLeftIcon, X } from "@phosphor-icons/react"
import caseStudyImage from '../assets/images/case-study.png';
import markerImage from '../assets/images/marker-2.svg';
import pageIcon from '../assets/images/page-icon.png';
import imageOkafor from '../assets/images/Okafor.png';
import imageSarah from '../assets/images/Sarah.png';
import crossImage from '../assets/images/wrong.png';
import diagramImage from '../assets/images/diagram.png'


export default function CaseStudy() {
	return (
		<>
			<section className="flex flex-col items-center justify-center">
				<article className="w-full max-w-3xl">

					<div className="casestudy-archives flex items-center justify-center">
						<span><ArrowLeftIcon weight="bold" /></span>
						<a href="/archives">Back to Archives</a>
					</div>

					<div>
						<h2 className="casestudy-header h2 md:h1 text-center max-w-3xl">
							<span className="casestudy-header-span flex flex-col items-center inline-block">
								How might we
								<img src={markerImage} alt="Marker" className="w-80 h-6" />
							</span>
							reduce cognitive load and make ordering medical supplies feel immediate, controlled, and trustworthy?
						</h2>
					</div>

					<div className="casestudy-box items-center">
						<div className="casestudy-box-inner flex flex-col items-center ">
							<div className="casestudy-box-inner">
								<img src={caseStudyImage} alt="Case Study" className="  rounded" />
							</div>

							<div className="casestudy-grid casestudy-box-inner grid grid-cols-3 items-start justify-between">
								<div className="casestudy-border-none">
									<p className="casestudy-par t-highlights flex items-center justify-center">
										Role 💼
									</p>
									<p className="casestudy-par-1">Product Designer</p>
								</div>

								<div className="casestudy-border">
									<p className="casestudy-par t-highlights flex items-center justify-center">
										Scope 🎯
									</p>
									<p className="casestudy-par-1">
										UX strategy, UI redesign,<br />interaction design
									</p>
								</div>

								<div className="casestudy-border">
									<p className="casestudy-par t-highlights flex items-center justify-center">
										Focus 🔍
									</p>
									<p className="casestudy-par-1">
										Reduce friction in product discovery and checkout.
									</p>
								</div>

							</div>
						</div>
					</div>


				</article>
			</section>

			{/* Context section */}
			<section className="context flex flex-col items-center justify-center">
				<article className="w-full max-w-3xl">
					<div className="context flex justify-center items-center">
						<h6 className="h6">CONTEXT</h6>
						<img src={pageIcon} alt="Page Icon" className="w-6 h-6" />
					</div>

					<div className="context-header max-w-3xl text-center leading-tight">
						<h3 className="h4 font-bold">Something's Wrong.Our users are not buying from the website.</h3>
					</div>

					<div className="context-box max-w-3xl items-center">
						<div className="context-box-extra items-center-small">
							<div className="context-box-extra-par t-copy leading-tight tracking-tight">
								<p> FirstMedtrade is an online marketplace connecting healthcare providers and individuals to verified medical
									supplies. The platform offered a wide catalogue of products, but the buying experience did not match the
									urgency and precision required in healthcare procurement.<br /></p>

								<p className="context-box-extra-par-1">I was responsible for rethinking the product experience from discovery to checkout,<b> with the goal of understanding
									why users were not buying from the platform.</b>
								</p>
							</div>
						</div>
					</div>

					{/*Diagram*/}
					<div className="context-header max-w-3xl text-center leading-tight">
						<h3 className="h4 font-bold">The users pattern after monitoring the website for a month was something like this:</h3>
					</div>

					<div className="context-diagram">
						<img src={diagramImage} alt="image" />
					</div>

				</article>
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

		</>
	)
}