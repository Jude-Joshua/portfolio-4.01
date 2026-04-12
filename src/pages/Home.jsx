import { ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon, BookOpenTextIcon, FilmSlateIcon } from '@phosphor-icons/react';

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import Button from "../components/Button/Button.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import { projects } from '../components/ProjectCard/ProjectList.jsx';
import ImageSlider from "../components/ImageSlider/ImageSlider.jsx";
import DribbbleBadge from '../components/DribbbleBadge/DribbbleBadge.jsx';

import HelloImage from '../assets/images/Greeting.svg?react';
import Animark from '../assets/images/animark.svg?react';

import ProfileImage from '../assets/images/profile-image.webp'
import ShowImage from '../assets/images/showcase.png'

const BARS = 10;

const Home = () => {

    return (
        <main className={'flex flex-col items-start justify-start'}>

            <section className="hero flex flex-col justify-center items-center">
                <article className="hero-title flex flex-col items-center justify-center">
                    <div className="hero-title-role flex flex-row justify-center items-center">
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
                <article className="hello flex flex-row-reverse justify-center items-center">
                    <article
                        className="hello-showcase flex flex-col justify-center items-center"
                        data-cursor='none'
                    >
                        <div className="hello-showcase-image">
                            <ImageComponent src={ShowImage} className={''} alt={'A playground design I made in 2024 to show what a digital card-holder would look like.'} />
                        </div>
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

            <section className="projects w-full flex flex-col" id='projects'>
                <article className="projects-inner grid grid-cols-3 justify-start items-start w-full">
                    {projects.map((project, index) => {
                        const themes = ['blue', 'beige', 'green'];

                        return (
                            <ProjectCard
                                key={index}
                                variant="playful"
                                theme={themes[index % themes.length]}
                                project={project}
                            />
                        );
                    })}
                </article>
            </section>

            <section className="philosophy flex items-center justify-center">
                <article className='philosophy-card overflow-hidden flex flex-col items-center justify-start'>
                    <div className="philosophy-card-glass flex flex-row items-center justify-center">
                        <Animark />
                        <div className="philosophy-card-glass-rect flex flex-row items-center justify-center">
                            {Array.from({ length: BARS }).map((_, i) => (
                                <div key={i} className="philosophy-card-glass-rect-bar" />
                            ))}
                        </div>
                    </div>


                    <div className="philosophy-card-data flex flex-col items-start justify-start">
                        <p className="h2">At the heart of every great brand and product is a clear and cohesive identity.</p>
                        <div className="philosophy-card-data-text flex flex-row items-start justify-start">
                            <div className='philosophy-card-data-text-block'>
                                <p className="t-copy">I believe good design is intentional: shaped by purpose, aligned with real goals, and consistent across every touchpoint. Whether working on product, web, or brand-led experiences, my focus is always on creating work that feels meaningful, usable, and grounded in clarity.</p>
                            </div>
                            <DribbbleBadge />
                        </div>
                    </div>

                </article>
            </section>

            <section className="archetype flex flex-col items-start justify-start">
                <article className="archetype-title flex flex-col items-center justify-center text-center">
                    <p className="t-highlights">My brand archetype would be…</p>
                    <h2 className="h2">Sometimes, a <span className="archetype-title-highlights">Rebel</span>, often, an <span className="archetype-title-highlights">Explorer</span>, but always a <span className="archetype-title-highlights">Caregiver</span>.
                    </h2>
                </article>
                <article className="archetype-body flex flex-col items-start justify-start w-full">
                    <div className="archetype-body-info grid grid-cols-7 justify-start items-start">
                        <div className="archetype-body-info-left col-span-4 flex flex-col items-start justify-start">
                            <div className="archetype-body-info-left-paragraphs flex flex-col items-start justify-start">
                                <p className="t-copy">
                                    I enjoy finding new ways to make stuff work: Whether it's figuring out how to design digital products and brands that meets user needs, playing with photography, or figuring out how to fix a broken gadget at home; I like to explore different approaches until I find one that works.
                                </p>
                                <p className="t-copy">
                                    I'm interested in figuring how things work, why people use them, and how small decisions shape everyday experiences.
                                </p>
                            </div>
                            <Button target={''} hierarchy={'tertiary'} type={'link'} link={'about'}>
                                <span>Read my brand story</span>
                                <ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
                            </Button>
                        </div>

                        <div className="archetype-body-info-right col-span-3 flex flex-col items-start justify-start">
                            <ImageSlider />
                        </div>
                    </div>
                    <div className="archetype-body-footer flex flex-row items-start justify-center w-full">
                        <div className="archetype-body-footer-card flex flex-col items-center">
                            <p className="t-highlights">Currently watching…</p>
                            <Button target={'_blank'} hierarchy={'tertiary'} type={'link'} link={'https://www.netflix.com/ng/title/80057281'}>
                                <FilmSlateIcon weight={'bold'} fontSize={'24'} />
                                <span>Stranger Things S05</span>
                                <ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
                            </Button>
                        </div>
                        <div className="divider vertical" />
                        <div className="archetype-body-footer-card flex flex-col items-center">
                            <p className="t-highlights">Currently reading…</p>
                            <Button target={'_blank'} hierarchy={'tertiary'} type={'link'} link={'https://www.amazon.com/Am-My-Brand-Without-Apology/dp/1635579961'}>
                                <BookOpenTextIcon weight={'bold'} fontSize={'24'} />
                                <span>When Sorry Isn't Enough</span>
                                <ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
                            </Button>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Home;

