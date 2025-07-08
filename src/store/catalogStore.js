import { makeAutoObservable } from "mobx"
import { catalogService } from "../services/catalogService"

class CatalogStore {
	products = []

	constructor() {
		makeAutoObservable(this)
		this.getAll()
	}

	async getAll() {
		const resp = await catalogService.findAll()
		this.setAll(resp)
	}
	setAll(products) {
		this.products = products
	}

	async getProduct(id) {
		if (this.products.length) return this.products.find((item) => item.id == id)
		else return {}
	}
}

const catalogStore = new CatalogStore()
export default catalogStore
