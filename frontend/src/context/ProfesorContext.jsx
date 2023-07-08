import { createContext, useState } from 'react'

export const ProfesorContext = createContext()

export default function ProfesorProvider ({ children }) {

    const [modal, setModal] = useState(false)
    const [ModalProfesor, setModalProfesor] = useState({})

    const handleChangeModal = () => {

        setModal(!modal)

    }

    const handleChangeModalProfesor = (profesor) => {

        setModalProfesor(profesor)

    }

    return (
        <ProfesorContext.Provider value={{
            modal,
            handleChangeModal,
            ModalProfesor,
            handleChangeModalProfesor,
            setModalProfesor
        }}>
            {children}
        </ProfesorContext.Provider>
    )

}
