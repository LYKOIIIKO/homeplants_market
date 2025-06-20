import { Button, Container, Grid, Typography } from "@mui/material";
import { collection, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../../../../firebase/initial";
import CatalogFilter from "../catalogFilter/CatalogFilter";
import CatalogSort from "../catalogSort/CatalogSort";
import DrawerFilter from "../drawerFilter/DrawerFilter";
import ProductCard from "../productCard/ProductCard";

function CatalogList() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	// const product = {
	// 	title: "product",
	// 	img: "https://lh3.googleusercontent.com/fife/ALs6j_H7LcxcJ-bXNLRlUS-jSL8shMORChgxyHovJAlKYZCpSVsW2r0eDdoAH43mFa4y3JHYJmdUmKXRDyc52fVW_GdPICHbAD-_hJ0mxnc5S9BYJ2anRvieTMtetcy6CYkNY1D8sBO-tPt6wRA38GfdhqG3ftQVp8pDTu3SYev6gSRiWB7oVwIbsmqZyeKjcB5O9WR1g87hR4wo5AJWnVjA9EPygg7hta9EhBfsQQ3SE9LEbuPVgtCwMoqAT586frAmTt4fyhhBvM2v_lGRHSgyC4NAKaXaqPIZLvgnk7Nay2pdILS78RqObplhbIUeMPVuSPDrIzQ3DH3fwDt2yoh-dE5JLcIJw9SsqVr1y0x4t-bQ6NOdL5ZVxVgdBAP8ZeDzFwqUK-CbV-Hyv9zRtcXwJqa5M68dhGLLdKoJWhVlRg1pEOqsvbCN9dvci-s1x7vtabs_bP5nAUmVKN3_x-V0faOl2KB-GhvdEUatOuaFbr6LrFQe7VvBfXsLIuWadb44AdhoWhU_v6xMtwpb_ElCamMBmgqnVl1qSNtJZdmZYENgscvXCUCXMmDAjyz0x-ozVwO31-Koy7fI9jf7Eig7WTGPAH_sXaWGYOZaGqZ8xMsynWMdOXEdW_N35z2YzeFqzvANxJ7gExjxad3Utqm3Rgqbf3MezAIBLLPNRlVnc8KYm-XOfSfiSotJeLEFOMN6NVKbsqBuYKdHS5ZpQxMhCCKaFHjhM1eC4cvs83KP_y0B5fLD1H8TGhZB9rM0cteXpCYK7JietRmK1sFYH93T185_2D3UFkgSujkSPrZu_MjXATaI6SWkKO5wUwilLcdD0p96iGpuqxne-ci7vpNNgMg_rlyslPftNM39S28Fn7SE-h88x64eSXeGxAaclwtfgHZbo3G4k8q7F0_5Am6pZGnC945mqdR2w2nEHPx85BGp2_326oWyatAQRz462xYZqDr5Eq0LwFe1Uis4vaSdDy70t3bwY308gfs_4jrgzJYgxL_7kgw1nQbmRmc57zKyAKbEVDbHqQsznP6WeU147PR_zK-jj00zZDUCUjjABUNa2qXOMU-4ZlVb_Qdsm2-ih5skj1SAmVAEEL_489DXBbLEuJBKkbgq-uqpM9a5Ch-5IVn-FSYc4sScgaGHNSIubB_Hyay50VUdNFrKZ6B95bPQFvfOIyi2qz6Nki7MQBOCKHqnAv4cKq6p8QZL5KBlw8IzrCqfWgQdzpZkGUJeHs_4-9T0P2C7-ZqvfckZ-g6psxBoWKjJCmHJRpbW5wTKJwUchjPowdo3oQ_E1h4Ord6TfXK4SfCqo6NUtf3V85gQxyX2w-eO_xRrToYDKJzvRezuB7giZ8UPDKRJCHzNLqC0JxDxdjBsMee3iWryVAbH-_2cAaiO1a9Oli-UacburbCTzRrlF93WqHhFZoFwfD2eZxpP48_xy6roYrcT7IQi06UolCzkQh4bFL6oqJjpqk-iLTDhqK6XJVDK0M5DF_nfGMMOyDeRtgfsSiKeY9SuUnZF3vmhgRqRPUjIX7uYPIIG_-_kNzxMN1_OIW8z4AdQaMbv6MXSyLIVFDeUmcC5R7W2G0tu2SbzUej7_3FH9bdxGr5cQkH-D0px-QX6sANw7mmzviGMZykc_MadlCoa=w3841-h1952?auditContext=forDisplay",
	// 	imgHover: "/src/assets/catalog_page/popular_products/product_1-2.webp",
	// 	link: "/catalog",
	// 	price: "100",
	// };

	const catalogCollection = [
		"indoor_plants",
		"outdoor_plants",
		"air_purifying_plants",
		"planters_and_pots",
		"gardening_tools",
	];

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

	useEffect(() => {
		console.log(products);
	});

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
							{products?.map((item) => {
								return (
									<Grid
										key={item.id}
										size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}
									>
										<ProductCard product={item} />
									</Grid>
								);
							})}
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<DrawerFilter open={mobileOpen} handler={handleDrawerToggle} />
		</section>
	);
}
export default CatalogList;
