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
}



);

router.post("/", async (req, res) => {
    const provinciaAgregar = req.body;
        try {
            const nuevaProvincia = await provinceService.addProvince(provinciaAgregar);
            res.status(StatusCodes.CREATED).json(nuevaProvincia);
        }
        catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }

}
);
    export default router;