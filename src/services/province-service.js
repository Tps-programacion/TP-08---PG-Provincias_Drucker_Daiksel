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

    addProvince = async (provinciaAgregar) => {
        try {
            const provinciaParaAgregar = new Province();{
                id = provinciaAgregar.id;
                nombre = provinciaAgregar.nombre;
                nombre_completo = provinciaAgregar.nombre_completo;
                latitud = provinciaAgregar.latitud;
                longitud = provinciaAgregar.longitud;
                orden_visualizacion = provinciaAgregar.orden_visualizacion;
            }
            //Hacer logica de negocio para validar provincia
            const nuevaProvincia = await this.provinceRepository.addProvince(provinciaParaAgregar);
            return nuevaProvincia;
        }
        catch (error) {
            throw new Error("No fue posible agregar la provincia a la base de datos");
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