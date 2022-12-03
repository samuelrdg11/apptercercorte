import React from 'react'

const Peticion = ({ image, title, price, category }) => {

    return (
        <div>
            <section className='card info'>
                <img className='img' src={image} alt={title} />
                <center>
                    <p><i>Nombre:</i> {title}</p>
                    <p><i>Precio:</i> {price}</p>
                    <p><i>Categoria:</i> {category}</p>
                </center>
            </section>
        </div>
    )
}


export default Peticion