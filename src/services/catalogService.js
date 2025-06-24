import { collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/initial";

function CatalogService() {
	return [666,555,444]
}

function GetCatalog() {
	const [products, setProducts] = useState([]);
	
	const [data] = useCollection(query(collection(db, "catalog")));
	
	useEffect(() => {
		const newProducts = [];
		data?.forEach((item) => {
			if (Object.keys(item.data()).length != 0) {
				const product = {
					id: item.id,
					...item.data(),
				};
				newProducts.push(product);
			}
		});
		setProducts(newProducts);
	}, [data]);

	return products
}



export { CatalogService, GetCatalog };

