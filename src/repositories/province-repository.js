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
            const result = await dbConfig.query(sql, values);
            return result.rows[0]; 
            
        } catch (error) {
            if (error.code === '23505') {
                throw new Error("Ya existe una provincia registrada con ese nombre.");
            }
            console.error("Error en Repository:", error);
            throw new Error(error.message); // Esto escupe el error textual de PostgreSQL
        }
    }
    async deleteProvinceById(id) {
        try {
            const query = "DELETE FROM provincias WHERE id = $1";
            const result = await dbConfig.query(query, [id]);
            return result.rowCount; // Devuelve 1 si eliminó algo, o 0 si no existía
        } catch (error) {
            throw new Error("No fue posible acceder a la base de datos");
        }
    }

    async updateProvince(provincia) {
        try {
            const sql = `
                UPDATE provincias 
                SET nombre = $1, nombre_completo = $2, latitud = $3, longitud = $4, orden_visualizacion = $5
                WHERE id = $6
            `;
            
            const values = [
                provincia.nombre, 
                provincia.nombre_completo, 
                provincia.latitud, 
                provincia.longitud, 
                provincia.orden_visualizacion,
                provincia.id
            ];
            
            const result = await dbConfig.query(sql, values);
            return result.rowCount; 
            
        } catch (error) {
            if (error.code === '23505') {
                throw new Error("Ya existe otra provincia registrada con ese nombre.");
            }
            console.error("Error al actualizar provincia:", error);
            throw new Error("No fue posible acceder a la base de datos para actualizar "+ error.message);
        }
    }
}

export default ProvinceRepository;