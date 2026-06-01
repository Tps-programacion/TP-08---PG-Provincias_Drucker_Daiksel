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

}

export default ProvinceRepository;