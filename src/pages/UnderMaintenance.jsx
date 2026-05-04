import OopsImage from '../assets/images/oopsImage.svg';

export default function UnderMaintenance() {
  return (
   <main className={'under flex flex-col justify-center items-center'}>
    <section className='under-head'>
        <h6 className='flex items-center h6 under-head-icon'>OOPS!
        <img src={OopsImage} alt="oops" className='' />
        </h6>
    </section>

    <section className='under-text flex flex-col justify-center items-center'>
        <h2 className='s2  text-center'>
            This site is currently under Maintenance.
        </h2>
        <p className='t-copy'>
            Something strange happened, and I had to make quick edits.
        </p>
    </section>

    <article className='under-timer'>
        <div className="flex under-timer-item h6">

            <div className='flex flex-col items-center'> <p>6</p> 
              <p className='under-timer-par'>DAYS</p>
            </div>
        . 
            <div className='flex flex-col items-center'> <p>24</p>
              <p className='under-timer-par'>HOURS</p>
            </div>
        . 
            <div className='flex flex-col items-center'> <p>02</p>
              <p className='under-timer-par'>MINS</p>
            </div>
        </div>

        <div className='under-timer-par-2'>
            <p className='t-copy text-center'>
                until next website update.
            </p>
        </div>

    </article>

   </main>
  );
}