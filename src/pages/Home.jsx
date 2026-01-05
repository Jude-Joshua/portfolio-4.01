import React from 'react';

import {ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon} from '@phosphor-icons/react';

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import Button from "../components/Button/Button.jsx";

import HelloImage from '../assets/images/Greeting.svg?react';
import ProfileImage from '../assets/images/profile-image.webp'
import ShowImage from '../assets/images/showcase.png'

// import About from './About';
// import Projects from './Projects';
// import Archives from './Archives';


const Home = () => {
	return (
		<main className={'flex flex-col items-start justify-start'}>
			
			<section className="hero flex flex-col justify-center items-center">
				<article className="hero-title flex flex-col items-center justify-center">
					<div className="hero-title-role flex flex-row justify-center align-center">
						<p className="t-caption text-center text-secondary">Digital designer</p>
						<p className="t-caption text-center text-secondary">(person, noun)</p>
					</div>
					<h1 className="h1 text-center">Designing digital experiences that align with
						<span className={'hero-title-icons flex flex-row items-center justify-center'}>
							<span className={'arrow'}><ArrowUpRightIcon/></span>
							<span className={'clock'}><ClockCountdownIcon/></span>
							<span className={'calendar'}><CalendarDotsIcon/></span>
						</span>roadmap goals for teams and founders.</h1>
				</article>
			</section>
			
			<section className="hello flex flex-row justify-center items-center">
				<article className="hello-card flex flex-col items start justify-start">
					<div className={'hello-card-title flex flex-row justify-between items-center w-full'}>
						<div className={'hello-card-title-content flex flex-row'}>
							<p className="t-highlights">HELLO</p>
							<HelloImage/>
						</div>
						<ImageComponent src={ProfileImage} className={'hello-card-title-image'} alt={''}/>
					</div>
					<div className={'hello-card-content flex flex-col items-start justify-start'}>
						<div className={'hello-card-content-text flex flex-col items-start justify-start'}>
							<p className="t-copy">
								I am a digital designer and design educator with over a decade's worth of experience in the design industry.
							</p>
							<p className="t-copy">
								Till date, I have helped startup founders and creative business owners ship by delivering work across brand, product, and content experiences that aligns with their roadmap goals and target audiences.
							</p>
						</div>
						<Button hierarchy={'tertiary'} type={'link'} link={'#experience'}>
							<span>Learn about my process</span>
							<ArrowDownIcon weight={'bold'} fontSize={'24'}/>
						</Button>
					</div>
				</article>
				
				<article className="hello-showcase flex flex-col justify-center items-center">
					<ImageComponent src={ShowImage} className={''} alt={''}/>
				</article>
			</section>
			
			{/*<section className="profile flex flex-row justify-center items-center">*/}
			{/*	<article className="w-full max-w-7xl mx-auto font-sans antialiased text-[#1a1a1a]">*/}
			{/*		*/}
			{/*		<div className="bg-[#0b0c0b] rounded-[2.5rem] p-8 md:p-16 mb-16">*/}
			{/*			<div className="flex items-center gap-2 mb-8">*/}
			{/*				<span className="text-[#32d74b] uppercase tracking-[0.2em] text-[10px] font-extrabold">My Design Philosophy</span>*/}
			{/*				<span className="text-xs">💡</span>*/}
			{/*			</div>*/}
			{/*			*/}
			{/*			<h2 className="text-white text-2xl md:text-[2.5rem] font-semibold leading-[1.2] mb-8 max-w-4xl">*/}
			{/*				At the heart of every great brand and product is a clear and cohesive identity.*/}
			{/*			</h2>*/}
			{/*			*/}
			{/*			<p className="text-[#a1a1a1] text-lg md:text-xl leading-relaxed max-w-3xl">*/}
			{/*				Whether it is a mobile app design, website design or just a branding project,*/}
			{/*				I partner with clients to craft an identity that's both meaningful and aligned*/}
			{/*				with their goals, ensuring consistency and purpose across every touchpoint.*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*		*/}
			{/*		<div className="flex items-center gap-2 mb-10 relative">*/}
			{/*			<h3 className="uppercase tracking-widest text-[10px] font-black text-gray-400">Selected Past*/}
			{/*				Projects</h3>*/}
			{/*			<span className="text-sm">💼</span>*/}
			{/*			<svg className="hidden md:block absolute left-44 top-4 w-12 h-12 text-[#32d74b]"*/}
			{/*			     viewBox="0 0 50 50" fill="none" stroke="currentColor">*/}
			{/*				<path d="M2,2 C10,15 25,20 35,35 M35,35 L28,34 M35,35 L34,26" stroke-width="2"*/}
			{/*				      stroke-linecap="round" stroke-linejoin="round"/>*/}
			{/*			</svg>*/}
			{/*		</div>*/}
			{/*		*/}
			{/*		*/}
			{/*		<div className="flex flex-col gap-6">*/}
			{/*			*/}
			{/*			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
			{/*				*/}
			{/*				<div*/}
			{/*					className="bg-gradient-to-br from-[#ff9e81] via-[#ff6b4e] to-[#ff3d15] rounded-[2.5rem] p-6 md:p-10 flex items-center justify-center aspect-[4/3] md:aspect-auto">*/}
			{/*					<div*/}
			{/*						className="w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 transform transition-transform hover:scale-[1.02] duration-500">*/}
			{/*						<img src="jude3.png" alt="jude Screenshot" className="w-full h-auto object-cover"/>*/}
			{/*					</div>*/}
			{/*				</div>*/}
			{/*				*/}
			{/*				<div className="bg-[#f2f4f2] rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-center">*/}
			{/*					<div className="mb-6">*/}
			{/*						<span*/}
			{/*							className="bg-[#ADFBAD] text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter">UI/UX</span>*/}
			{/*					</div>*/}
			{/*					*/}
			{/*					<h4 className="text-xl md:text-[1.75rem] font-bold leading-tight mb-4 text-[#111]">*/}
			{/*						Designing a unified B2B and B2C web app for healthcare providers and seekers in need*/}
			{/*						of a streamlined access to online medical supplies.*/}
			{/*					</h4>*/}
			{/*					*/}
			{/*					<p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed font-medium">*/}
			{/*						How might we simplify the process of getting medical supplies for healthcare seekers*/}
			{/*						and providers?*/}
			{/*					</p>*/}
			{/*					*/}
			{/*					<a href="#"*/}
			{/*					   className="flex items-center gap-2 text-sm font-bold text-[#1d9a6c] group w-fit">*/}
			{/*						View case study*/}
			{/*						<span className="transition-transform group-hover:translate-x-1">→</span>*/}
			{/*					</a>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</article>*/}
			{/*</section>*/}
			
			{/*<Profile />*/}
			{/*<About />*/}
			{/*<Projects />*/}
			{/*<Archives />*/}
			
			{/* CTA */}
			<section className="px-6 md:px-12 lg:px-20">
				CTA
			</section>
			
			<section className="px-6 md:px-12 lg:px-20">
				CTA
			</section>
			
			<section className="px-6 md:px-12 lg:px-20">
				CTA
			</section>
		</main>
	);
};

export default Home;
