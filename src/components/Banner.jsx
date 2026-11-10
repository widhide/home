import '../index.css'
import logo from '/assets/Codibara-Logo.webp';

import { ChevronDoubleDown } from 'react-bootstrap-icons';

import SectionLink from './UI/SectionLink';

export default function Banner(){
    return(
        <>
         <div className='grid-background relative h-svh flex flex-col justify-center items-center'>
            <img
                src={logo}
                className='w-2/12 max-w-[300px] min-w-[200px]'
                alt='codibara logo'
            />
            <div className='absolute bottom-6 flex flex-col items-center'>
                <SectionLink to='about'>
                    <p className='font-chivo text-subcolor inline-block mb-4.5 border-b md:text-xl'>Explore</p>
                </SectionLink>
                <SectionLink to='about' className='animate-bounce' aria-label='Scroll to About'>
                    <ChevronDoubleDown color='rgba(206,91,22,1)' size={24}/>
                </SectionLink>
            </div>
         </div>
        
        </>
    )
}
