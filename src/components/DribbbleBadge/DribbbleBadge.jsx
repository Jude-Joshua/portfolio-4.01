import { ArrowUpRightIcon, DribbbleLogoIcon } from "@phosphor-icons/react";
import Url from "../Links/Link";
import BackgroundRings from '../../assets/images/background-rings.svg?react';

export default function DribbbleBadge() {
    return (
        <>
            <div className="philosophy-title-badge">
                <div className="philosophy-title-badge-card flex flex-col justify-between items-start">
                    <BackgroundRings className="philosophy-title-badge-card-img" />
                    <DribbbleLogoIcon size={56} weight="regular"/>
                    <h4 className="h4">Featured Webflow Expert on <Url target={'_blank'} className="h4" isNavigationLink={'body-link'} href={'https://dribbble.com/experts/webflow'}>Dribbble <ArrowUpRightIcon weight="bold"/></Url></h4>
                </div>
            </div>
        </>
    );
}