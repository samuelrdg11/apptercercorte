import EncuestaModels from "../models/EncuestaModel.js";

export const getAllEncuest = async (req, res) => {
    try {
        const Encuestas = await EncuestaModels.findAll()
        res.json(Encuestas)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const showEncuest = async (req, res) => {
    try {
        const Encuesta = await EncuestaModels.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(Encuesta[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createEncuest = async (req, res) => {
    try {
        await EncuestaModels.create(req.body)
        res.json({
            "message": "¡Encuesta llenada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateEncuest = async (req, res) => {
    try {
        await EncuestaModels.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "¡Encuesta actualizada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteEncuest = async (req, res) => {
    try {
        await EncuestaModels.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "¡Encuesta eliminada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}