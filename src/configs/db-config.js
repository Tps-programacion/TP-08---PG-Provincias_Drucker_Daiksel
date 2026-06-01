
import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const dbConfig = new Pool({
    user: process.env.DB_USER ?? '',
    host: process.env.DB_HOST ?? '',
    database: process.env.DB_DATABASE ?? '',
    password: process.env.DB_PASSWORD ?? '',
    port: process.env.DB_PORT ?? 5432,
});

try {
    const result = await dbConfig.query("SELECT NOW()");
    console.log("✅ Conectado a PostgreSQL");
    console.log(result.rows);
} catch (error) {
    console.error("❌ Error:", error);
}

export default dbConfig;