import { ArrowUpIcon } from "@phosphor-icons/react"; 
import { ArrowDownIcon } from "@phosphor-icons/react";
import OopsImage from '../assets/images/oopsImage.svg?react';
import OfflineGame from '../components/Offline-game/OfflineGame';

import { useState } from "react";


export default function NoInternet() {

    const [startGame, setStartGame] = useState(false);

    return (
        <main className={'internet flex flex-col items-center justify-center'}>
            {!startGame && (
                <>
                    <section className=' flex items-center justify-center'>
                        <article className='internet-container flex items-center justify-center'>
                            <h6 className='h6 internet-container-content flex items-center'>OOPS!
                                <OopsImage />
                            </h6>
                        </article>
                    </section>
        
                    <article className='internet-title-text' >
                            <h5 className='s2 text-center internet-title'>
                                You're not connected to the internet right now.
                            </h5>
                            <p className='t-copy text-center internet-title-par'>
                                Not much to show you right now. While you wait, 
                                how about a game ?
                            </p>
                        </article>

                        <article className="internet-box">
                            <div className="internet-box-content">
                            <button onClick={() => setStartGame(true)}  className="internet-box-btn t-buttons">Sure</button>
                            <p className="t-copy internet-box-par flex">
                                Press <span className="flex items-center justify-center"> <ArrowUpIcon size={20} /> <ArrowDownIcon size={20} /> </span> 
                                to switch lanes.
                             </p>
                            </div>

                        </article>
                        </>
            )}

            {startGame && <OfflineGame/>}
        
                    
                </main>
    );
}