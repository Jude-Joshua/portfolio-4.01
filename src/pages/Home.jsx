import { useState } from "react";

import { ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon, BookOpenTextIcon, FilmSlateIcon, CameraIcon, SneakerMoveIcon, PawPrintIcon, MicrophoneStageIcon, RainbowCloudIcon } from '@phosphor-icons/react';

import ImageComponent from "../components/ImageComponent/ImageComponent.jsx";
import Button from "../components/Button/Button.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

import HelloImage from '../assets/images/Greeting.svg?react';
import Animark from '../assets/images/animark.svg?react';
import CatImage from '../assets/images/cat-image.png';

import ProfileImage from '../assets/images/profile-image.webp'
import ShowImage from '../assets/images/showcase.png'

const BARS = 10;

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
                                I am a digital designer with over a decade of experience collaboarting with content and design teams, and start up founders,
                                to deliver clear, scalable, digital experiences.
                            </p>
                            <p className="t-copy">
                                From product interfaces to brand and web platforms, I work closely with teams to connect user needs, content strategy, and design execution
                                in ways that support long-term growth.
                            </p>
                        </div>
                        <Button hierarchy={'tertiary'} type={'link'} link={'#process'}>
                            <span>See sample work</span>
                            <ArrowDownIcon weight={'bold'} fontSize={'24'} />
                        </Button>
                    </div>
                </article>
            </section>

            <section className="projects w-full flex flex-col">
                <article className="projects-inner flex flex-col items-center w-full">
                    <ProjectCard />
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
                        <div className="philosophy-card-data-text flex flex-col items-start justify-start">
                            <p className="h2">At the heart of every great brand and product is a clear and cohesive identity.</p>
                            <p className="t-copy">I believe good design is intentional: shaped by purpose, aligned with real goals, and consistent across every touchpoint. Whether working on product, web, or brand-led experiences, my focus is always on creating work that feels meaningful, usable, and grounded in clarity.</p>
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
                            <div className="archetype-body-info-right-img">
                                <ImageComponent src={CatImage} className={'archetype-img'} alt={''} />
                            </div>
                            <div className="archetype-body-info-right-navigation flex items-center justify-between">
                                <div className="archetype-body-info-right-navigation flex items-center justify-between ">
                                    <span className="archetype-body-info-right-navigation-icon"><PawPrintIcon weight={'regular'} size={32} /></span>
                                    <span className="archetype-body-info-right-navigation-icon"><CameraIcon weight={'regular'} size={32} /></span>
                                    <span className="archetype-body-info-right-navigation-icon active"><SneakerMoveIcon weight={'regular'} size={32} /></span>
                                    <span className="archetype-body-info-right-navigation-icon"><RainbowCloudIcon weight={'regular'} size={32} /></span>
                                    <span className="archetype-body-info-right-navigation-icon"><MicrophoneStageIcon weight={'regular'} size={32} /></span>
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
        </main>
    );
};

export default Home;

