import OopsImage from '../assets/images/oopsImage.svg?react';








export default function NoJavascript() {
    return (
        <main className={'javascript flex flex-col items-center justify-center'}>
            <section className=' flex items-center justify-center'>
                <article className='javascript-container flex items-center justify-center'>
                    <h6 className='h6 javascript-container-content flex items-center'>OOPS!
                        <OopsImage />
                    </h6>
                </article>
            </section>

            <article className='javascript-title-text' >
                    <h5 className='h5 text-center javascript-title'>
                        Sadly,nothing works nowadays without JavaScript
                    </h5>
                    <p className='t-copy text-center javascript-title-par'>
                        Do you mind turning it on to view the content?
                    </p>
                </article>

            
        </main>
    );
}