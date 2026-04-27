import { ArrowUpIcon } from "@phosphor-icons/react"; 
import { ArrowDownIcon } from "@phosphor-icons/react";
import OopsImage from '../assets/images/oopsImage.svg?react';


export default function NoInternet() {
    return (
        <main className={'internet flex flex-col items-center justify-center'}>
                    <section className=' flex items-center justify-center'>
                        <article className='internet-container flex items-center justify-center'>
                            <h6 className='h6 internet-container-content flex items-center'>OOPS!
                                <OopsImage />
                            </h6>
                        </article>
                    </section>
        
                    <article className='internet-title-text' >
                            <h5 className='h3 text-center internet-title'>
                                You're not connected to the internet right now.
                            </h5>
                            <p className='t-copy text-center internet-title-par'>
                                Not much to show you right now. While you wait, 
                                how about a game ?
                            </p>
                        </article>

                        <article className="internet-box">
                            <div className="internet-box-content">
                            <button className="internet-box-btn t-buttons">Sure</button>
                            <p className="t-copy internet-box-par flex">
                                Press <span className="flex items-center justify-center"> <ArrowUpIcon size={20} /> <ArrowDownIcon size={20} /> </span> 
                                to switch lanes.
                             </p>
                            </div>

                        </article>
        
                    
                </main>
    );
}