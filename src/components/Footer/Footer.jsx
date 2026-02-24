import { ArrowUpRightIcon, ClockCountdownIcon, CalendarDotsIcon, ArrowDownIcon, BookOpenTextIcon, FilmSlateIcon, CameraIcon, SneakerMoveIcon, PawPrintIcon, MicrophoneStageIcon, RainbowCloudIcon, AsteriskIcon, EnvelopeOpenIcon, ArrowRightIcon, LineVerticalIcon, DotIcon, MinusIcon } from '@phosphor-icons/react';

import "./footer.scss";

import Spacer from '../../assets/images/copyright-spacer.svg?react';

import Url from "../Links/Link.jsx";

export default function Footer() {

    return (
        <footer className="footer relative flex flex-col items-center justify-center text-center ">

            {/* Main Heading */}
            <h1 className="footer-main h5 tracking-tight leading-tight">
                Add me to your <br />
                Dream Team
                <span className="footer-main-span h5 relative inline-block">
                    Shortlist*
                    {/* Underline effect */}
                </span>
            </h1>

            {/* Subtext */}
            <p className="footer-subtext t-button">
                If your team needs a thoughtful builder who values <br />
                time like they do ideas, we might click.
            </p>

            {/* Call-to-Action Button */}
            <button className="footer-button t-copy flex items-center justify-center">
                Send a note
                <div className="footer-button-effect flex items-center justify-center">
                    <span className="flex items-center justify-center ">
                        {/* Envelope Icon */}
                        <EnvelopeOpenIcon weight='regular' size={25} />
                    </span>
                </div>
            </button>

            <div className="footer-copyright flex justify-center items-center">
                <div className="footer-copyright-links flex items-center justify-center">
                    {[{
                        "LinkedIn":"https://linkedin.com/in/thejudejoshua",
                        "X":"https://x.com/thejudejoshua",
                        "Instagram":"https://instagram.com/thejudejoshua",
                        "YouTube":"https://youtube.com/thejudejoshua",
                    }].map((item) => {
                        return Object.keys(item).map((key, index) => (
                            <Url key={key} href={item[key]}>
                                <span>{key}</span>
                                {index !== Object.keys(item).length - 1 && <Spacer/>}
                            </Url>
                        ));
                    })}
                </div>
                <div className='divider footer-copyright-divider'/>
                <span className='t-links'>© Jude Joshua, 2025. All rights reserved.</span>
            </div>

        </footer>
    )

}