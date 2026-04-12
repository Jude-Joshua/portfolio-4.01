import './projectCard.scss';

import { ArrowRightIcon } from '@phosphor-icons/react';

import SampleImage from '../../assets/images/fmta-screen.webp'

import ImageComponent from "../ImageComponent/ImageComponent.jsx";
import Button from "../Button/Button.jsx";
import Url from '../Links/Link.jsx';


const ProjectCard = ({ variant, theme, project }) => {

    switch (variant) {
        case 'long':
            return (
                <div className="project long grid grid-cols-8 justify-start items-center">
                    <div className="project-image col-span-5">
                        <ImageComponent src={SampleImage} className={''} alt={'sample project image'} />
                    </div>
                    <div className="project-details col-span-3 flex flex-col justify-center">
                        <div className="project-details-labels flex flex-row">
                            <span className="t-caption">UI/UX</span>
                        </div>

                        <div className="project-details-text flex flex-col items-start justify-start">
                            <div className="project-details-text-holder flex flex-col items-start justify-start">
                                <h6 className="h6">
                                    Redesigning a unified B2B and B2C web app for healthcare providers and seekers.
                                </h6>
                                <p className="t-copy-small">
                                    How might we reduce cognitive load and make ordering medical supplies feel immediate, controlled, and trustworthy?
                                </p>
                            </div>
                            <Button hierarchy={'tertiary'} type={'link'} link={'/projects/firstmedtrade'}>
                                <span>View case study</span>
                                <ArrowRightIcon weight={'bold'} fontSize={'24'} />
                            </Button>
                        </div>
                    </div>
                </div>
            );

        case 'playful':
            return (
                <Url
                    isNavigationLink="body-link"
                    href={project.link}
                    className={`project ${variant} flex flex-col justify-between`}
                >
                    <div className="project-image">
                        <ImageComponent
                            src={SampleImage}
                            alt={`${project.title} image`}
                        />
                    </div>

                    <div className={`project-card flex flex-col justify-between ${theme}`}>
                        <div className="project-card-label">
                            <p className="t-caption">{project.tag}</p>
                        </div>

                        <div className="project-card-details flex flex-col items-start justify-start">
                            <div className="project-card-details-title">
                                <h6 className="h6">
                                    {project.title}
                                </h6>
                            </div>

                            <div className="project-card-details-hmw">
                                <p className="t-copy-small">
                                    {project.hmw}
                                </p>
                            </div>
                        </div>
                    </div>
                </Url>
            );

        default:
            return null;
    }


}

export default ProjectCard;