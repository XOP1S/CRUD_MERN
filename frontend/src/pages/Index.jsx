import React from 'react'
import { getProfesores } from '../services/apiProfesores'
import { useLoaderData } from 'react-router-dom'
import Profesores from '../components/Profesores'

export async function loader () {

    const profesores = await getProfesores()

    return profesores

}

export default function Index () {

    const profesores = useLoaderData()

    return (
        <>
            {profesores.length > 0
                ? (
                    <>
                        <h1 className='text-3xl font-bold border-b-2 border-black pb-4'>Tabla Profesores</h1>

                        <div className='grid grid-cols-auto-fit gap-4'>
                            {profesores.map(profesor => (
                                <Profesores key={profesor.id} profesores={profesor} />
                            ))}
                        </div>
                    </>
                )
                : (
                    <>
                        <h1 className='text-3xl font-bold border-b-2 border-black pb-4'>No hay clientes aún</h1>
                        <p className='mt-5'>Agregue un cliente para comenzar</p>
                    </>
                )}
        </>
    )

}
