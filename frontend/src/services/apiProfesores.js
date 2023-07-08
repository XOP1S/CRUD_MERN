export async function getProfesores () {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/docentes`)
        const data = await response.json()

        return data.map(teacher => ({
            _id: teacher._id,
            id: teacher.id,
            name: teacher.nombres,
            lastName: teacher.apellidos,
            address: teacher.direccion,
            email: teacher.email,
            gender: teacher.genero,
            typeId: teacher.tipo_id,
            contract: teacher.tipocontrato
        }))

    } catch (error) {

        throw new Error(error)

    }

}

export async function getProfesorById (id) {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/docentes/profesor/${id}`)
        const data = await response.json()

        return data

    } catch (error) {

        throw new Error(error)

    }

}

export async function addProfesor (data) {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/docentes`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()

    } catch (error) {

        console.log(error)

    }

}

export async function updateProfesor (id, data) {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/docentes/actualizar/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()

    } catch (error) {

        console.log(error)

    }

}

export async function deleteProfesor (id) {

    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/docentes/eliminar/${id}`, {
            method: 'DELETE'
        })

        await response.json()

    } catch (error) {

        console.log(error)

    }

}
