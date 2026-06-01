import ProvinceRepository from "../repositories/province-repository.js";

export function getAllProvinces() {
	// In a real app this might be async and query a DB
	return ProvinceRepository.getAll();
}

export default { getAllProvinces };
