import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Encuestas/'

const CompEditarEncuestas = () => {
    const [preguntauno, setPreguntauno] = useState('')
    const [preguntados, setPreguntados] = useState('')
    const [preguntatres, setPreguntatres] = useState('')
    const [sugerencia, setSugerencia] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updateEncuesta = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, { preguntauno: preguntauno, preguntados: preguntados, preguntatres: preguntatres, sugerencia: sugerencia })
        navigate('/Encuesta')
    }

    useEffect(() => {
        getEncuestaId()
    }, [])

    const getEncuestaId = async () => {
        const res = await axios.get(URI + id)
        setPreguntauno(res.data.preguntauno)
        setPreguntados(res.data.preguntados)
        setPreguntatres(res.data.preguntatres)
        setSugerencia(res.data.sugerencia)
    }

    return (
        <div className="container">
            <div className="row">
                <div>
                    <h3>Editar Encuesta</h3>
                    <form onSubmit={updateEncuesta}>

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
                            <button type="submit" className="btn btn-outline-primary mb-3">Editar</button>
                        </div>
                    </form>

                </div>
            </div>
            <Link to="/Encuesta" className='text-center text-primary text-muted'>Regresar</Link>
        </div>
    )

}

export default CompEditarEncuestas