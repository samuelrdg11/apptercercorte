import React from 'react'

const Paginacion = ({ postsPorPagina, totalPosts, paginar }) => {
    const numeroPaginas = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPorPagina); i++) {
        numeroPaginas.push(i);
    }


    return (

        <div className='pagination'>
            <ul className='pagination'>
                {numeroPaginas.map(numero => (
                    <li key={numero} className='page-item'>
                        <a onClick={() => paginar(numero)} href='javascript:' className='page-link' id='pagination'>
                            {numero}
                        </a>

                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Paginacion