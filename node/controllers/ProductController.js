import ProductModels from "../models/ProductModels.js";

export const getAllProdu = async (req, res) => {
    try {
        const Producto = await ProductModels.findAll()
        res.json(Producto)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const showProdu = async (req, res) => {
    try {
        const Producto = await ProductModels.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(Producto[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createProdu = async (req, res) => {
    try {
        await ProductModels.create(req.body)
        res.json({
            "message": "¡Solicitud creada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateProdu = async (req, res) => {
    try {
        await ProductModels.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "¡Solicitud actualizada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteProdu = async (req, res) => {
    try {
        await ProductModels.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "¡Solicitud eliminada correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}