/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-control-regex */
// eslint-disable no-useless-escape
import React from 'react'
import { Form, redirect, useActionData, useNavigate } from 'react-router-dom'
import Formulario from '../components/Formulario'
import { addProfesor } from '../services/apiProfesores'
import Error from '../components/Error'
import { toast } from 'react-toastify'

export async function action ({ request }) {

    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')

    const errores = []

    if (Object.values(data).includes('')) {

        errores.push('Todos los campos son obligatorios')

    }

    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

    if (!regex.test(email)) {

        errores.push('El email no es válido')

    }

    if (Object.keys(errores).length) {

        return errores

    }

    await addProfesor(data)
    toast.success('Profesor creado con éxito')
    return redirect('/')

}

export default function NuevoProfesor () {

    const navigate = useNavigate()
    const errores = useActionData()

    return (
        <>
            <div className="md:flex items-center justify-between border-b-2 border-black p-4">
                <h1 className='w-1/2 text-3xl font-bold mb-4'>Crea Profesores</h1>
                <p className='w-1/2'>
                    Un docente universitario es un <i>profesional</i> que se
                    dedica a la enseñanza en el nivel superior principal
                    responsabilidad es impartir
                    <b>conocimientos</b> y <b>habilidades</b> a los estudiantes,
                    fomentando su desarrollo <u>academico y profesional.</u>
                </p>
            </div>

            <div className='flex justify-end mt-6'>
                <button
                    onClick={() => navigate(-1)}
                    className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
                >
                    Volver
                </button>
            </div>

            {errores?.length && errores.map((error, i) => (
                <Error key={i}>{error}</Error>
            ))}
            <Form
                method='POST'
                noValidate
            >
                <Formulario />

                <input
                    type='submit'
                    value='Crear profesor'
                    className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer w-full text-xl'
                />

            </Form>
        </>
    )

}
