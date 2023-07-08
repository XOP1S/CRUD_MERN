import React from 'react'
import useProfesor from '../hooks/useProfesor'

export default function Profesores ({ profesores }) {

    const { id, name, lastName } = profesores

    const { handleChangeModal, handleChangeModalProfesor } = useProfesor()

    return (
        <div className="flex flex-col justify-between bg-gray-200 mt-4 min-h-[245px]">
            <div className="flex justify-center bg-orange-500 px-7 py-1 font-bold">
                <p className="text-white text-lg">{id}</p>
            </div>

            <div className="text-center mb-4">
                <div className="flex justify-center items-center mt-4 p-3">
                    <img
                        width={100}
                        height={100}
                        src="/img/imagen.png"
                        alt={`Imagen de ${name}`}
                    />
                    <h2 className="text-xl font-bold uppercase">
                        {name} {lastName}
                    </h2>
                </div>
            </div>
            <button
                onClick={() => {

                    handleChangeModal()
                    handleChangeModalProfesor(profesores)

                }}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4  mt-4 cursor-pointer w-full text-xl"
            >
                Ver mas
            </button>
        </div>
    )

}
