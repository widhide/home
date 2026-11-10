import '../index.css'

import joshuaImg from '/assets/Joshua-mobile.png'
import kooImg from '/assets/Tony-mobile.png'
import soyImg from '/assets/Soy-mobile.png'

export default function TeamDesktop(){
    return(
        <div className='flex flex-col items-center bg-subcolor-light py-32'>
            <p className='font-noto text-secondary text-[1.8vw] lg:text-2xl mb-9'>Seamless / Social / Like a Capybara.</p>
            <div className='w-11/12 max-w-[1100px] flex flex-row justify-evenly items-start px-4'>
                <div className='w-[30%] flex flex-col items-center'>
                    <img src={joshuaImg} alt='Joshua' className='w-full h-[24vw] max-h-[340px] object-contain mb-5'/>
                    <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Joshua</p>
                    <p className='font-noto text-secondary font-light text-center text-[1.6vw] lg:text-[24px]'>Product Owner</p>
                </div>
                <div className='w-[30%] flex flex-col items-center'>
                    <img src={kooImg} alt='Koo' className='w-full h-[24vw] max-h-[340px] object-contain mb-5'/>
                    <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Koo</p>
                    <p className='font-noto text-secondary font-light text-center text-[1.6vw] lg:text-[24px]'>Full Stack Engineer</p>
                </div>
                <div className='w-[30%] flex flex-col items-center'>
                    <img src={soyImg} alt='Soy' className='w-full h-[24vw] max-h-[340px] object-contain mb-5'/>
                    <p className='font-chivo text-primary text-[1.8vw] lg:text-2xl tracking-wider'>Soy</p>
                    <p className='font-noto text-secondary font-light text-center text-[1.6vw] lg:text-[24px]'>Project Manager<br></br>
                    & Designer</p>
                </div>
            </div>
        </div>
    )
}