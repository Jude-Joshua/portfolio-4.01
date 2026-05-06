import MaintenanceImage from '../assets/images/sign.svg?react';
import GoDown from '../assets/images/nofound-arrow-down.svg?react';

import { projects } from '../components/ProjectCard/ProjectList.jsx';
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

export default function Maintenance() {
    return (
        <main className={"notfound maintenance flex flex-col items-center justify-center"}>

            <section className="hero flex flex-col justify-center items-center">
                <article className="hero-title flex flex-col items-center justify-center">
                    <div className="hero-title-role flex flex-row justify-center items-center">
                        <p className="t-caption text-center text-secondary">SORRY!</p>
                        <MaintenanceImage />
                    </div>
                    <h1 className="h1 text-center">This page is currently under maintenance.</h1>
                    <p className="t-copy text-center">Something strange happened and I had to make quick edits. In the meantime, you can view case study<GoDown /></p>
                </article>
            </section>

            <section className="projects w-full flex flex-col" id='projects'>
                <article className="projects-inner flex justify-center items-center w-full">
                    {projects.slice(0, 1).map((project, index) => {
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

        </main>
    );
}