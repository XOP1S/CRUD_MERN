import moongose from 'mongoose'

const docenteSchema = moongose.Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },

    apellidos: {
        type: String,
        required: true,
        trim: true
    },

    genero: {
        type: String,
        required: true,
        trim: true

    },

    tipocontrato: {
        type: String,
        required: true,
        trim: true
    },

    tipo_id: {
        type: String,
        required: true,
        trim: true
    },

    id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    direccion: {
        type: String,
        required: true,
        trim: true
    }

})

const Docente = moongose.model('Docente', docenteSchema)

export default Docente