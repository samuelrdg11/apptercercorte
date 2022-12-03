import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/Encuestas/'

const CompShowEncuestas = () => {
    const [encuestas, setEncuestas] = useState([])
    const [preguntauno, setPreguntauno] = useState('')
    const [preguntados, setPreguntados] = useState('')
    const [preguntatres, setPreguntatres] = useState('')
    const [sugerencia, setSugerencia] = useState('')



    useEffect(() => {
        getEncuestas()
    }, [])

    const getEncuestas = async () => {
        const res = await axios.get(URI)
        setEncuestas(res.data)
    }

    const createEncuestas = async (e) => {
        e.preventDefault()
        await axios.post(URI, { preguntauno: preguntauno, preguntados: preguntados, preguntatres: preguntatres, sugerencia: sugerencia })
        getEncuestas()

    }

    const deleteEncuestas = async (id) => {
        await axios.delete(`${URI}${id}`)
        getEncuestas()
    }
    return (
        <div className='container'>
            {/* <Link to="/" className='text-center text-primary text-muted'>SHOPEE COMPANY </Link> */}
            <div className="row">
                <div >
                    <h3>Llenar Encuesta de Satisfaccion</h3>
                    <form onSubmit={createEncuestas}>

                        <h6> Pregunta 1 </h6>
                        <select
                            className='form-select form-control mb-3'
                            onChange={(e) => { setPreguntauno(e.target.value) }}
                            value={preguntauno}
                        >
                            <option defaultChecked value="" disabled>¿Cuánto tiempo lleva comprando nuestros productos?</option>
                            <option >Es primera vez</option>
                            <option >Menos de 6 meses</option>
                            <option >Entre 6 meses y 2 años</option>
                            <option >Entre 2 y 3 años</option>
                            <option >Más de 3 años</option>
                        </select>

                        <h6> Pregunta 2 </h6>
                        <select
                            className='form-select form-control mb-3'
                            onChange={(e) => { setPreguntados(e.target.value) }}
                            value={preguntados}
                        >
                            <option defaultChecked value="" disabled>¿Cómo calificaría el nivel general de satisfacción de nuestro servicio?</option>
                            <option >Muy satisfecho</option>
                            <option >Algo satisfecho</option>
                            <option >Neutral</option>
                            <option >Algo insatisfecho</option>
                            <option >Muy insatisfecho</option>
                        </select>

                        <h6> Pregunta 3 </h6>
                        <select
                            className='form-select form-control mb-3'
                            onChange={(e) => { setPreguntatres(e.target.value) }}
                            value={preguntatres}
                        >
                            <option defaultChecked value="" disabled>¿Nos ha recomendado alguna vez con amigos o familiares?</option>
                            <option >No, nunca los he recomendado</option>
                            <option >Los he recomendado una vez</option>
                            <option >Los he recomendado más de una vez</option>
                        </select>

                        <h6 >Sugerencia</h6>
                        <textarea className='form-select form-control mb-3'
                            onChange={(e) => { setSugerencia(e.target.value) }}
                            value={sugerencia}
                        ></textarea>

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
                            <caption>Lista de Encuestas</caption>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Pregunta Uno</th>
                                    <th>Pregunta Dos</th>
                                    <th>Pregunta Tres</th>
                                    <th>Sugerencia</th>
                                    <th>Eliminar</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(
                                    encuestas.map((encuesta) => (
                                        <tr key={encuesta.id}>
                                            <td>{encuesta.preguntauno}</td>
                                            <td>{encuesta.preguntados}</td>
                                            <td>{encuesta.preguntatres}</td>
                                            <td>{encuesta.sugerencia}</td>
                                            <td>
                                                <Link to={`/editarEncu/${encuesta.id}`} className="btn btn-danger btn-sm mx-2 float-end">Editar</Link>
                                                {/* <button className="btn btn-success btn-sm mx-2 float-end"
                                                    onClick={() => getEncuestasById(preguntauno)}> Editar </button> */}
                                            </td>
                                            <td>
                                                <button className="btn btn-success btn-sm mx-2 float-end"
                                                    onClick={() => deleteEncuestas(encuesta.id)}> Eliminar </button>
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

export default CompShowEncuestas

