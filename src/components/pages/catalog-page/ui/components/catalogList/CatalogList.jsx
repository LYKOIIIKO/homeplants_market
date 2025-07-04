import { Button, Container, Grid, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import catalogStore from "../../../../../../store/catalogStore"
import CatalogFilter from "../catalogFilter/CatalogFilter"
import CatalogSort from "../catalogSort/CatalogSort"
import DrawerFilter from "../drawerFilter/DrawerFilter"
import ProductCard from "../productCard/ProductCard"

function CatalogList({ category, searchParams, setSearchParams }) {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [sort, setSort] = useState(searchParams.get("sort") || "saleRate-desc")

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const { products } = catalogStore

	let categoryFilterStatus = category != undefined ? true : false,
		priceFilterStatus = searchParams.getAll("price").length ? true : false,
		sizeFilterStatus = searchParams.get("size") ? true : false,
		priceFilter = searchParams.getAll("price"),
		sizeFilter = searchParams.get("size"),
		filterStatus = {
			category: categoryFilterStatus,
			price: priceFilterStatus,
			size: sizeFilterStatus,
		}

	let searchFilterStatus = searchParams.get("search") ? true : false,
		searchFilter = searchParams.get("search")

	let productsSearched = products.filter((item) => {
		if (searchFilterStatus) return item.title.toLowerCase().includes(searchFilter)
		else return item
	})

	let productsFiltered = productsSearched.filter((item) => {
		switch (JSON.stringify(filterStatus)) {
			case '{"category":true,"price":true,"size":true}':
				return (
					item.category == category &&
					item.price >= priceFilter[0] &&
					item.price <= priceFilter[1] &&
					item.size == sizeFilter
				)
				break
			case '{"category":true,"price":true,"size":false}':
				return (
					item.category == category &&
					item.price >= priceFilter[0] &&
					item.price <= priceFilter[1]
				)
				break
			case '{"category":true,"price":false,"size":true}':
				return item.category == category && item.size == sizeFilter
				break
			case '{"category":true,"price":false,"size":false}':
				return item.category == category
				break
			case '{"category":false,"price":true,"size":true}':
				return (
					item.price >= priceFilter[0] &&
					item.price <= priceFilter[1] &&
					item.size == sizeFilter
				)
				break
			case '{"category":false,"price":false,"size":true}':
				return item.size == sizeFilter
				break
			case '{"category":false,"price":true,"size":false}':
				return item.price >= priceFilter[0] && item.price <= priceFilter[1]
				break

			default:
				return item
		}
	})

	return (
		<section className="section-catalogList" style={{ margin: "20px 0" }}>
			<Container maxWidth="xl">
				<Grid container columnSpacing={3}>
					<Grid size={{ xs: 0, lg: 4 }} sx={{ display: { xs: "none", lg: "block" } }}>
						<CatalogFilter
							searchParams={searchParams}
							setSearchParams={setSearchParams}
						/>
					</Grid>

					<Grid container size={{ xs: 12, lg: 8 }} flexDirection="column">
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
							<CatalogSort
								sort={sort}
								setSort={setSort}
								searchParams={searchParams}
								setSearchParams={setSearchParams}
							/>
						</Grid>
						{searchFilterStatus && (
							<Typography variant="h5" my={2}>
								Найдено по запросу "{searchFilter}"
							</Typography>
						)}
						<Grid
							container
							size={12}
							sx={{ m: "20px 0" }}
							spacing={5}
							id="catalog-list"
						>
							{productsFiltered
								.sort((a, b) => {
									switch (sort) {
										case "saleRate-desc":
											return a.saleRate - b.saleRate
											break
										case "price-asc":
											return a.price - b.price
											break
										case "price-desc":
											return b.price - a.price
											break
										default:
											break
									}
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

							{!!products.length && !productsFiltered.length && (
								<Typography variant="h5">Товаров не найдено </Typography>
							)}
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
	)
}
export default observer(CatalogList)
