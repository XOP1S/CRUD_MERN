import React from 'react'

export default function Formulario ({ profesores }) {

    return (
        <>
            <div className='mt-4 flex justify-between gap-4'>
                <div className='w-full'>
                    <label htmlFor='nombres' className='block mb-3 font-bold'>Nombres</label>
                    <input
                        id='nombres'
                        type='text'
                        name='nombres'
                        className='border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-orange-500 w-full'
                        defaultValue={profesores?.nombres || ''}

                    />
                </div>
            </div>

            <div className='mt-4 flex justify-between gap-4'>
                <div className='w-full'>
                    <label htmlFor='apellido' className='block mb-3 font-bold'>Apellidos</label>
                    <input
                        id='apellido'
                        type='text'
                        name='apellidos'
                        className='border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-orange-500 w-full'
                        defaultValue={profesores?.apellidos || ''}
                    />
                </div>
            </div>

            <div className='mt-4 flex justify-between gap-4'>
                <div className='flex flex-col w-full'>
                    <label className='mb-3 font-bold'>Genero</label>
                    <div className='flex gap-4 mt-2 items-center flex-wrap'>
                        <input
                            id='masculino'
                            type='radio'
                            name='genero'
                            value='Masculino'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.genero === 'Masculino'}
                        />
                        <label htmlFor='masculino'>Masculino</label>

                        <input
                            id='femenino'
                            type='radio'
                            name='genero'
                            value='Femenino'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.genero === 'Femenino'}
                        />
                        <label htmlFor='femenino'>Femenino</label>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label className='mb-3 font-bold'>Tipo de contrato</label>
                    <div className='flex gap-4 mt-2 items-center flex-wrap'>
                        <input
                            id='fullTime'
                            type='radio'
                            name='tipocontrato'
                            value='Tiempo completo'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.tipocontrato === 'Tiempo completo'}
                        />
                        <label htmlFor='fullTime'>Tiempo completo</label>

                        <input
                            id='halfTime'
                            type='radio'
                            name='tipocontrato'
                            value='Medio tiempo'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.tipocontrato === 'Medio tiempo'}
                        />
                        <label htmlFor='halfTime'>Medio tiempo</label>

                        <input
                            id='3/4'
                            type='radio'
                            name='tipocontrato'
                            value='3/4 de tiempo'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.tipocontrato === '3/4 de tiempo'}
                        />
                        <label htmlFor='3/4'>3/4</label>

                        <input
                            id='catedra'
                            type='radio'
                            name='tipocontrato'
                            value='Catedra'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.tipocontrato === 'Catedra'}
                        />
                        <label htmlFor='catedra'>Catedra</label>
                    </div>
                </div>
            </div>

            <div className='mt-4 flex justify-between gap-4'>
                <div className='flex flex-col w-full'>
                    <label className='mb-3 font-bold'>Tipo de identificacion</label>
                    <div className='flex gap-4 mt-2 items-center flex-wrap'>
                        <input
                            id='TI'
                            type='radio'
                            name='tipo_id'
                            value='T.I.'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.tipo_id === 'T.I.'}
                        />
                        <label htmlFor='TI'>T.I</label>

                        <input
                            id='cc'
                            type='radio'
                            name='tipo_id'
                            value='C.C.'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.tipo_id === 'C.C.'}
                        />
                        <label htmlFor='cc'>C.C</label>

                        <input
                            id='ce'
                            type='radio'
                            name='tipo_id'
                            value='C.E.'
                            className='w-5 h-5 inline-block outline-none cursor-pointer'
                            defaultChecked={profesores?.tipo_id === 'C.E.'}
                        />
                        <label htmlFor='ce'>C.E</label>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor='id' className='mb-3 font-bold'>Numero de identificacion</label>
                    <input
                        id='id'
                        type='text'
                        name='id'
                        className='border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-orange-500 w-full'
                        defaultValue={profesores?.id || ''}
                    />
                </div>
            </div>

            <div className='mt-4 flex justify-between gap-4'>
                <div className='w-full'>
                    <label htmlFor='correo' className='block mb-3 font-bold'>Email</label>
                    <input
                        id='correo'
                        type='email'
                        name='email'
                        className='border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-orange-500 w-full'
                        defaultValue={profesores?.email || ''}
                    />
                </div>
            </div>

            <div className='mt-4 flex justify-between gap-4'>
                <div className='w-full'>
                    <label htmlFor='direccion' className='block mb-3 font-bold'>Direccion</label>
                    <input
                        id='direccion'
                        type='text'
                        name='direccion'
                        className='border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-orange-500 w-full'
                        defaultValue={profesores?.direccion || ''}
                    />
                </div>
            </div>

        </>
    )

}
