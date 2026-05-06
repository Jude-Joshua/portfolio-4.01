import OopsImage from '../assets/images/oopsImage.svg?react';

export default function NoJavascript() {
    return (
        <main className={'notfound flex flex-col items-center justify-center'}>

            <section className="hero flex flex-col justify-center items-center">
                <article className="hero-title flex flex-col items-center justify-center">
                    <div className="hero-title-role fade-section fade-section--delay-1 flex flex-row justify-center items-center">
                        <p className="t-caption text-center text-secondary">OOPS!</p>
                        <OopsImage />
                    </div>
                    <h1 className="h1 fade-section fade-section--delay-2 text-center">Sadly, nothing works nowadays without JavaScript.</h1>
                    <p className="t-copy fade-section fade-section--delay-3 text-center">Do you mind turning it on to view the content?</p>
                </article>
            </section>

        </main>
    );
}