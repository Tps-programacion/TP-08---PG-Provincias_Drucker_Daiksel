import ProvinceRepository from "../repositories/province-repository.js";
import Province from "../entities/province.js";
class provinceService {
    constructor() {
        this.provinceRepository = new ProvinceRepository();
    }

    getProvinces = async () => {
            const provinces = await this.provinceRepository.getProvinces();
            return provinces;
    }

    getProvincesById = async (id) => {
        if (validarId(id)) {
        const provinces = await this.provinceRepository.getProvincesById(id);
        return provinces;
        }
        else {
            throw new Error("ID inválido. Debe ser un número entero positivo.");
        }
    }

}
    function validarId(id) {
        const idNum = parseInt(id);
        if (isNaN(idNum) || idNum <= 0) {
            return false;
        }
        else return true;
    }
export default provinceService;