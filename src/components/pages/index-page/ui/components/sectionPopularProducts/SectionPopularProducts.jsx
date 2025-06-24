import { Box, Container, Typography } from "@mui/material";
import catalogStore from "../../../../../../store/catalogStore";
import SliderPopular from "./components/sliderPopular/SliderPopular";

function SectionPopularProducts() {
	const { products } = catalogStore;
	return (
		<section className="section-popular_products" style={{marginBottom:'40px'}}>
			<Container maxWidth="xl">
				<Box textAlign="center" mb={5}>
					<Typography variant="h5" textTransform="uppercase">
						популярные товары
					</Typography>
				</Box>
				<Box>
					<SliderPopular products={products} />
				</Box>
			</Container>
		</section>
	);
}
export default SectionPopularProducts;
