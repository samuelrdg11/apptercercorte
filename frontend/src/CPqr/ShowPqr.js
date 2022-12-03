import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Pqrs/'

const CompShowPqrs = () => {
    const [pqrs, setPqrs] = useState([])
    const [preguntauno, setPreguntauno] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nombre_apellido, setNombre_apellido] = useState('')
    const [correo, setCorreo] = useState('')
  

    useEffect(() => {
        getPqrs()
    }, [])

    const getPqrs = async () => {
        const res = await axios.get(URI)
        setPqrs(res.data)
    }

    const createPqrs = async (e) => {
        e.preventDefault()
        await axios.post(URI, { preguntauno: preguntauno, descripcion: descripcion, nombre_apellido: nombre_apellido, correo: correo })
        getPqrs()
        
    }

    const deletePqrs = async (id) => {
        await axios.delete(`${URI}${id}`)
        getPqrs()
    }
    return (
        <div className='container'>

            <div className="row">
                <div>
                    <h3>Crear Solicitud de Pqrs</h3>
                    <form onSubmit={createPqrs}>

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
                            {/* {
                                modoEdicion ? <button className="btn btn-outline-warning mb-3" type="submit">Editar</button>
                                    : <button className="btn btn-outline-primary mb-3" type="submit">Agregar</button>
                            } */}
                            <button className="btn btn-outline-primary mb-3" type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col">

                        <table className="table table-striped table-responsive table-dark table-responsive">
                            <caption>Solicitudes de Pqrs</caption>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Preguntauno</th>
                                    <th>Descripcion</th>
                                    <th>Nombre-Apellido</th>
                                    <th>Correo</th>
                                    <th>Eliminar</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(
                                    pqrs.map((pqr) => (
                                        <tr key={pqr.id}>
                                            <td>{pqr.preguntauno}</td>
                                            <td>{pqr.descripcion}</td>
                                            <td>{pqr.nombre_apellido}</td>
                                            <td>{pqr.correo}</td>
                                            <td>
                                                <Link to={`/editarPqr/${pqr.id}`} className="btn btn-danger btn-sm mx-2 float-end">Editar</Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-success btn-sm mx-2 float-end"
                                                    onClick={() => deletePqrs(pqr.id)}> Eliminar </button>
                                            </td>

                                        </tr>
                                    )
                                    )
                                )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Link to="/" className='text-center text-primary text-muted'>Regresar a Inicio</Link>
        </div>
    )
}

export default CompShowPqrs