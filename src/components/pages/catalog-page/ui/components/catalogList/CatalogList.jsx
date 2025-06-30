import { Button, Container, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import catalogStore from "../../../../../../store/catalogStore";
import CatalogFilter from "../catalogFilter/CatalogFilter";
import CatalogSort from "../catalogSort/CatalogSort";
import DrawerFilter from "../drawerFilter/DrawerFilter";
import ProductCard from "../productCard/ProductCard";

function CatalogList({ category, searchParams, setSearchParams }) {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const { products } = catalogStore;
	return (
		<section className="section-catalogList" style={{ margin: "20px 0" }}>
			<Container maxWidth="xl">
				<Grid container columnSpacing={3}>
					<Grid
						size={{ xs: 0, lg: 4 }}
						sx={{ display: { xs: "none", lg: "block" } }}
					>
						<CatalogFilter
							searchParams={searchParams}
							setSearchParams={setSearchParams}
						/>
					</Grid>

					<Grid
						container
						size={{ xs: 12, lg: 8 }}
						flexDirection="column"
					>
						<Grid size={12}>
							<Typography variant="h4">Каталог</Typography>
						</Grid>
						<Grid
							size={12}
							sx={{
								m: "20px 0",
								display: "flex",
								justifyContent: "space-between",
								alignItems: { xs: "flex-start", sm: "center" },
								flexDirection: { xs: "column", sm: "row" },
								gap: 3,
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
							{products
								.filter((item) => {
									if (
										category != undefined &&
										!searchParams.toString()
									) {
										return item.category.includes(category);
									} else if (
										category != undefined &&
										!!searchParams.getAll("price").length
									) {
										return (
											item.category.includes(category) &&
											+item.price >=
												searchParams.getAll(
													"price"
												)[0] &&
											+item.price <=
												searchParams.getAll("price")[1]
										);
									} else if (
										category != undefined &&
										!!searchParams.get("size")
									) {
										return (
											item.category.includes(category) &&
											item.size.includes(
												searchParams.get("size")
											)
										);
									} else if (
										category != undefined &&
										!!searchParams.get("size") &&
										!!searchParams.getAll("price").length
									) {
										return (
											item.category.includes(category) &&
											item.size.includes(
												searchParams.get("size")
											) &&
											+item.price >=
												searchParams.getAll(
													"price"
												)[0] &&
											+item.price <=
												searchParams.getAll("price")[1]
										);
									} else return item;
								})
								.map((item) => (
									<Grid
										key={item.id}
										size={{
											xs: 12,
											sm: 6,
											lg: 4,
											xl: 3,
										}}
									>
										<ProductCard product={item} />
									</Grid>
								))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<DrawerFilter
				open={mobileOpen}
				handler={handleDrawerToggle}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
		</section>
	);
}
export default observer(CatalogList);
