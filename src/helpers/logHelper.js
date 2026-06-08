import 'dotenv/config';
import fs from 'fs';
import path from 'path';

class LogHelper {
    constructor() {
        this.filePath             = process.env.LOG_FILE_PATH;
        this.fileName             = process.env.LOG_FILE_NAME;
        this.logToFileEnabled     = process.env.LOG_TO_FILE_ENABLED === 'true';
        this.logToConsoleEnabled  = process.env.LOG_TO_CONSOLE_ENABLED === 'true';
    }

    /**
     * Este método almacena en un archivo de texto y/o muestra por consola información del Error.
     * @param {*} errorObject
     */
    logError = (errorObject) => {
        // 1. Obtener la fecha y hora actual en formato ISO (ej: 2024-05-02T12:34:54.007Z)
        const timestamp = new Date().toISOString();

        // 2. Extraer el mensaje y el stack trace del objeto de error
        const errorMessage = errorObject.message || errorObject;
        const stackTrace = errorObject.stack || 'No stack trace disponible';

        // 3. Armar el texto exactamente con el formato que pide el TP
        const logText = `${timestamp}: error - ${errorMessage}\nStack Trace: ${stackTrace}\n\n`;

        // 4. Mostrar por consola si está habilitado en el .env
        if (this.logToConsoleEnabled) {
            console.error(logText);
        }

        // 5. Guardar en el archivo de texto si está habilitado en el .env
        if (this.logToFileEnabled) {
            try {
                // Si la carpeta de destino no existe, la creamos (recursive: true crea subcarpetas si hace falta)
                if (!fs.existsSync(this.filePath)) {
                    fs.mkdirSync(this.filePath, { recursive: true });
                }

                // Unimos la ruta y el nombre del archivo de forma segura
                const fullPath = path.join(this.filePath, this.fileName);

                // appendFileSync agrega el texto al final del archivo sin borrar lo anterior
                fs.appendFileSync(fullPath, logText, 'utf8');
                
            } catch (err) {
                console.error("Error crítico de LogHelper: No se pudo escribir en el archivo.", err);
            }
        }
    }
}

export default new LogHelper();