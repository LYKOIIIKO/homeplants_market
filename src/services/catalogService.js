import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/initial";
class CatalogService {
	async findAll() {
		let products = [];
		const querySnapshot = await getDocs(collection(db, "catalog"));
		querySnapshot.forEach((doc) => {
			if (Object.keys(doc.data()).length != 0) {
				let product = {
					id: doc.id,
					...doc.data(),
				};
				products.push(product);
			}
		});
		return products;
	}
}

const catalogService = new CatalogService();

export { catalogService };

