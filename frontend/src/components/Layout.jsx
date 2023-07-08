import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Modal, Box } from '@mui/material'
import Header from './Header'
import useProfesor from '../hooks/useProfesor'
import ModalProfesor from './ModalProfesor'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1
}

export default function Layout () {

    const location = useLocation()

    const { modal, handleChangeModal } = useProfesor()

    return (
        <>
            <Header />
            <div className="md:min-h-full md:flex p-2">
                <aside className="md:w-1/4 bg-white md:min-h-full shadow-xl pb-6">
                    <h1 className="text-2xl m-0 text-white py-3 bg-orange-500 text-center">
                        Menú
                    </h1>
                    <ul className="px-1">
                        <li className="mt-5 py-4 px-2 cursor-pointer border-l-4 border-orange-500 hover:bg-orange-300 transition-colors">
                            <Link
                                to="/"
                                className={`${
                                    location.pathname === '/'
                                        ? 'text-orange-600'
                                        : 'text-black'
                                } text-start font-bold text-xl`}
                            >
                                Profesores
                            </Link>
                        </li>
                        <li className="mt-5 py-4 px-2 cursor-pointer border-l-4 border-orange-500 hover:bg-orange-300 transition-colors">
                            <Link
                                to="/docentes"
                                className={`${
                                    location.pathname === '/docentes'
                                        ? 'text-orange-600'
                                        : 'text-black'
                                } text-start text-black font-bold text-xl`}
                                href="#"
                            >
                                Crear profesor
                            </Link>
                        </li>
                    </ul>
                </aside>
                <main className="md:w-3/4 md:h-full overflow-scroll">
                    <div className="bg-white  mx-7 p-10 shadow-xl">
                        <Outlet />
                    </div>
                </main>
                {modal && (
                    <Modal open={modal} onClose={handleChangeModal}>
                        <Box sx={style}>
                            <ModalProfesor />
                        </Box>
                    </Modal>
                )}

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )

}
