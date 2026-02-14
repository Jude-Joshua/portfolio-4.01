
import React from 'react';
import {ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon,BookOpenTextIcon, FilmSlateIcon, CameraIcon, SneakerMoveIcon, PawPrintIcon, MicrophoneStageIcon, RainbowCloudIcon,AsteriskIcon, EnvelopeOpenIcon, ArrowRightIcon, LineVerticalIcon, DotIcon, MinusIcon } from '@phosphor-icons/react';
import { useState } from "react";



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
							<div className="archetype-body-info-left-label flex flex-col items-start justify-start">
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
							</div>
						</div>
						<div className="archetype-body-info-right col-span-3 flex flex-col items-start justify-start">
							<div className='archetype-body-info-right-img'>
								<ImageComponent src={CatImage} className={''} alt={''} />
							</div>

							<div className="archetype-body-info-right-navigation flex items-center justify-between ">
								<span className="archetype-body-info-right-navigation-icon active"><PawPrintIcon weight={'regular'} size={32} /></span>
								<span className="archetype-body-info-right-navigation-icon"><CameraIcon weight={'regular'} size={32} /></span>
								<span className="archetype-body-info-right-navigation-icon"><SneakerMoveIcon weight={'regular'} size={32} /></span>
								<span className="archetype-body-info-right-navigation-icon"><RainbowCloudIcon weight={'regular'} size={32} /></span>
								<span className="archetype-body-info-right-navigation-icon"><MicrophoneStageIcon weight={'regular'}size={32} /></span>
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



            <section className="work">
                {/* Header */}
                <div className="work-header">
                    <h2 className="work-header-title h3">
                        Recent Work
                    </h2>
                    <p className="work-header-subtitle t-copy-small">
                        Branding and Website design projects from 2024 till date.
                    </p>
                </div>

                {/* Project List */}
                <div className="work-list">

                    {/* Item */}
                    <div className="work-item flex items-center justify-between group">
                        <div className="work-item-info">
                            <h3 className="work-header-title h6">
                                Project Name
                            </h3>
                            <p className="work-header-subtitle t-copy-small leading-relaxed">
                                Designing a unified B2B and B2C web app for healthcare providers and
                                seekers in need of a streamlined access to online medical supplies.
                            </p>
                        </div>

                        <span className="work-item-link t-copy-small child">
                            <ArrowRightIcon weight='regular' size={32} />
                        </span>
                    </div>

                    {/* Repeat */}

                    <div className="work-item flex items-center justify-between ">
                        <div className="work-item-info">
                            <h3 className="work-header-title h6">
                                Project Name
                            </h3>
                            <p className="work-header-subtitle t-copy-small leading-relaxed">
                                Designing a unified B2B and B2C web app for healthcare providers and
                                seekers in need of a streamlined access to online medical supplies.
                            </p>
                        </div>
                        <span className="work-item-link t-copy-small ">
                            <ArrowRightIcon weight='regular' size={32} />
                        </span>
                    </div>

                    <div className="work-item flex items-center justify-between ">
                        <div className="work-item-info">
                            <h3 className="work-header-title h6">
                                Project Name
                            </h3>
                            <p className="work-header-subtitle t-copy-small leading-relaxed">
                                Designing a unified B2B and B2C web app for healthcare providers and
                                seekers in need of a streamlined access to online medical supplies.
                            </p>
                        </div>
                        <span className="work-item-link t-copy-small">
                            <ArrowRightIcon weight='regular' size={32} />
                        </span>
                    </div>

                    <div className="work-item flex items-center justify-between ">
                        <div className="work-item-info">
                            <h3 className="work-header-title h6">
                                Project Name
                            </h3>
                            <p className="work-header-subtitle t-copy-small leading-relaxed">
                                Designing a unified B2B and B2C web app for healthcare providers and
                                seekers in need of a streamlined access to online medical supplies.
                            </p>
                        </div>
                        <span className="work-item-link t-copy-small ">
                            <ArrowRightIcon weight='regular' size={32} />
                        </span>
                    </div>

                </div>
            </section>


            <section className="archieve">
                {/* Section Title */}
                <h2 className="archieve-title h5">
                    Work Archives.
                </h2>

                {/* Top Cards */}
                <div className="grid grid-cols-2 archieve-top-card">
                    {/* Card */}
                    <div className="archieve-card relative flex items-end">
                        <p className="archieve-card-text t-copy-small ">
                            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="archieve-card relative flex items-end">
                        <p className="archieve-card-text t-copy-small ">
                            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
                        </p>
                    </div>
                </div>

                {/* Archive List */}
                <div className="archieve-list">
                    {/* Archive Item */}
                    <div className="archieve-list-item flex items-start justify-between">
                        <h3 className="h6 archieve-list-subitem">
                            Project Name
                        </h3>

                        <p className="archieve-list-subitem-par">
                            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
                        </p>

                        <span className="t-copy">
                            <ArrowRightIcon weight='regular' size={24} />
                        </span>
                    </div>

                    {/* Item */}
                    <div className="archieve-list-item flex items-start justify-between">
                        <h3 className="h6 archieve-list-subitem">
                            Project Name
                        </h3>

                        <p className="archieve-list-subitem-par">
                            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
                        </p>

                        <span className="t-copy">
                            <ArrowRightIcon weight='regular' size={24} />
                        </span>
                    </div>
                </div>
            </section>


            {/*footer section*/}
            <section className="footer">
            <div className="footer-section">
                 {/* Green Header Strip */}
             <div className="footer-start flex justify-center ">
                 {/* Decorative Icon */}
                 <div className="footer-start-icon flex items-center justify-center">
              <AsteriskIcon  weight='bold' size={42} />
              </div>
              <h2 className="footer-start-decor h1 tracking-wide">
                            LET'S BUILD SOMETHING
             </h2>
            </div>

                    {/* Content Grid */}
                    <div className="footer-content grid grid-cols-2">
                        {/*Text*/}
                        <p className="footer-content-par t-copy leading-tight">
                            Get exposed the right way. While AI calls it "no fluff", I call it
                            "brilliance". Identity is critical for your product (or you),
                            and you don't want to miss out by going for something mediocre.
                        </p>

                        {/*links*/}
                        <div className="footer-links t-copy">
                            <a
                                href="#"
                                className="footer-links-anchor flex items-center justify-between "
                            >
                                Talk Project Collaborations
                                <span>
                                    <ArrowUpRightIcon weight='regular' size={24} />
                                </span>
                            </a>

                            <a
                                href="#"
                                className="footer-links-anchor flex items-center justify-between"
                            >
                                Discuss Mentorship
                                <span>
                                    <ArrowUpRightIcon weight='regular' size={24} />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/*Ending*/}
                    <div className="footer-end t-copy-small flex flex-row items-center justify-between">
                        <span>© Jude Joshua, 2025. All rights reserved.</span>

                        <div className="footer-end-ref flex">
                            <a href="#" className="t-copy-small">LinkedIn</a>
                            <span>
                                <LineVerticalIcon weight='regular' size={16} />
                            </span>
                            <a href="#" className="t-copy-small">X</a>
                            <span>
                                <LineVerticalIcon weight='regular' size={16} />
                            </span>
                            <a href="#" className="t-copy-smalls">Instagram</a>
                        </div>
                    </div>
                  </div>
            </section>

            <section className="cta relative flex flex-col items-center justify-center text-center ">
  
                    {/* Main Heading */}
              <h1 className="cta-main h5 tracking-tight leading-tight">
                 Add me to your <br />
                 Dream Team 
               <span className="cta-main-span h5 relative inline-block">
                  Shortlist*
              {/* Underline effect */}
             </span>
             </h1>

                     {/* Subtext */}
                <p className="cta-subtext t-button">
                   If your team needs a thoughtful builder who values <br />
                   time like they do ideas, we might click.
                </p>

                {/* Call-to-Action Button */}
              <button className="cta-button t-copy flex items-center justify-center">
                     Send a note
                     <div className="cta-button-effect flex items-center justify-center">
                 <span className="flex items-center justify-center ">
                      {/* Envelope Icon */}
                <EnvelopeOpenIcon weight='regular' size={25} />
                </span>
                </div>
              </button>

                                               {/* Footer */}
                          <footer className="cta-last absolute ">
                             <div className="cta-last-link flex flex-wrap items-center justify-center t-copy">
                                <a href="#" >LinkedIn</a>
                                  <span>
                                    <DotIcon weight='regular' size={8} />
                                  </span>
                                <a href="#">X</a>
                                  <span>
                                    <DotIcon weight='regular' size={8} />
                                  </span>
                                <a href="#">Instagram</a>
                                  <span>
                                    <DotIcon weight='regular' size={8} />
                                  </span>
                                <a href="#">YouTube</a>
                                  <span>
                                    <MinusIcon weight='regular' size={8} />
                                  </span>
                                  <span>© Jude Joshua, 2025. All rights reserved.</span>
                              </div>
                          </footer>

   </section>

</main>
    );
};

export default Home;

