import db from "../database/db.js";

import { DataTypes } from "sequelize"


const EncuestaModels = db.define('Encuesta_De_Satisfaccion', {
    preguntauno: { type: DataTypes.STRING },
    preguntados: { type: DataTypes.STRING },
    preguntatres: { type: DataTypes.STRING },
    sugerencia: { type: DataTypes.STRING }

})

export default EncuestaModels