import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'

const URI = 'http://localhost:8000/Productos/'

const CompShowProducts = () => {
    const [productos, setProducts] = useState([])
    const [producto, setProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [nombre_apellido, setNombre_apellido] = useState('')
    const [correo, setCorreo] = useState('')

   

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const res = await axios.get(URI)
        setProducts(res.data)
    }

    const createProducts = async (e) => {
        e.preventDefault()
        await axios.post(URI, { producto: producto, cantidad: cantidad, nombre_apellido: nombre_apellido, correo: correo })
        getProducts()
        
    }

    const deleteProducts = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProducts()
    }
    return (
        <div className='container'>   
            <div className="row">
                <div >
                    <h3>Crear Solicitud de Producto</h3>
                    <form onSubmit={createProducts}>

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
                            <button className="btn btn-outline-primary mb-3" type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col">

                        <table className="table table-striped table-responsive table-dark table-responsive">
                            <caption>Solicitudes de producto</caption>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Nombre-Apellido</th>
                                    <th>Correo</th>
                                    <th>Eliminar</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(
                                    productos.map((producto) => (
                                        <tr key={producto.id}>
                                            <td>{producto.producto}</td>
                                            <td>{producto.cantidad}</td>
                                            <td>{producto.nombre_apellido}</td>
                                            <td>{producto.correo}</td>
                                            <td>
                                                <Link to={`/editar/${producto.id}`} className="btn btn-danger btn-sm mx-2 float-end">Editar</Link>
                                            </td>
                                            <td>
                                                <button className="btn btn-success btn-sm mx-2 float-end"
                                                    onClick={() => deleteProducts(producto.id)}> Eliminar </button>
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

export default CompShowProducts