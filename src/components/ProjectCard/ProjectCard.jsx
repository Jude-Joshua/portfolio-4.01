import './projectCard.scss';

import { ArrowUpRightIcon, ArrowRightIcon } from '@phosphor-icons/react';

import SampleImage from '../../assets/images/fmta-screen.webp'

import ImageComponent from "../ImageComponent/ImageComponent.jsx";
import Button from "../Button/Button.jsx";
import Url from '../Links/Link.jsx';


const ProjectCard = ({ variant, theme, project, className, index }) => {
    const projectIndexLabel = Number.isFinite(index) ? index + 1 : null;

    switch (variant) {
        case 'long':
            return (
                <div className='project-keeper flex flex-row w-full fade-section fade-section--delay-2 justify-center items-center'>
                    <div className='project-keeper-counter'>
                        <p className='t-highlights'>
                            Case study{projectIndexLabel ? ` ${projectIndexLabel}` : ''}
                        </p>
                    </div>

                    <div className={`project long grid grid-cols-2 justify-center items-center ${className}`}>
                        <div className="project-details col-span-1 flex flex-col justify-between">
                            <div className="project-details-labels flex flex-row">
                                <span className="t-caption">{project.name}</span>
                            </div>

                            <div className="project-details-text flex flex-col items-start justify-start">
                                <div className="project-details-text-holder flex flex-col items-start justify-start">
                                    <p className="t-copy">
                                        {project.hmw}
                                    </p>
                                </div>
                                <Button hierarchy={'tertiary'} type={'link'} isNavigationLink="body-link" link={project.link}>
                                    <span>Read case study</span>
                                    <ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
                                </Button>
                            </div>
                        </div>
                        <div className="project-image col-span-1">
                            <ImageComponent
                                src={`/assets/images/${project.slug}/${project.cover}`}
                                alt={`${project.title} image`}
                            />
                        </div>
                    </div>
                </div>
            );

        case 'playful':
            return (
                <Url
                    isNavigationLink="body-link"
                    href={project.link}
                    className={`project ${variant} flex flex-col justify-between ${theme} ${className}`}
                >
                    <div className={`project-card flex flex-col justify-end`}>
                        <div className="project-card-image">
                            <ImageComponent
                                src={`/assets/images/${project.slug}/${project.cover}`}
                                alt={`${project.title} image`}
                            />
                        </div>
                        <div className="project-card-details flex flex-col items-start justify-start">
                            <h6 className="t-caption project-card-details-title justify-center items-center flex">
                                {project.name}
                            </h6>
                            <p className="t-copy">
                                {project.hmw}
                            </p>
                        </div>
                    </div>
                </Url>
            );

        case 'grid':
            return (
                <Url
                    isNavigationLink="body-link"
                    href={project.link}
                    className={`project-${variant}-card flex flex-col justify-start items-end ${className}`}
                >
                    <div className='project-grid-card-click flex flex-row'>
                        <ArrowRightIcon size={'32'} />
                    </div>
                    <div className="project-image">
                        <ImageComponent
                            src={`/assets/images/${project.slug}/${project.cover}`}
                            alt={`${project.title} image`}
                        />
                    </div>
                    <div className="project-hmw">
                        <p className="t-copy">
                            {project.hmw}
                        </p>
                    </div>
                </Url>
            );

        case 'list':
            return (

                <Url
                    isNavigationLink="body-link"
                    href={project.link}
                    className={`project-${variant}-card flex flex-row justify-between items-start ${className}`}

                >
                    <div className="project-list-card-image">
                        <ImageComponent
                            src={SampleImage}
                            alt={`${project.title} image`}
                        />
                    </div>
                    <h4 className="t-copy-small project-list-card-name">{project.name}</h4>
                    <p className="t-copy-small project-list-card-title">{project.title}</p>
                    <p className="t-copy-small project-list-card-tag">{project.tag}</p>
                    <ArrowRightIcon size={'24'} weight='regular' className="project-list-card-go" />
                </Url>
            );

        default:
            return null;
    }


}

export default ProjectCard;