import ProvinceRepository from "../repositories/province-repository.js";
import Province from "../entities/province.js";
import { validarProvincia } from "../helpers/validaciones-helper.js";
import { validarId } from "../helpers/validaciones-helper.js";
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
    
            const mensajeValidador = validarProvincia(provinciaAgregar);
            if(mensajeValidador === null){
                    const provinciaParaAgregar = new Province();
                    provinciaParaAgregar.nombre = provinciaAgregar.nombre;
                    provinciaParaAgregar.nombre_completo = provinciaAgregar.nombre_completo;
                    provinciaParaAgregar.latitud = provinciaAgregar.latitud;
                    provinciaParaAgregar.longitud = provinciaAgregar.longitud;
                    provinciaParaAgregar.orden_visualizacion = provinciaAgregar.orden_visualizacion;
                    
                    const nuevaProvincia = await this.provinceRepository.addProvince(provinciaParaAgregar);
                    
                    return nuevaProvincia;   
            }
            else{
                throw new Error(mensajeValidador);
            }
}
    deleteProvinceById = async (id) => {
        if(validarId(id)){
            const rowsAffected = await this.provinceRepository.deleteProvinceById(id);
            return rowsAffected;
        }    
        else {
            throw new Error("ID inválido. Debe ser un número entero positivo.");
        }
        
    }

    updateProvince = async (provinciaActualizar) => {
        if (!validarId(provinciaActualizar.id)) {
            throw new Error("El ID proporcionado no es válido. Debe ser un número entero positivo.");
        }
        const mensajeValidador = validarProvincia(provinciaActualizar);
        if (mensajeValidador !== null) {
            throw new Error(mensajeValidador);
        }
        const rowsAffected = await this.provinceRepository.updateProvince(provinciaActualizar);
        
        return rowsAffected;
    }

}

export default provinceService;