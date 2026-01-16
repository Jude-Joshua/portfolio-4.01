import {ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon} from '@phosphor-icons/react';

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import Button from "../components/Button/Button.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

import HelloImage from '../assets/images/Greeting.svg?react';
import Bulb from '../assets/images/bulb.svg?react';
import Animark from '../assets/images/animark.svg?react';
import BriefCase from '../assets/images/briefcase.svg?react';
import ProjectsDown from '../assets/images/projects-down.svg?react';

import ProfileImage from '../assets/images/profile-image.webp'
import ShowImage from '../assets/images/showcase.png'

const BARS = 12;

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
				<article className="hello-card flex flex-col items-start justify-start">
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
			
			<section className="philosophy flex items-center justify-center">
				<article className='philosophy-card overflow-hidden flex flex-row items-center justify-center'>
					<div className="philosophy-card-glass flex flex-row items-center justify-center">
						<Animark/>
						<div className="philosophy-card-glass-rect flex flex-row items-center justify-center">
							{Array.from({ length: BARS }).map((_, i) => (
								<div key={i} className="philosophy-card-glass-rect-bar" />
							))}
						</div>
					</div>

					<div className="philosophy-card-data flex flex-col items-start justify-start">
						<div className="philosophy-card-data-title flex flex-row items-center justify-start">
							<h2 className='t-highlights'>MY DESIGN PHILOSOPHY</h2>
							<span><Bulb/></span>
						</div>

						<div className="philosophy-card-data-text flex flex-col items-start justify-start">
							<p className="h3">At the heart of every great brand and product is a clear and cohesive identity.</p>
							<p className="h3">Whether it is a mobile app design, website design or just a branding project, I partner with clients to craft an identity that’s both meaningful and aligned with their goals, ensuring consistency and purpose across every touchpoint.</p>
						</div>
					</div>
				</article>
			</section>

			<section className="projects w-full flex flex-col">
				<article className="projects-inner flex flex-col items-center w-full">
					<div className={'projects-inner-title flex flex-row justify-start items-start w-full'}>
						<p className="t-highlights">SELECTED PAST PROJECTS</p>
						<BriefCase/>
						<div className={'projects-inner-title-down flex flex-row'}>
							<ProjectsDown/>
						</div>
					</div>
					<ProjectCard/>
				</article>
			</section>
		</main>
	);
};

export default Home;
