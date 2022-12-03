import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Productos/'

const CompEditarProducts = () => {
    const [producto, setProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [nombre_apellido, setNombre_apellido] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const updateProduct = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, { producto: producto, cantidad: cantidad, nombre_apellido: nombre_apellido, correo: correo })
        navigate('/Productos')
    }

    useEffect(() => {
        getProductsId()
    }, [])

    const getProductsId = async () => {
        const res = await axios.get(URI + id)
        setProducto(res.data.producto)
        setCantidad(res.data.cantidad)
        setNombre_apellido(res.data.nombre_apellido)
        setCorreo(res.data.correo)
    }

    return (
        <div className="container">
        <div className="row">
            <div>
            <h3>Editar Solicitud</h3>
            <form onSubmit={updateProduct}>
                <h6>Producto</h6>
                <input type="text"
                    placeholder="Ingrese el producto a solicitar"
                    className="form-control mb-2 text-black"
                    onChange={(e) => { setProducto(e.target.value) }}
                    value={producto}
                />
                <h6>Cantidad</h6>
                <input type="text"
                    placeholder="Ingrese la cantidad del producto"
                    className="form-control mb-2 text-black"
                    onChange={(e) => { setCantidad(e.target.value) }}
                    value={cantidad}
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
        <Link to="/Productos" className='text-center text-primary text-muted'>Regresar</Link>
        </div>
    )

}

export default CompEditarProducts