import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import useProfesor from '../hooks/useProfesor'
import { Form, redirect, useNavigate } from 'react-router-dom'
import { deleteProfesor } from '../services/apiProfesores'
import { toast } from 'react-toastify'

export async function action ({ params }) {

    await deleteProfesor(params._id)
    toast.success('Profesor eliminado con éxito')
    return redirect('/')

}

export default function ModalProfesor () {

    const { ModalProfesor, handleChangeModal } = useProfesor()

    const navigate = useNavigate()

    return (
        <Card sx={{ minWidth: 500, height: 'auto' }}>
            <CardMedia
                sx={{ height: 250, objectFit: 'cover' }}
                image="/img/imagen.png"
                title={`Imagen del profesor ${ModalProfesor.name}`}
            />

            <CardContent>
                <Typography gutterBottom component='div' variant='h5'>
                    {ModalProfesor.name} {ModalProfesor.lastName}
                </Typography>
                <p>
                    <span className='text-orange-500 font-bold'>Cedula:</span> {ModalProfesor.typeId} {ModalProfesor.id}
                </p>
                <p>
                    <span className='text-orange-500 font-bold'>E-Mail:</span> {ModalProfesor.email}
                </p>
                <p>
                    <span className='text-orange-500 font-bold'>Tipo de contrato:</span> {ModalProfesor.contract}
                </p>

                <p>
                    <span className='text-orange-500 font-bold'>Genero:</span> {ModalProfesor.gender}
                </p>
                <p>
                    <span className='text-orange-500 font-bold'>Direccion:</span> {ModalProfesor.address}
                </p>
            </CardContent>

            <CardActions sx={{ gap: '2rem' }}>
                <Form
                    method='POST'
                    action={`/docentes/eliminar/${ModalProfesor._id}`}
                    onSubmit= {(e) => {

                        if (!confirm('¿Estas seguro que quieres eliminar este profesor?')) {

                            e.preventDefault()

                        } else {

                            handleChangeModal()

                        }

                    }}
                >
                    <button type='submit' className='transition inline bg-red-500 hover:bg-red-600 px-4 py-2  text-white rounded leading-none w-[88px]'>Eliminar</button>
                </Form>
                <button
                    onClick={() => {

                        navigate(`/docentes/actualizar/${ModalProfesor._id}`)
                        handleChangeModal()

                    }}
                    className='transition inline bg-blue-600 hover:bg-blue-800 px-4 py-2  text-white rounded leading-none w-[88px]'>Editar</button>
            </CardActions>
        </Card>
    )

}
