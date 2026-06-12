import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Province from '../entities/province.js';
import ProvinceService from '../services/province-service.js';
const router = Router();
const provinceService = new ProvinceService();

router.get("/", async (req, res) => {
    try{
        const provinces = await provinceService.getProvinces();
        res.status(StatusCodes.OK).json(provinces);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }

});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const province = await provinceService.getProvincesById(id);
        
        if (!province) return res.status(StatusCodes.NOT_FOUND).json({ error: "Provincia no encontrada" });
        else res.status(StatusCodes.OK).json(province);
    }
    catch (error) {
        if (error.message === "ID inválido. Debe ser un número entero positivo.") {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
        }
        else res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    const provinciaAgregar = req.body;
        try {
            const nuevaProvincia = await provinceService.addProvince(provinciaAgregar);
            res.status(StatusCodes.CREATED).json({
                message: "La provincia fue agregada con éxito",
                data: nuevaProvincia
            });
        }
        catch (error) {
        if (error.message === "Ya existe una provincia registrada con ese nombre." || error.message.includes("requerid") || error.message.includes("letras")) {
            return res.status(StatusCodes.BAD_REQUEST).json({ 
            error: error.message 
        });
        } 
        else {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
            error: "Error interno del servidor al agregar la provincia." 
        });
        }
    }
});



router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const rowsAffected = await provinceService.deleteProvinceById(id);

        if (rowsAffected > 0) {
            return res.status(StatusCodes.OK).send("Provincia eliminada con éxito.");
        }
         else {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Provincia no encontrada" });
        }

    } catch (error) {
        if(error.message == "ID inválido. Debe ser un número entero positivo."){
            return res.status(StatusCodes.BAD_REQUEST).json({error: error.message})
        }
        else{
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }
});

router.put("/", async (req, res) => {
    const provinciaActualizar = req.body;

    try {
        const rowsAffected = await provinceService.updateProvince(provinciaActualizar);

        if (rowsAffected > 0) {
            return res.status(StatusCodes.CREATED).json({ 
            message: "Provincia actualizada con éxito." 
            });
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                error: "Provincia no encontrada." 
            });
        }

    } catch (error) {
        if (error.message.includes("No fue posible acceder a la base de datos para actualizar")) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        } 
        else {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
        }
    }
});

    export default router;