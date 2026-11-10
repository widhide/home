import '../../index.css'

import { Link, useLocation } from "react-router-dom";

import logo from '/assets/Codibara-Logo.webp';
import SectionLink from '../../components/UI/SectionLink';


export default function Header() {
    const location = useLocation();

    return(
        <div className="w-full max-w-[1440px] mx-auto sticky top-0 flex flex-col items-center py-3.5 px-6 md:flex-row md:justify-between z-50">
            <Link to='/'>
                <img className='w-8' src={logo} alt='Codibara home' />
            </Link>
            {location.pathname === "/policy" ? (
                <nav className='flex justify-center gap-16 py-3'>
                    <li className='nav-item'>Privacy Policy</li>
                </nav>
            ) : (
                <nav>
                    <ul className='flex justify-center gap-16 py-3'>
                        <li className='nav-item'><SectionLink to="about">About</SectionLink></li>
                        <li className='nav-item'><SectionLink to="works">Works</SectionLink></li>
                        <li className='nav-item'><SectionLink to="team">Team</SectionLink></li>
                    </ul>
                </nav>
            )}
        </div>
    )
}