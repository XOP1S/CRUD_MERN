import { useContext } from 'react'
import { ProfesorContext } from '../context/ProfesorContext'

export default function useProfesor () {

    return useContext(ProfesorContext)

}
