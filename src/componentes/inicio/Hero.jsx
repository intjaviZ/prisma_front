import { Link } from 'react-router-dom';
import heroImg from '../../assets/img/prisma-hero.webp';
import { BsPlayCircle } from "react-icons/bs";

const Hero = () => {
    return (
        <section id="hero" className="bg-white w-full px-4 md:px-16 lg:px-20 mt-16 pt-10 md:pt-11 flex flex-col-reverse lg:flex-row justify-end lg:justify-center items-center gap-10 lg:gap-36 min-h-[calc(100vh-80px)]">
            <div className="flex flex-col justify-center w-full lg:w-1/2">
                <h1 className='text-[#5f687b] w-full font-bold text-pretty md:text-left text-3xl md:text-5xl'>
                    Prevención de Riesgos con Inteligencia Artificial y Soluciones de Manejo Aemocional</h1>
                <p className='font-normal text-xl pt-2 text-[#444444] opacity-70'>Software de apoyo y detección de ansiedad y depresión</p>
                <div className="flex items-center justify-start gap-4 pt-5">
                    <Link to="/test"  className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                     py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md"
                    >Iniciar</Link>
                    <a href="https://youtu.be/eKumVFvGHFA?si=Rxy4l1PAA7W8WLw4"
                        className="glightbox btn-watch-video flex items-center gap-2"><BsPlayCircle className='text-base text-[#10bc69]'/>
                        <span className='font-semibold text-[#444444]'>Ver Video</span>
                    </a>
                </div>
            </div>
            <div className="min-w-72 w-full lg:w-1/2">
                <img src={heroImg} className="w-full rounded-full animate-up-down" alt="logo prisma"></img>
            </div>
        </section>
    );
}

export default Hero;