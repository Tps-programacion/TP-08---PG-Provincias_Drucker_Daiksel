const provinces = [
	{ id: 1, name: "Buenos Aires" },
	{ id: 2, name: "Córdoba" },
	{ id: 3, name: "Santa Fe" }
];

export function getAll() {
	return provinces;
}

export default { getAll };
