import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Pqrs/'

const CompEditarPqrs = () => {
    const [preguntauno, setPreguntauno] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nombre_apellido, setNombre_apellido] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updatePqr = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, { preguntauno: preguntauno, descripcion: descripcion, nombre_apellido: nombre_apellido, correo: correo })
        navigate('/Pqr')
    }

    useEffect(() => {
        getPqrsId()
    }, [])

    const getPqrsId = async () => {
        const res = await axios.get(URI + id)
        setPreguntauno(res.data.preguntauno)
        setDescripcion(res.data.descripcion)
        setNombre_apellido(res.data.nombre_apellido)
        setCorreo(res.data.correo)
    }

    return (
        <div className="container">
            <div className="row">
                <div>
                    <h3>Editar Solicitud de Pqr</h3>
                    <form onSubmit={updatePqr}>
                        <h6>Pregunta 1</h6>
                        <select
                            className='form-control mb-2 text-black'
                            onChange={(e) => { setPreguntauno(e.target.value) }}
                            value={preguntauno}
                        >
                            <option defaultChecked value="" disabled>Tipo de solicitud</option>
                            <option >Peticion</option>
                            <option >Queja</option>
                            <option >Reclamo</option>
                        </select>
                        <h6>Descripcion</h6>
                        <textarea className='form-control mb-2 text-black'
                            onChange={(e) => { setDescripcion(e.target.value) }}
                            value={descripcion}
                        />
                        <h6>Nombre y apellido</h6>
                        <input type="text"
                            placeholder="Ingrese su Nombre y Apellido"
                            className="form-control mb-2 text-black"
                            onChange={(e) => { setNombre_apellido(e.target.value) }}
                            value={nombre_apellido}
                        />
                        <h6>Correo</h6>
                        <input type="text"
                            placeholder="Ingrese su correo"
                            className="form-control mb-2 text-black"
                            onChange={(e) => { setCorreo(e.target.value) }}
                            value={correo}
                        />
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-outline-primary mb-3">Editar</button>
                        </div>
                    </form>

                </div>
            </div>
            <Link to="/Pqr" className='text-center text-primary text-muted'>Regresar</Link>
        </div>
    )

}

export default CompEditarPqrs