import { useRouteError } from 'react-router-dom'

function ErrorPage () {

    const error = useRouteError()

    return (
        <div>
            <h1 className='text-center text-6xl font-bold mt-20 text-orange-500'>Crear Profesores</h1>
            <p className='text-center'>{error.statusText || error.message}</p>
        </div>
    )

}

export default ErrorPage
