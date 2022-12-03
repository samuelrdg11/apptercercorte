import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Paginacion from './Components/Paginacion'
import ProductsList from './Components/ProductsList'
import './App.css';


const Inicio = () => {

    const [productos, setProductos] = React.useState([])
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [publiPorPagina] = React.useState(4);

    const obtenerProductos = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products`);
            const results = await res.json()
            setProductos(results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerProductos();
    }, [])


    const indiceUltimoPost = paginaActual * publiPorPagina;
    const indicePrimerPost = indiceUltimoPost - publiPorPagina;
    const publiActual = productos.slice(indicePrimerPost, indiceUltimoPost)
    const paginar = numeroPaginas => setPaginaActual(numeroPaginas);

    return (
        <div >
            <br />
            <h4 className='text-center text-primary text-muted'>SHOPEE COMPANY</h4>
            <br />
            <center>
                <p>¡Bienvenido a <b>Shopee Company</b>!</p>
                <p>Este aplicativo le permite a usted, usuario, revisar el catalogo de venta, realizar solicitudes de compra, realizar
                    peticiones, quejas, reclamos del servicio prestado.
                    Además, podrá también rellenar una encuesta de satisfacción en pro de la mejora del servicio prestado. </p>
                <br />
            </center>
            <div className='flex-container'>
                <Link to="/Productos" className="btn btn-danger btn-sm mx-1">Solicitud Producto</Link>
                <Link to="/Pqr" className="btn btn-danger btn-sm mx-1">Solicitud Pqr</Link>
                <Link to="/Encuesta" className="btn btn-danger btn-sm mx-1">Encuesta de Satisfaccion</Link>
            </div>
            <div className='consumo'>
                <ProductsList productos={publiActual} />
                <Paginacion postsPorPagina={publiPorPagina} totalPosts={productos.length} paginar={paginar} />
            </div>

        </div>
    )
}

export default Inicio