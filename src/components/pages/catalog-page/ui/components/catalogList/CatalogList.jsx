import { Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import CatalogFilter from "../catalogFilter/CatalogFilter";
import CatalogSort from "../catalogSort/CatalogSort";
import DrawerFilter from "../drawerFilter/DrawerFilter";
import ProductCard from "../productCard/ProductCard";

function CatalogList() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const product = {
		title: "product",
		img: "/src/assets/catalog_page/popular_products/product_1.webp",
		imgHover: "/src/assets/catalog_page/popular_products/product_1-2.webp",
		link: "/catalog",
		price: "100",
	};
	return (
		<section className="section-catalogList" style={{ margin: "20px 0" }}>
			<Container maxWidth="xl">
				<Grid container columnSpacing={3}>
					<Grid
						size={{ xs: 0, lg: 4 }}
						sx={{ display: { xs: "none", lg: "block" } }}
					>
						<CatalogFilter />
					</Grid>

					<Grid container size={{ xs: 12, lg: 8 }}>
						<Grid size={12}>
							<Typography variant="h4">Каталог</Typography>
						</Grid>
						<Grid
							size={12}
							sx={{
								m: "20px 0",
								display: "flex",
								justifyContent: "space-between",
								alignItems: {xs:'flex-start', sm:"center"},
								flexDirection:{xs:'column', sm:'row'},
								gap:3
							}}
						>
							<Button
								variant="contained"
								color="primary"
								aria-label="open drawer"
								onClick={handleDrawerToggle}
								sx={{ display: { lg: "none" } }}
							>
								фильтр
							</Button>
							<CatalogSort />
						</Grid>
						<Grid
							container
							size={12}
							sx={{ m: "20px 0" }}
							spacing={5}
						>
							<Grid size={{ xs:12,sm: 6, lg: 4, xl: 3 }}>
								<ProductCard product={product} />
							</Grid>
							<Grid size={{ xs:12,sm: 6, lg: 4, xl: 3 }}>
								<ProductCard product={product} />
							</Grid>
							<Grid size={{ xs:12,sm: 6, lg: 4, xl: 3 }}>
								<ProductCard product={product} />
							</Grid>
							<Grid size={{ xs:12,sm: 6, lg: 4, xl: 3 }}>
								<ProductCard product={product} />
							</Grid>
							<Grid size={{ xs:12,sm: 6, lg: 4, xl: 3 }}>
								<ProductCard product={product} />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<DrawerFilter open={mobileOpen} handler={handleDrawerToggle} />
		</section>
	);
}
export default CatalogList;
