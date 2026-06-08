import dbConfig from "../configs/db-config.js";

class ProvinceRepository {
    async getProvinces() {
        try {
            const query = "SELECT * FROM provincias";
            const result = await dbConfig.query(query);
            return result.rows;
        } catch (error) {
            throw new Error("No fue posible acceder a la base de datos");
        }
}

    async getProvincesById(id) {
        try {
            const query = "SELECT * FROM provincias WHERE id = $1";
            const result = await dbConfig.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error("No fue posible acceder a la base de datos");
        }
    }

    async addProvince(provincia) {
        try {
            const sql = `
                INSERT INTO provincias (nombre, nombre_completo, latitud, longitud, orden_visualizacion) 
                VALUES ($1, $2, $3, $4, $5) 
                RETURNING *;
            `;
            
            const values = [
                provincia.nombre, 
                provincia.nombre_completo, 
                provincia.latitud, 
                provincia.longitud, 
                provincia.orden_visualizacion
            ];
            
            // ACÁ ESTÁ LA MAGIA: Usamos el Pool directamente.
            // Él solito agarra una conexión abierta, ejecuta, y la suelta sin que hagamos nada.
            const result = await dbConfig.query(sql, values);
            return result.rows[0]; 
            
        } catch (error) {
            if (error.code === '23505') {
                throw new Error("Ya existe una provincia registrada con ese nombre.");
            }
            console.error("Error en Repository:", error);
            throw new Error("No fue posible agregar la provincia a la base de datos");
        }
    }
}

export default ProvinceRepository;