import MaintenanceImage from '../assets/images/sign.png';
import NoFoundArrowDown from '../assets/images/nofound-arrow-down.svg';








export default function Maintenance() {
  return (
    <main className={"maintenance flex flex-col items-center justify-center"}>
        <section className='maintenance-head flex justify-center'>
            <h6 className='maintenance-head-content flex items-center h6'>SORRY!
                <img src={MaintenanceImage} alt="Sign"  className='maintenance-head-content-img'/>
            </h6>
        </section>

        <section className='maintenance-body flex flex-col justify-center items-center'> 
            <h3 className='h3 '>This page is currently under maintenance.</h3>
            <p className='t-copy maintenance-body-par flex flex-col items-center '>Something strange happened and I had to make quick edits. 
                In the meantime, you can view case study 
                <span>
                    <img src={NoFoundArrowDown} alt="Arrow pointing down" className='maintenance-body-arrow'/>
                </span>
            </p>
            
        </section>

        <article className='maintenance-container'>
            <div className='maintenance-container-inner'> </div>
              <div className='maintenance-container-box-1 t-copy text-center'>
                UI/UX
                </div>  

                <div className='h6 maintenance-title'>
                    <h6>
                        Redesigning a unified  B2B and B2C web app for healthcare providers 
                        and  seekers.
                    </h6>
                    </div>  

                    <div className='maintenance-box-2 leading-tight'>
                        <p className='t-copy'>
                            How might we reduce cognitive load and make ordering medical 
                            supplies feel immediate, controlled and trustworthy?
                        </p>
                        </div>         
                
        </article>


    </main>
  );
}