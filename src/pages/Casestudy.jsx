import { ArrowLeftIcon } from "@phosphor-icons/react"
import caseStudyImage from '../assets/images/case-study.png';
import markerImage from '../assets/images/marker-2.svg';


export default function CaseStudy() {
	return (
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
	)
}