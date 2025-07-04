import { Box, Container } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import catalogStore from "../../../../store/catalogStore"
import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation"
import SectionPopularProducts from "../../index-page/ui/components/sectionPopularProducts/SectionPopularProducts"
import ProductInfo from "./components/productInfo/ProductInfo"

function ProductPage() {
	const { products } = catalogStore

	const { productId } = useParams()

	const [product, setProduct] = useState({})

	useEffect(() => {
		const getProduct = async () => {
			const product = await catalogStore.getProduct(productId)
			setProduct(product)
		}
		getProduct()
	}, [products])

	return (
		<>
			{product && Object.keys(product).length > 0 && (
				<>
					<PageNavigation
						linkTo={"catalog"}
						title={"Каталог"}
						categoryLink={product.category}
						categoryTitle={product.categoryRu}
						productLink={product.id}
						productTitle={product.title}
					/>

					<Box my={5}>
						<Container maxWidth="xl">
							<ProductInfo product={product} />

							<SectionPopularProducts />
						</Container>
					</Box>
				</>
			)}
		</>
	)
}
export default observer(ProductPage)
