<<<<<<< HEAD
import {ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon, BookOpenIcon} from '@phosphor-icons/react';
import { CameraIcon,SneakerMoveIcon,PaletteIcon,BracketsAngleIcon, PawPrintIcon } from '@phosphor-icons/react';
import { FilmSlateIcon, BookOpenTextIcon, LineVerticalIcon } from '@phosphor-icons/react';
=======
import { useState } from "react";

import { ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon, BookOpenTextIcon, FilmSlateIcon } from '@phosphor-icons/react';
import { CameraIcon, SneakerMoveIcon, PaletteIcon, BracketsAngleIcon, PawPrintIcon } from '@phosphor-icons/react';
>>>>>>> 86354705fd5a33e0d2059e5e19d50dff2ca76dc1

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import Button from "../components/Button/Button.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import Tooltip from "../components/Tooltip/Tooltip.jsx";

import HelloImage from '../assets/images/Greeting.svg?react';
import Bulb from '../assets/images/bulb.svg?react';
import Animark from '../assets/images/animark.svg?react';
import BriefCase from '../assets/images/briefcase.svg?react';
import ProjectsDown from '../assets/images/projects-down.svg?react';
import CatImage from '../assets/images/cat-image.png';

import ProfileImage from '../assets/images/profile-image.webp'
import ShowImage from '../assets/images/showcase.png'

const BARS = 10;

const Home = () => {

	const [tooltip, setTooltip] = useState({
		visible: false,
		x: 0,
		y: 0,
	});

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();

		setTooltip({
			visible: true,
			x: e.clientX - rect.left - 0,
			y: e.clientY - rect.top - 120,
		});
	};

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
							<span className={'arrow'} data-cursor='hover'><ArrowUpRightIcon /></span>
							<span className={'clock'} data-cursor='hover'><ClockCountdownIcon /></span>
							<span className={'calendar'} data-cursor='hover'><CalendarDotsIcon /></span>
						</span>roadmap goals for teams and founders.</h1>
				</article>
			</section>

			<section className="hello flex flex-row-reverse justify-center items-center">
				<article
					className="hello-showcase flex flex-col justify-center items-center"
					data-cursor='none'
					onMouseEnter={handleMouseMove}
					onMouseMove={handleMouseMove}
					onMouseLeave={() =>
						setTooltip((prev) => ({ ...prev, visible: false }))
					}
				>
					<div className="hello-showcase-image">
						<ImageComponent src={ShowImage} className={''} alt={'A playground design I made in 2024 to show what a digital card-holder would look like.'} />
					</div>
					<Tooltip
						x={tooltip.x}
						y={tooltip.y}
						visible={tooltip.visible}
						content={'A playground design I made in 2024 to show what digital card-holder would look like.'}
					/>
				</article>
				<article className="hello-card flex flex-col items-start justify-start">
					<div className={'hello-card-title flex flex-row justify-between items-center w-full'}>
						<div className={'hello-card-title-content flex flex-row'}>
							<p className="t-highlights">HELLO</p>
							<HelloImage />
						</div>
						<ImageComponent src={ProfileImage} className={'hello-card-title-image'} alt={''} />
					</div>
					<div className={'hello-card-content flex flex-col items-start justify-start'}>
						<div className={'hello-card-content-text flex flex-col items-start justify-start'}>
							<p className="t-copy">
								I am a digital designer with over a decade of experience collaboarting with content and design teams, and start up founders,
								to deliver clear, scalable, digital experiences.
							</p>
							<p className="t-copy">
								From product interfaces to brand and web platforms, I work closely with teams to connect user needs, content strategy, and design execution
								in ways that support long-term growth.
							</p>
						</div>
						<Button hierarchy={'tertiary'} type={'link'} link={'#process'}>
							<span>Learn about my process</span>
							<ArrowDownIcon weight={'bold'} fontSize={'24'} />
						</Button>
					</div>
				</article>
			</section>

			<section className="philosophy flex items-center justify-center">
				<article className='philosophy-card overflow-hidden flex flex-row items-center justify-center'>
					<div className="philosophy-card-glass flex flex-row items-center justify-center">
						<Animark />
						<div className="philosophy-card-glass-rect flex flex-row items-center justify-center">
							{Array.from({ length: BARS }).map((_, i) => (
								<div key={i} className="philosophy-card-glass-rect-bar" />
							))}
						</div>
					</div>

					<div className="philosophy-card-data flex flex-col items-start justify-start">
						<div className="philosophy-card-data-title flex flex-row items-center justify-start">
							<h2 className='t-highlights'>MY DESIGN PHILOSOPHY</h2>
							<span><Bulb /></span>
						</div>

						<div className="philosophy-card-data-text flex flex-col items-start justify-start">
							<p className="h3">At the heart of every great brand and product is a clear and cohesive identity.</p>
							<p className="h3">I believe good design is intentional: shaped by purpose, aligned with real goals, and consistent across every touchpoint. Whether working on product, web, or brand-led experiences, my focus is always on creating work that feels meaningful, usable, and grounded in clarity.</p>
						</div>
					</div>
				</article>
			</section>

			<section className="projects w-full flex flex-col">
				<article className="projects-inner flex flex-col items-center w-full">
					<div className={'projects-inner-title flex flex-row justify-start items-start w-full'}>
						<p className="t-highlights">SELECTED PAST PROJECTS</p>
						<BriefCase />
						<div className={'projects-inner-title-down flex flex-row'}>
							<ProjectsDown />
						</div>
					</div>
					<ProjectCard />
				</article>
			</section>

			<section className='black' id='process'>
				<article className='black-box'>
					<div className='black-text'>
						<p className='h6 black-text-1 tracking-wide'>It's not about the tool being <br /> used, It's about the designer <br /> using the tool.</p>

						<p className='black-text-2'>You have probably heard of the popular</p>
					</div>
				</article>
			</section>

			<section className="archetype flex flex-col items-start justify-start">
				<article className="archetype-title flex flex-col items-start justify-start">
					<p className="t-highlights">
						My brand archetype would be…
					</p>
					<h2 className="h2">
						Sometimes, a <span className="archetype-title-highlights">Rebel</span>, often, an <span className="archetype-title-highlights">Explorer</span>, but always a <span className="archetype-title-highlights">Caregiver</span>.
					</h2>
				</article>

				{/*  grid */}
				<article className="archetype-body flex flex-col items-start justify-start w-full">
					<div className="archetype-body-info grid grid-cols-7 justify-start items-start">
						<div className="archetype-body-info-left col-span-4 flex flex-col items-start justify-start">
							<div className="archetype-body-info-left-paragraphs flex flex-col items-start justify-start">
								<p className="t-copy">
									I enjoy finding new ways to make stuff work. This has always been my MO for my career, school and life in general.
								</p>
								<p className="t-copy">
									Whether it’s figuring out how to design digital products and brands that meets user needs, playing with photography, or figuring out how to fix a broken gadget at home; I like to explore different approaches until I find one that works.
								</p>
								<p className="t-copy">
									I’m interested in figuring how things work, why people use them, and how small decisions shape everyday experiences.
								</p>
							</div>
							{/* <div className="archetype-body-info-left-label flex flex-col items-start justify-start">
								<p className="t-highlights">I LOVE…</p>
								<div className="archetype-body-info-left-label-list flex flex-row flex-wrap items-start justify-start">
									{[
										"Books",
										"Photography",
										"Poetry",
										"Art",
										"Music",
										"Nature",
										"Mentoring",
										"Black & White",
									].map((item) => (
										<span
											key={item}
											className="archetype-body-info-left-label-list-item t-copy-small"
										>
											{item}
										</span>
									))}
								</div>
							</div> */}
						</div>
						<div className="archetype-body-info-right col-span-3 flex flex-col items-start justify-start">
							<div className='archetype-body-info-right-img'>
								<ImageComponent src={CatImage} className={''} alt={''} />
							</div>


							{/* Floating actions */}
							<div className=" archetype-float flex items-center justify-between ">

								<div className=" archetype-float-paw flex items-center justify-center">
									<PawPrintIcon size={24} />
								</div>

<<<<<<< HEAD
          <h4 className=" archetype-left-card-love-h4 t-highlights ">I LOVE…</h4> <br />

          <div className="flex flex-wrap gap-3">
            {[
              "Books",
              "Black & White",
              "Photography",
              "Art",
              "Nature",
              "Mentoring",
              "Music",
              "Poetry",
            ].map((item) => (
              <span
                key={item}
                className="archetype-left-card-love "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right image card */}
        <div className=" archetype-right-card">
          <div className='archetype-right-card-img'>
            <ImageComponent src={CatImage} className={'archetype-img'} alt={''}/>

            {/* Floating actions */}
           <div className=" archetype-float flex items-center justify-between ">
    
        <div className=" archetype-float-paw flex items-center justify-center">
          <PawPrintIcon size={24} />
    </div>

    <div className=" archetype-float-camera flex flex-1 justify-around">
      <button><CameraIcon size={24} /></button>
      <button><SneakerMoveIcon size={24} /></button>
      <button><PaletteIcon size={24} /></button>
      <button><BracketsAngleIcon size={24} /></button>
    </div>
    </div>
    </div>
          </div>
          

          
      </div>
         
      
      {/* Footer */}
      <div className="archetype-footer flex  justify-evenly  ">
        <div className='archetype-footer-div flex justify-between'> 
        <div className=" flex items-center gap-1">
          <p><span className="t-buttons">Currently watching…</span></p>
          <div  className='archetype-footer-phor'>
            <FilmSlateIcon  size={24} weight='bold'/>
          </div>

         <p><a  
            href="#"
            className=" archetype-footer-link t-buttons flex items-center gap-1"
          >
            Stranger Things S05 ↗
          </a></p>
          
        </div>

  {/* divider */}
        <div>
          <LineVerticalIcon size={40}  className='archetype-footer-divider'/>
        </div>
          
          <span className="t-buttons">Currently reading…</span>
           <div className="flex items-center gap-1">
           <div className='archetype-footer-phor'>
            <BookOpenIcon   size={24} weight='bold'/>
            </div>
          <a
            href="#"
            className="archetype-footer-link t-buttons  flex items-center gap-1"
          >
            When Sorry Isn't Enough ↗
          </a>
         
        </div>
        </div>
      </div>
    </section>
=======
								<div className=" archetype-float-camera flex flex-1 justify-around">
									<button><CameraIcon size={24} /></button>
									<button><SneakerMoveIcon size={24} /></button>
									<button><PaletteIcon size={24} /></button>
									<button><BracketsAngleIcon size={24} /></button>
								</div>
							</div>
						</div>
					</div>
					<div className="archetype-body-footer flex flex-row items-start justify-center w-full">
						<div className="archetype-body-footer-card flex flex-col items-center">
							<p className="t-highlights">Currently watching…</p>
							<Button hierarchy={'tertiary'} type={'link'} link={''}>
								<FilmSlateIcon weight={'bold'} fontSize={'24'} />
								<span>Stranger Things S05</span>
								<ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
							</Button>
						</div>
						<div className="divider vertical"/>
						<div className="archetype-body-footer-card flex flex-col items-center">
							<p className="t-highlights">Currently reading…</p>
							<Button hierarchy={'tertiary'} type={'link'} link={''}>
								<BookOpenTextIcon weight={'bold'} fontSize={'24'} />
								<span>When Sorry Isn't Enough</span>
								<ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
							</Button>
						</div>
					</div>
				</article>
			</section>
>>>>>>> 86354705fd5a33e0d2059e5e19d50dff2ca76dc1
		</main>
	);
};

export default Home;