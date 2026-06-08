import ProvinceRepository from "../repositories/province-repository.js";
import Province from "../entities/province.js";
import validaciones from "../helpers/validaciones-helper.js"
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
    
            const mensajeValidador = validaciones.validarProvincia(provinciaAgregar);
            if(mensajeValidador === null){
                    try {
                    
                    const provinciaParaAgregar = new Province(null, provinciaAgregar.nombre, provinciaAgregar.nombre_completo, provinciaAgregar.latitud, provinciaAgregar.longitud, provinciaAgregar.orden_visualizacion);
                    const nuevaProvincia = await this.provinceRepository.addProvince(provinciaParaAgregar);
                    return nuevaProvincia;
                }
                catch (error) {
                    throw new Error("No fue posible agregar la provincia a la base de datos");
                }
            }
            else{
                throw new Error(mensajeValidador);
            }
            
            

}
}

export default provinceService;