import { makeAutoObservable } from "mobx";
import { GetCatalog } from "../services/catalogService";

class CatalogStore {
	products = [];

	constructor() {
		makeAutoObservable(this);
	}

	getAll() {
		const data = GetCatalog();
		this.setAll(data);		
	}

	setAll(products) {
		this.products = products;
	}
}

const catalogStore = new CatalogStore();
export default catalogStore;
