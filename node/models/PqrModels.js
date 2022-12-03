import db from "../database/db.js";

import { DataTypes } from "sequelize"


const PqrModels = db.define('Solicitud_De_Pqrs', {
   preguntauno: { type: DataTypes.STRING },
   descripcion: { type: DataTypes.STRING },
   nombre_apellido: { type: DataTypes.STRING },
   correo: { type: DataTypes.STRING },

})

export default PqrModels