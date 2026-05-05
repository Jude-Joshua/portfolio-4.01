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
                    <h4 className="h4">Featured Webflow Expert on <Url target={'_blank'} className="h4" isNavigationLink={'body-link'} href={'https://e10f1b95-2516-461d-bb22-db062d62e110.pipedrive.email/c/wy5vdr9x4e/84l0pmo784/zyr7g1v2kw/1?redirectUrl=https%3A%2F%2Fdribbble.com%2Fexperts%2Fwebflow&hash=-0eYw-z9hguf5aP1-8ggZrGwpBPC7HAJpCw2wvmMKDo'}>Dribbble <ArrowUpRightIcon weight="bold"/></Url></h4>
                </div>
            </div>
        </>
    );
}