// import React from 'react'
// import { useEffect } from 'react'
// import Paginacion from './Paginacion'
// import ProductsList from './ProductsList'
// // import { Link } from 'react-router-dom'
// import Encuesta from './Encuesta'

// const Consumo = () => {
//     const [productos, setProductos] = React.useState([])
//     const [paginaActual, setPaginaActual] = React.useState(1);
//     const [publiPorPagina] = React.useState(4);

//     const obtenerProductos = async () => {
//         try {
//             const res = await fetch(`https://fakestoreapi.com/products`);
//             const results = await res.json()
//             setProductos(results)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         obtenerProductos();
//     }, [])


//     const indiceUltimoPost = paginaActual * publiPorPagina;
//     const indicePrimerPost = indiceUltimoPost - publiPorPagina;
//     const publiActual = productos.slice(indicePrimerPost, indiceUltimoPost)
//     const paginar = numeroPaginas => setPaginaActual(numeroPaginas);

//     return (
//         <div>
//             <ProductsList productos={publiActual} />
//             <Paginacion postsPorPagina={publiPorPagina} totalPosts={productos.length} paginar={paginar} />
//         </div>
        
//     )
// }

// export default Consumo