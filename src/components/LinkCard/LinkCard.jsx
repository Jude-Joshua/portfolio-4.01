import './linkCard.scss';

import { ArrowUpRightIcon } from "@phosphor-icons/react";

import ImageComponent from "../ImageComponent/ImageComponent";
import Button from "../Button/Button.jsx";

export default function LinkCard({ text, link, linkLabel, image }) {
    return (
        <div className="linkcard flex flex-col justify-end items-start">
            <div className={'linkcard-image'}>
                <ImageComponent src={image} />
            </div>
            <h6 className="h6">{text}</h6>
            <Button target={''} hierarchy={'tertiary'} type={'link'} link={link}>
                <span>{linkLabel}</span>
                <ArrowUpRightIcon weight={'bold'} fontSize={'24'} />
            </Button>
        </div>
    )
}