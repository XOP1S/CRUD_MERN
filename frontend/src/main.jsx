import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index, { loader as ProfesoresLoader } from './pages/Index.jsx'
import NuevoProfesor, { action as NuevoProfesorAction } from './pages/NuevoProfesor'
import { action as DeleteProfesorAction } from './components/ModalProfesor'
import ProfesorProvider from './context/ProfesorContext'
import EditarProfesor, { action as EditarProfesorAction, loader as EditarProfesorLoader } from './pages/EditarProfesor'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />,
                loader: ProfesoresLoader,
                errorElement: <ErrorPage />
            },
            {
                path: '/docentes',
                element: <NuevoProfesor />,
                action: NuevoProfesorAction,
                errorElement: <ErrorPage />
            },
            {
                path: '/docentes/actualizar/:_id',
                element: <EditarProfesor />,
                loader: EditarProfesorLoader,
                action: EditarProfesorAction
            },
            {
                path: '/docentes/eliminar/:_id',
                action: DeleteProfesorAction
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProfesorProvider>
            <RouterProvider router={router} />
        </ProfesorProvider>
    </React.StrictMode>
)
