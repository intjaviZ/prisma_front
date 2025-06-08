import '../../estilos/header.css';
import { LogOut, User } from 'lucide-react';

const HeaderOrientador = () => {

    return (
        <header className="fixed top-0 left-60 right-0 flex items-center justify-end
        gap-10 h-20 px-6 py-5
        bg-white text-[#444444] shadow-md z-50">    
            <div className='bg-gray-200 py-2 px-4 rounded-xl flex items-center gap-4'>
                <div className='text-end text-gray-700'>
                    <p>Escuela</p>
                    <p>Nombre del usuario</p>
                </div>
                <div className='w-12 h-12 p-2 bg-[#10bc69] text-white rounded-full flex items-center justify-center
                hover:opacity-90'><User /></div>
            </div>
            <button className='p-2 w-16 h-16 rounded-2xl flex items-center justify-center
             hover:bg-gray-100 transition'><LogOut className='w-6 h-6'/></button>
        </header>
    );
}

export default HeaderOrientador;