import { ArrowLeftIcon } from "@phosphor-icons/react"
import caseStudyImage from '../assets/images/case-study.png';
import markerImage from '../assets/images/marker-2.svg';
import pageIcon from '../assets/images/page-icon.png';
import imageOkafor from '../assets/images/Okafor.png';
import imageSarah from '../assets/images/Sarah.png';
import crossIcon from '../assets/images/wrong.png';


export default function CaseStudy() {
	return (
    <>
      <section className="hero flex flex-col items-center justify-center">
			<div className=" w-full max-w-3xl">

				<div className="flex items-center text-emerald-600 font-bold !m-[40px] justify-center">
					<span><ArrowLeftIcon weight="bold" /></span>
					<a href="/archives">Back to Archives</a>
				</div>

				<div>
					<h2 className="text-3xl md:text-5xl font-bold text-black-500 text-center max-w-3xl mx-auto leading-tight">
						<span className="text-emerald-600 flex flex-col items-center inline-block !mr-3">
							How might we
							<img src={markerImage} alt="Marker" className="w-80 h-6" />
						</span>
						reduce cognitive load and make ordering medical supplies feel immediate, controlled, and trustworthy?
					</h2>
				</div>

				<div className="!mt-16 bg-slate-100 rounded-sm items-center">
					<div className="flex flex-col gap-2  items-center mx-auto !py-2">
						<div className="w-[98%]">
							<img src={caseStudyImage} alt="Case Study" className="  rounded" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 !px-12 !py-8 rounded-sm h-full bg-white w-[98%] items-center justify-center">
							<div className="border-l md:border-l-0 md:border-r border-slate-200 pl-6 md:pl-0">
								<p className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-2 flex items-center">
									Role 💼
								</p>
								<p className="text-slate-600 text-sm">Product Designer</p>
							</div>

							<div className="border-l md:border-l-0 md:border-r border-slate-200 pl-6 md:pl-0">
								<p className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-2 flex items-center">
									Scope 🎯
								</p>
								<p className="text-slate-600 text-sm leading-relaxed">
									UX strategy, UI redesign,<br />interaction design
								</p>
							</div>

							<div className=" border-slate-200 pl-6">
								<p className="text-xs font-bold uppercase tracking-widest text-slate-800 mb-2 flex items-center">
									Focus 🔍
								</p>
								<p className="text-slate-600 text-sm leading-relaxed">
									Reduce friction in product discovery and checkout.
								</p>
							</div>

						</div>
					</div>
				</div>


			</div>
		</section>

    {/* Context section */}
  <section className="context flex flex-col items-center justify-center">
	<div className="w-full max-w-3xl">
    <div className="context flex items-center gap-2">
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
			 urgency and precision required in healthcare procurement.<br/></p>

             <p className="context-box-extra-par-1">I was responsible for rethinking the product experience from discovery to checkout,<b> with the goal of understanding 
             why users were not buying from the platform.</b>
			 </p>
		 </div>
      </div>
    </div>

	<div className="context-header max-w-3xl text-center leading-tight">
      <h3 className="h4 font-bold">The users pattern after monitoring the website for a month was something like this:</h3>
    </div>

	<div className="flow">
        <div className="flow-row flex items-center justify-center">
			<div className="flow-container flow-container-start text-center ">
				<h6 className="h6">Start</h6>
				<p className="">User visits firstmedtrade.com</p>
			</div>

			<div className="flow-arrow"></div>

			<div className="flow-container flow-container-search text-center">
               <h6 className="h6">Search</h6>
			   <p className="tracking-wide">User searches for products using search bar.</p>
			</div>

			<div className="flow-arrow"></div>

			<div className="flow-container flow-container-screenshot text-center">
				<h6 className="h6">Screenshot</h6>
				<p className="">User finds product and takes a screenshot.</p>
			</div>
			</div>

			{/*bottom row*/}
			<div className="flow flow-bottom flex justify-between">
				<div className="flow-container flow-container-result text-center">
					<h6 className="h6">Result</h6>
					<p className="">Support is overwhelmed and unable to keep up with the messages from multiple users.</p>
				</div>

				<div className="vertical-line"></div>

				<div className="flow-container flow-container-drop text-center">
					<h6 className="h6">Dropoff</h6>
					<p>User takes screenshot to WhatsApp to check product availability and details.</p>
				</div>
			</div>

			
	</div>

  </div>
  </section>

  {/*Tension section*/}
  <section className="flex flex-col justify-center items-center">
	<div className="w-full max-w-3xl">
		<div className="context flex items-center gap-2">
      <h6 className="h6">TENSION</h6>
      <img src={crossIcon} alt="Page Icon" className="w-6 h-6" />
    </div>

	<div className="context-header max-w-3xl text-center leading-tight">
      <h3 className="h4 font-bold">Buyers operate under pressure.They do not browse casually.
		They browse with intent.
	  </h3>
    </div>

	<div>
		<img src={imageOkafor} alt="" />
		<img src={imageSarah} alt="" />
	</div>


	</div>
  </section>

  </>
	)
}