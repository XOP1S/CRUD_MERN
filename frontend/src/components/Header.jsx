import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {

    return (
        <header className='bg-orange-500 mb-2 shadow-lg'>
            <nav className="navbar max-w-6xl mx-auto">
                <ul className='flex justify-between items-center p-8'>
                    <li>
                        <Link className='px-6 py-3 text-white text-xl font-bold hover:text-black transition-colors ' href="#">Tutorias</Link>
                    </li>
                    <li>
                        <Link className='px-6 py-3 text-white text-xl font-bold hover:text-black transition-colors ' href="#">Estudiantes</Link>
                    </li>
                    <li>
                        <Link className='px-6 py-3 text-white text-xl font-bold hover:text-black transition-colors ' href="#">Proyectos de Aula</Link>
                    </li>
                    <li>
                        <Link className='px-6 py-3 text-white text-xl font-bold hover:text-black transition-colors ' href="#">Asignaturas</Link>
                    </li>
                    <li>
                        <Link className='px-6 py-3 text-white text-xl font-bold hover:text-black transition-colors ' href="#">Profesores</Link>
                    </li>
                    <li>
                        <Link className='px-6 py-3 text-white text-xl font-bold hover:text-black transition-colors ' href="#">Notas</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
