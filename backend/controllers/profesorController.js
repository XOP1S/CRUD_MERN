import Docente from '../models/Docente.js'

const consultarProfesor = async (req, res) => {
    try {
        const docentes = await Docente.find()
        res.status(200).json(docentes)
    } catch (error) {
        console.log(error)
    }
}

const consultarProfesorPorId = async (req, res) => {

    try {
        const docente = await Docente.findById(req.params.id)
        res.status(200).json(docente)
    } catch (error) {
        console.log(error)
    }
}

const crearProfesor = async (req, res) => {
    const { id } = req.body
    const existeDocente = await Docente.findOne({ id })

    if (existeDocente) {
        res.status(400).json({ msg: 'El profesor ya existe' })
    }

    try {
        const docente = new Docente(req.body)
        await docente.save()
        res.status(201).json({ msg: 'Profesor creado correctamente' })
    } catch (error) {
        console.log(error)
    }
}

const actualizarProfesor = async (req, res) => {

    const { nombres, apellidos, genero, tipocontrato, tipo_id, id, email, direccion } = req.body

    try {
        const docente = await Docente.findById(req.params.id)
        docente.nombres = nombres
        docente.apellidos = apellidos
        docente.genero = genero
        docente.tipocontrato = tipocontrato
        docente.tipo_id = tipo_id
        docente.id = id
        docente.email = email
        docente.direccion = direccion

        await docente.save()
        res.status(200).json({ msg: 'Profesor actualizado correctamente' })
    } catch (error) {
        console.log(error)
    }
}

const eliminarProfesor = async (req, res) => {

    try {
        const docente = await Docente.findById(req.params.id)
        await docente.remove()
        res.status(200).json({ msg: 'Profesor eliminado correctamente' })
    } catch (error) {
        console.log(error)
    }
}

export { consultarProfesor, crearProfesor, consultarProfesorPorId, actualizarProfesor, eliminarProfesor }
