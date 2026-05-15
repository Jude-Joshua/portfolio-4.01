import { ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon } from '@phosphor-icons/react';

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import Button from "../components/Button/Button.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { projects } from '../components/ProjectCard/ProjectList.jsx';
import ImageSlider from "../components/ImageSlider/ImageSlider.jsx";
import DribbbleBadge from '../components/DribbbleBadge/DribbbleBadge.jsx';

import HelloImage from '../assets/images/Greeting.svg?react';
import PhilosophyImage from '../assets/images/LightBulb.svg?react';
import Animark from '../assets/images/animark.svg?react';
import ArchetypeImage from '../assets/images/bio.svg?react';

import ProfileImage from '../assets/images/profile-image.webp'
import ShowImage from '../assets/images/showcase.png'

const BARS = 10;

const Home = () => {

    return (
        <main className={'flex flex-col items-start justify-start'}>
            <section className="hero fade-section flex flex-col justify-center items-center">
                <article className="hero-title flex flex-col items-center justify-center">
                    <div className="hero-title-role flex flex-row justify-center fade-section fade-section--delay-1 items-center">
                        <p className="t-caption text-center text-secondary">Digital designer</p>
                        <p className="t-caption text-center text-secondary">(person, noun)</p>
                    </div>
                    <h1 className="h1 text-center fade-section fade-section--delay-3">Designing digital experiences that align with
                        <span className={'hero-title-icons flex flex-row items-center justify-center'}>
                            <span className={'arrow'} data-cursor='hover'><ArrowUpRightIcon /></span>
                            <span className={'clock'} data-cursor='hover'><ClockCountdownIcon /></span>
                            <span className={'calendar'} data-cursor='hover'><CalendarDotsIcon /></span>
                        </span>roadmap goals for teams and founders.</h1>
                </article>
                <article className="hello fade-section fade-section--delay-2 flex flex-row-reverse justify-center items-center">
                    <article className="hello-showcase flex flex-col justify-center items-center" data-cursor='none' >
                        <div className="hello-showcase-image fade-section fade-section--delay-3">
                            <ImageComponent src={ShowImage} className={''} alt={'A playground design I made in 2024 to show what a digital card-holder would look like.'} />
                        </div>
                    </article>
                    <article className="hello-card flex flex-col items-start justify-start">
                        <div className={'hello-card-title flex flex-row justify-between items-center w-full'}>
                            <div className={'hello-card-title-content fade-section fade-section--delay-1 flex flex-row'}>
                                <p className="t-highlights">HELLO</p>
                                <HelloImage />
                            </div>
                            <ImageComponent src={ProfileImage} className={'hello-card-title-image fade-section fade-section--delay-1'} alt={''} />
                        </div>
                        <div className={'hello-card-content flex flex-col items-start justify-start'}>
                            <div className={'hello-card-content-text flex flex-col items-start justify-start'}>
                                <p className="t-copy">
                                    I am a digital designer with over a decade of experience collaborating with content teams and start up founders to deliver clear, scalable digital experiences.
                                </p>
                                <p className="t-copy">
                                    From product interfaces to brand and web platforms, I work closely with teams to align user needs, content strategy, and design execution in ways that support long-term growth.
                                </p>
                            </div>
                            <Button target={''} hierarchy={'tertiary'} type={'link'} link={'#projects'}>
                                <span>See featured work</span>
                                <ArrowDownIcon weight={'bold'} fontSize={'24'} />
                            </Button>
                        </div>
                    </article>
                </article>
            </section>

            {projects.length > 0 && (
                <section className="projects w-full flex flex-col" id='projects'>
                    <article className="projects-inner grid grid-cols-3 justify-start items-start w-full">
                        {projects.slice(0, 3).map((project, index) => {
                            const themes = ['blue', 'beige', 'green'];
                            const delayClass = `fade-section fade-section--delay-${(index % 3) + 1}`;

                            return (
                                <ProjectCard
                                    variant="playful"
                                    theme={themes[index % themes.length]}
                                    project={project}
                                    className={`fade-section ${delayClass}`}
                                />
                            );
                        })}
                    </article>
                </section>
            )}

            <section className="philosophy flex flex-col items-center justify-center">
                <article className="philosophy-title flex flex-row items-start justify-start">
                    <div className="philosophy-title-card fade-section fade-section--delay-1 flex flex-col items-start justify-start">
                        <div className="philosophy-title-card-glass flex flex-row items-center justify-center">
                            <Animark />
                            <div className="philosophy-title-card-glass-rect flex flex-row items-center justify-center">
                                {Array.from({ length: BARS }).map((_, i) => (
                                    <div key={i} className="philosophy-title-card-glass-rect-bar" />
                                ))}
                            </div>
                        </div>
                        <div className="philosophy-title-card-content flex flex-col items-start justify-start">
                            <div className={'philosophy-title-card-content-title flex flex-row'}>
                                <p className="t-highlights">MY PHILOSOPHY</p>
                                <PhilosophyImage />
                            </div>
                            <p className="h2">At the heart of every great brand and product is a clear and cohesive identity.</p>
                        </div>
                    </div>
                    <DribbbleBadge />
                </article>
                <article className="philosophy-description flex flex-row items-start justify-start">
                    <div className='philosophy-description-image fade-section fade-section--delay-1' />
                    <div className='philosophy-description-block fade-section fade-section--delay-3'>
                        <p className="t-copy">I believe good design is intentional: shaped by purpose, aligned with real goals, and consistent across every touchpoint. Whether working on product, web, or brand-led experiences, my focus is always on creating work that feels meaningful, usable, and grounded in clarity.</p>
                    </div>
                </article>
                <article className="philosophy-archetype fade-section fade-section--delay-1 flex flex-col items-center justify-center text-center">
                    <ArchetypeImage className="philosophy-archetype-background fade-section fade-section--delay-2" />
                    <div className='philosophy-archetype-box flex flex-col items-center justify-center text-center fade-section fade-section--delay-3'>
                        <p className="t-highlights fade-section fade-section--delay-1">My brand archetypes would be…</p>
                        <h2 className="h2 fade-section fade-section--delay-3">Sometimes, a <span className="philosophy-archetype-box-highlights">Rebel</span>. Often, an <span className="philosophy-archetype-box-highlights">Explorer</span>. But always a <span className="philosophy-archetype-box-highlights">Caregiver</span>.
                        </h2>
                    </div>
                </article>
                <article className="archetype-body flex flex-col items-start justify-start w-full">
                    <div className="archetype-body-info grid grid-cols-8 justify-start items-start">
                        <div className="archetype-body-info-left fade-section fade-section--delay-1 col-span-5 flex flex-col items-start justify-start">
                            <div className="archetype-body-info-left-paragraphs flex flex-col items-start justify-start">
                                <p className="t-copy">
                                    I’ve always been drawn to understanding how things work. Not just how they look, but how they come together, how they’re used, and what makes them effective. That instinct has shaped how I approach design, branding, and product work.
                                </p>
                                <p className="t-copy">
                                    Whether I’m building digital products, shaping brand systems, or working through an idea visually, I seek to explore different directions until something feels clear and intentional. The goal is not just to make things look good, but to make them make sense.
                                </p>
                                <p className="t-copy">
                                    What drives my work is the thinking behind it. I’m interested in how things work, why people use them, and how small decisions shape everyday experiences.
                                </p>
                            </div>
                            <Button target={''} hierarchy={'tertiary'} type={'link'} link={'about'}>
                                <span>Read my brand story</span>
                                <ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
                            </Button>
                        </div>
                        <div className="archetype-body-info-right fade-section fade-section--delay-3 col-span-3 flex flex-col items-start justify-start">
                            <ImageSlider />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Home;

