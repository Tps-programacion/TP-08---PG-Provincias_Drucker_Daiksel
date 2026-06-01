import express from "express";
import ProvinceService from "../services/province-service.js";

const router = express.Router();

router.get("/", (req, res) => {
	const provinces = ProvinceService.getAllProvinces();
	return res.status(200).json(provinces);
});

export default router;
