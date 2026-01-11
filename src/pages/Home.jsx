import React from 'react';

import {ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon} from '@phosphor-icons/react';

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import Button from "../components/Button/Button.jsx";

import HelloImage from '../assets/images/Greeting.svg?react';
import ProfileImage from '../assets/images/profile-image.webp'
import ShowImage from '../assets/images/showcase.png'
import CatImage from '../assets/images/cat-image.png'
import ProjectScreenshot from '../assets/images/project-screenshot.png'

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
			
			
			{/*Profile Card*/}
			<section className=' profile flex items-center justify-center mt-30'>
				<div className=' profile-card flex flex-row items-center justify-center'>
					<div className='profile-card'>
						<h2 className='profile-name'>MY DESIGN PHILOSOPHY 💡</h2>

						<div className='t-captions profile-text'>
							<p className='profile-text-p1'>At the heart of every great brand and product is a clear and cohesive identity.</p>

							<p>Whether it is a mobile app design, website design or just a branding project, I partner with clients to craft an identity that’s both meaningful and aligned with their goals, ensuring consistency and purpose across every touchpoint.</p>
						</div>

					</div>
				</div>
			</section>

             {/*project*/}
 <section className="w-full flex flex-col gap-10 py-20">

  {/* PROJECT 1 */}
  <article className="flex w-full overflow-hidden rounded-3xl bg-gray-100">
    <div className="w-1/2 bg-gradient-to-br from-orange-200 via-red-300 to-red-500 p-6">
      <img
        src={ProjectScreenshot}
        alt="Healthcare App"
        className="w-full h-full object-cover rounded-2xl shadow-xl"
      />
    </div>

    <div className="w-1/2 flex flex-col justify-center gap-4 p-10">
      <span className="w-fit rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
        UI/UX
      </span>

      <h3 className="text-2xl font-semibold text-gray-900 leading-snug">
        Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
      </h3>

      <p className="text-gray-600">
        How might we simplify the process of getting medical supplies for healthcare seekers and providers?
      </p>

      <div className="flex items-center gap-2 font-semibold text-green-600">
        View case study
        <ArrowUpRightIcon size={18} />
      </div>
    </div>
  </article>
</section>


{/*black card*/}
   <section className='black-card'>
	<div className='black-content'>
		<p> It’s not about the tool being used, but about the designer using the tool.
</p>
		<p>You’ve probably heard about the popular</p>
	</div>
   </section>
			
			{/*About*/}
			<section className="archetype flex flex-col items-start w-full">
  

  <div className="archetype-content flex flex-row items-stretch w-full">
    
    <div className="archetype-text flex flex-col justify-between">
       {/* ... content here ... */}
    </div>

    {/* Image Side: Relative lets us put the "sticker" icons on top */}
    <div className="archetype-image relative flex">
       <img src={CatImage} alt="Me" className="w-full h-full object-cover" />
    </div>

  </div>
</section>

			{/*<Projects />*/}
			{/*<Archives />*/}
			
			{/* CTA */}
		  {/*<section className="px-6 md:px-12 lg:px-20">
				CTA
			</section>
			
			<section className="px-6 md:px-12 lg:px-20">
				CTA
			</section>
			
			<section className="px-6 md:px-12 lg:px-20">
				CTA
			</section>*/}
		</main>
	);
};

export default Home;
