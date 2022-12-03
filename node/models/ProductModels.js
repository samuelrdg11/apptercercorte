import db from "../database/db.js";

import { DataTypes } from "sequelize"


const ProductModels = db.define('Solicitud_De_Producto', {
    producto: { type: DataTypes.STRING },
    cantidad: { type: DataTypes.STRING },
    nombre_apellido:{type: DataTypes.STRING},
    correo:{type: DataTypes.STRING}
})

// db.define('Solicitud_De_Pqr',{
//     preguntauno:{type: DataTypes.STRING},
//     descripcion:{type: DataTypes.STRING},
//     nombre_apellido:{type: DataTypes.STRING},
//     correo:{type: DataTypes.STRING},
//     telefono:{type: DataTypes.STRING}

// })

// db.define('Encuesta_De_Satisfaccion',{
//     preguntauno:{type: DataTypes.STRING},
//     preguntados:{type: DataTypes.STRING},
//     preguntatres:{type: DataTypes.STRING},
//     sugerencia:{type: DataTypes.STRING}

// })

// db.define('Persona',{
//     identificacion:{type: DataTypes.STRING},
//     nombre_apellido:{type: DataTypes.STRING},
//     correo:{type: DataTypes.STRING},
//     telefono:{type: DataTypes.STRING}

// })

// db.define('Pregunta_Uno_Pqr',{
//     peticion:{type: DataTypes.STRING},
//     queja:{type: DataTypes.STRING},
//     reclamo:{type: DataTypes.STRING}
// })

// db.define('Pregunta_Uno',{
//     primera_vez:{type: DataTypes.STRING},
//     menos_de_seis_meses:{type: DataTypes.STRING},
//     entre_seismeses_y_dosaños:{type: DataTypes.STRING},
//     entre_dosaños_y_tresaños:{type: DataTypes.STRING},
//     mas_de_tres_años:{type: DataTypes.STRING}
// })

// db.define('Pregunta_Dos',{
//     muy_satisfecho:{type: DataTypes.STRING},
//     algo_satisfecho:{type: DataTypes.STRING},
//     neutral:{type: DataTypes.STRING},
//     algo_insatisfecho:{type: DataTypes.STRING},
//     muy_insatisfecho:{type: DataTypes.STRING}
// })
// db.define('Pregunta_Tres',{
//     no_nunca_loshe_recomendado:{type: DataTypes.STRING},
//     loshe_recomendado_unavez:{type: DataTypes.STRING},
//     loshe_recomendado_masde_unavez:{type: DataTypes.STRING}
// })


export default ProductModels