import mongoose from 'mongoose'
import request from 'supertest'
import { MongoMemoryServer } from 'mongodb-memory-server'
import app from './server.js'
import Docente from '../models/Docente.js'

describe('crearProfesor', () => {
    let mongoServer

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create()
        const mongoUri = mongoServer.getUri()

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    })

    afterAll(async () => {
        await mongoose.connection.close()
        await mongoServer.stop()
        
    })

    beforeEach(async () => {
        await Docente.deleteMany({})
    })

    it('should create a new professor', async () => {
        const newProfessor = {
            nombres: 'John',
            apellidos: 'Doe',
            genero: 'Masculino',
            tipocontrato: 'Tiempo completo',
            tipo_id: 'Cédula',
            id: '123456789',
            email: 'johndoe@example.com',
            direccion: '123 Main St'
        }

        const response = await request(app)
            .post('/api/docentes')
            .send(newProfessor)

        expect(response.status).toBe(201)
        expect(response.body.msg).toBe('Profesor creado correctamente')

        const savedProfessor = await Docente.findOne({ id: newProfessor.id })
        expect(savedProfessor).toBeTruthy()
        expect(savedProfessor.nombres).toBe(newProfessor.nombres)
        expect(savedProfessor.apellidos).toBe(newProfessor.apellidos)
        expect(savedProfessor.genero).toBe(newProfessor.genero)
        expect(savedProfessor.tipocontrato).toBe(newProfessor.tipocontrato)
        expect(savedProfessor.tipo_id).toBe(newProfessor.tipo_id)
        expect(savedProfessor.email).toBe(newProfessor.email)
        expect(savedProfessor.direccion).toBe(newProfessor.direccion)
    })

    it('should return an error if the professor already exists', async () => {
        const existingProfessor = {
            nombres: 'Jane',
            apellidos: 'Smith',
            genero: 'Femenino',
            tipocontrato: 'Medio tiempo',
            tipo_id: 'Cédula',
            id: '987654321',
            email: 'janesmith@example.com',
            direccion: '456 Elm St'
        }
        await Docente.create(existingProfessor)

        const duplicateProfessor = {
            nombres: 'John',
            apellidos: 'Doe',
            genero: 'Masculino',
            tipocontrato: 'Tiempo completo',
            tipo_id: 'Cédula',
            id: '987654321', // Same ID as existingProfessor
            email: 'johndoe@example.com',
            direccion: '123 Main St'
        }

        const response = await request(app)
            .post('/api/docentes')
            .send(duplicateProfessor)

        expect(response.status).toBe(400)
        expect(response.body.msg).toBe('El profesor ya existe')
    })
})
