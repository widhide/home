import '../index.css'
import joshuaMobile from '/assets/Joshua-mobile.png';
import soyMobile from '/assets/Soy-mobile.png';
import kooMobile from '/assets/Tony-mobile.png';


export default function TeamMobile(){
    return(
        <div className='relative flex flex-col items-center'>
            <div className='w-full'>
                <div className='bg-tertiary h-35'></div>
                <div className='bg-primary h-65'></div>
                <div className='bg-tertiary h-68'></div>
                <div className='bg-subcolor h-56'></div>
                <div className='bg-tertiary h-58'></div>
            </div>
            <div className='absolute top-0 w-full max-w-[440px]'>
                <div className='flex flex-row items-center justify-end gap-3.5 mt-20 w-full'>
                    <div>
                        <p className='font-noto font-semibold text-body text-right'>Joshua</p>
                        <p className='font-noto font-light text-body'>Product Owner</p>
                    </div>
                    <img className='w-54' src={joshuaMobile}/>
                </div>
                <div className='flex flex-row items-center gap-3.5 -mt-10 w-full'>
                    <img className='w-60' src={kooMobile}/>
                    <div>
                        <p className='font-noto font-semibold text-body'>Koo</p>
                        <p className='font-noto font-light text-body'>Full Stack Engineer</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-end gap-3.5 -mt-10 w-full'>
                    <div>
                        <p className='font-noto font-semibold text-body text-right'>Soyeong</p>
                        <p className='font-noto font-light text-body text-right'>Project Manager & Designer</p>
                    </div>
                    <img className='w-58' src={soyMobile}/>
                </div>
                <div className='flex flex-col items-center font-noto'>
                    <p className='text-primary'>·</p>
                    <p className='text-secondary'>·</p>
                    <p className='text-primary'>·</p>
                    <p className='text-secondary'>Seamless</p>
                    <p className='text-secondary'>Social</p>
                    <p className='text-secondary'>Like a Capybara</p>
                    <p className='text-primary'>·</p>
                    <p className='text-secondary'>·</p>
                    <p className='text-primary'>·</p>
                </div>
            </div>
        </div>
    )
}