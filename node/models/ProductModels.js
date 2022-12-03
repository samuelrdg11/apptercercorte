import db from "../database/db.js";

import { DataTypes } from "sequelize"


const ProductModels = db.define('Solicitud_De_Producto', {
    producto: { type: DataTypes.STRING },
    cantidad: { type: DataTypes.STRING },
    nombre_apellido:{type: DataTypes.STRING},
    correo:{type: DataTypes.STRING}
})

export default ProductModels