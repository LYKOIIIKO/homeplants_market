import { Box, Container, Typography } from "@mui/material";
import SliderPopular from "./components/sliderPopular/SliderPopular";

function SectionPopularProducts() {
	const product = {title:'product', img:'/src/assets/catalog_page/popular_products/product_1.webp', imgHover:'/src/assets/catalog_page/popular_products/product_1-2.webp', link:'/catalog', price:'100'}
	return (
		<section className="section-popular_products" style={{marginBottom:'40px'}}>
			<Container maxWidth="xl">
				<Box textAlign="center" mb={5}>
					<Typography variant="h5" textTransform="uppercase">
						популярные товары
					</Typography>
				</Box>
				<Box>
					<SliderPopular product={product} />
				</Box>
			</Container>
		</section>
	);
}
export default SectionPopularProducts;
