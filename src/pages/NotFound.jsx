import OopsImage from '../assets/images/oopsImage.svg?react';
import GoDown from '../assets/images/nofound-arrow-down.svg?react';

import LinkCard from '../components/LinkCard/LinkCard';

import Direct from '../assets/images/direct.webp';
import Work from '../assets/images/work.webp';
import Outdoor from '../assets/images/outdoor.webp';

const links = [
    {
        image: Direct,
        text: 'Let’s get you back on track.',
        link: '/',
        linkLabel: "Go to Home"
    },
    {
        image: Work,
        text: 'Want to see some projects?',
        link: '/projects',
        linkLabel: "Explore my work"
    },
    {
        image: Outdoor,
        text: 'Rebel, Explorer, Caregiver.',
        link: '/about',
        linkLabel: "Read my brand story"
    }
];

export default function NotFound() {
    return (
        <main className={'notfound flex flex-col items-start justify-start'}>
            <section className="hero flex flex-col justify-center items-center">
                <article className="hero-title flex flex-col items-center justify-center">
                    <div className="hero-title-role flex flex-row justify-center items-center">
                        <p className="t-caption text-center text-secondary">OOPS!</p>
                        <OopsImage />
                    </div>
                    <h1 className="h1 text-center">The link you clicked doesn’t lead anywhere.</h1>
                    <p className="t-copy text-center">Don’t panic, it’s probably a system error. I’ve been notified and I have some bots already checking it out. You can try these other links<GoDown /></p>
                </article>
            </section>

            <section className='links flex items-center justify-center'>
                {links.map((linkItem) => (
                    <LinkCard key={linkItem.link} image={linkItem.image} text={linkItem.text} link={linkItem.link} linkLabel={linkItem.linkLabel} />
                ))}
            </section>
        </main>
    );
}