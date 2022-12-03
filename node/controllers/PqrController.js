import PqrModels from "../models/PqrModels.js";

export const getAllPqr = async (req, res) => {
    try {
        const Pqrs = await PqrModels.findAll()
        res.json(Pqrs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const showPqr = async (req, res) => {
    try {
        const Pqr = await PqrModels.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(Pqr[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createPqr = async (req, res) => {
    try {
        await PqrModels.create(req.body)
        res.json({
            "message": "¡Pqr creada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updatePqr = async (req, res) => {
    try {
        await PqrModels.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "¡Pqr actualizada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deletePqr = async (req, res) => {
    try {
        await PqrModels.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "¡Pqr eliminada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}