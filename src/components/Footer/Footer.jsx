import { EnvelopeOpenIcon } from '@phosphor-icons/react';

import "./footer.scss";

import Spacer from '../../assets/images/copyright-spacer.svg?react';
import ArrowMoveDown from '../../assets/images/arrow-move.svg?react';
import CrossStar from '../../assets/images/cross-star.svg?react';
import Marker from '../../assets/images/marker-2.svg?react';

import Url from "../Links/Link.jsx";
import Button from "../Button/Button.jsx";

export default function Footer() {

    return (
        <footer className="footer relative flex flex-col items-start justify-center">
            <div className='footer-top flex flex-col items-center justify-center'>
                <div className='footer-top-title flex flex-col items-center justify-center'>
                    <h2 className="h2">
                        Add me to your <ArrowMoveDown className="footer-top-title-arrow" /> <br />
                        Dream Team <span className='footer-top-title-highlights'>Shortlist<CrossStar className="footer-top-title-star" /><Marker className="footer-top-title-marker" /></span>.
                    </h2>

                    <p className="t-copy">
                        If your team needs a thoughtful builder who values time like they do ideas, we might click.
                    </p>
                </div>
                <Button hierarchy={'primary'} type={'link'} link={'mailto:work@judejoshua.com'}>
                    <span>Send a note</span>
                    <span className="icon-round flex items-center justify-center">
                        <EnvelopeOpenIcon weight={'bold'} fontSize={'32'} />
                    </span>
                </Button>
            </div>

            <CrossStar className="footer-copyright-star" />

            <div className="footer-copyright flex justify-center items-center">
                <div className="footer-copyright-links flex items-center justify-center">
                    {[{
                        "LinkedIn": "https://linkedin.com/in/thejudejoshua",
                        "X": "https://x.com/thejudejoshua",
                        "Instagram": "https://instagram.com/thejudejoshua",
                        "YouTube": "https://youtube.com/thejudejoshua",
                    }].map((item) => {
                        return Object.keys(item).map((key, index) => (
                            <Url key={key} href={item[key]}>
                                <span>{key}</span>
                                {index !== Object.keys(item).length - 1 && <Spacer />}
                            </Url>
                        ));
                    })}
                </div>
                <div className='divider footer-copyright-divider' />
                <span className='t-links'>© Jude Joshua, 2025. All rights reserved.</span>
            </div>

        </footer>
    )

}