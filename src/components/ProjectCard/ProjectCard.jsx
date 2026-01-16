import './projectCard.scss';

import {ArrowRightIcon} from '@phosphor-icons/react';

import SampleImage from '../../assets/images/sample-image.png'

import ImageComponent from "../ImageComponent/ImageComponent.jsx";
import Button from "../Button/Button.jsx";


const ProjectCard = () => {
    return (
        <div className="project grid grid-cols-4 justify-start items-center">
            <div className="project-image col-span-2">
                <ImageComponent src={SampleImage} className={''} alt={'sample project image'}/>
            </div>
            <div className="project-details col-span-2 flex flex-col justify-center">
                <div className="project-details-labels flex flex-row">
                    <span className="t-caption">UI/UX</span>
                    <span className="t-caption">Firstmedtrade</span>
                </div>

                <div className="project-details-text flex flex-col items-start justify-start">
                    <div className="project-details-text-holder flex flex-col items-start justify-start">
                        <h6 className="h6">
                            B2B and B2C web app for healthcare providers and seekers needing streamlined access to medical supplies.
                        </h6>
                        <p className="t-copy">
                            How might we simplify the process of getting medical supplies for healthcare seekers and providers?
                        </p>
                    </div>
                    <Button hierarchy={'tertiary'} type={'link'} link={'#'}>
                        <span>View case study</span>
                        <ArrowRightIcon weight={'bold'} fontSize={'24'}/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;