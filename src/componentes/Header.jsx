import { useState } from 'react';
import '../estilos/header.css';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

const Header = ({ verNav = false }) => {
    const styleClass = "text-[#10bc69]";
    const [active, setActive] = useState({
        home: true,
        aplicaciones: false,
    });

    return (
        <header id="header" className="fixed w-full flex items-center justify-between top-0 px-3 md:px-6 lg:px-24 py-5 bg-white text-[#444444] z-50 h-20 shadow-md">

            <LinkRouter to='/'>
                <h1 className='text-[#5f687b] text-3xl font-semibold'>PRISMA</h1>
            </LinkRouter>
            {verNav ?
                <div className="w-auto flex items-center justify-between gap-4">
                    <nav id="navmenu">
                        <ul className="gap-4 flex items-center justify-center">
                            <li><Link to="hero" smooth={true} duration={500} offset={-80}
                                className={`${active.home ? styleClass : ''} cursor-pointer`} onClick={() => setActive({ home: true, aplicaciones: false })}
                            >Home</Link>
                            </li>
                            <li>
                                <Link to="aplicaciones" smooth={true} duration={500} offset={-80}
                                    className={`${active.aplicaciones ? styleClass : ''} cursor-pointer`} onClick={() => setActive(
                                        (prev) => ({ home: !prev.home, aplicaciones: !prev.aplicaciones, }))}
                                >Aplicaciones</Link>
                            </li>
                        </ul>
                    </nav>
                </div> : <></>
            }
        </header>
    );
}

export default Header;