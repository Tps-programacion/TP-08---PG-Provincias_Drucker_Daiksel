import ProvinceRepository from "../repositories/province-repository.js";
import Province from "../entities/province.js";
import Helper from "../helpers/validaciones-helper.js"
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
    
            const mensajeValidador = Helper.validadorDatos()
            if(mensajeValidador === null){
                    try {
                    
                    const provinciaParaAgregar = new Province();
                    provinciaParaAgregar.nombre = provinciaAgregar.nombre;
                    provinciaParaAgregar.nombre_completo = provinciaAgregar.nombre_completo;
                    provinciaParaAgregar.latitud = provinciaAgregar.latitud;
                    provinciaParaAgregar.longitud = provinciaAgregar.longitud;
                    provinciaParaAgregar.orden_visualizacion = provinciaAgregar.orden_visualizacion;
                    
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
    function validarId(id) {
        const idNum = parseInt(id);
        if (isNaN(idNum) || idNum <= 0) {
            return false;
        }
        else return true;
    }
export default provinceService;