// src/helpers/province-helper.js

export const validarProvincia = (provincia) => {
    // 1. Validar nombre (Obligatorio, texto, mínimo 3 caracteres)
    if (!provincia.nombre || typeof provincia.nombre !== 'string') {
        return "El 'nombre' es requerido y debe ser un texto.";
    }
    if (provincia.nombre.trim().length < 3) {
        return "El 'nombre' debe tener al menos 3 letras.";
    }

    // 2. Validar nombre_completo (Obligatorio, texto, no vacío)
    if (!provincia.nombre_completo || typeof provincia.nombre_completo !== 'string' || provincia.nombre_completo.trim().length === 0) {
        return "El 'nombre_completo' es requerido y no puede estar vacío.";
    }

    // 3. Validar latitud (Obligatorio, debe ser un número)
    // Usamos !== undefined para asegurarnos de que lo enviaron, incluso si es 0
    if (provincia.latitud === undefined || typeof provincia.latitud !== 'number') {
        return "La 'latitud' es requerida y debe ser un número válido.";
    }

    // 4. Validar longitud (Obligatorio, debe ser un número)
    if (provincia.longitud === undefined || typeof provincia.longitud !== 'number') {
        return "La 'longitud' es requerida y debe ser un número válido.";
    }

    // 5. Validar orden_visualizacion (Obligatorio, debe ser un número)
    if (provincia.orden_visualizacion === undefined || typeof provincia.orden_visualizacion !== 'number') {
        return "El 'orden_visualizacion' es requerido y debe ser un número válido.";
    }

    // Si pasa todas las validaciones, retornamos null (significa que no hay errores)
    return null; 
};