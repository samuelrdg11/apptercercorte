import React from 'react'
import Peticion from './Peticion'

const ProductsList = ({ productos }) => {
    return (
        <div>
            <ul>
                {
                    productos.map((productos, i) => (
                        <Peticion key={i} productos={productos.id} {...productos} />
                    ))
                }
            </ul>
        </div>

    )
}

export default ProductsList