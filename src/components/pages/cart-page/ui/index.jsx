import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import CartItem from "./components/cartItem/CartItem";

function CartPage() {
	const product = {
		title: "product",
		img: "/src/assets/catalog_page/popular_products/product_1.webp",
		imgHover: "/src/assets/catalog_page/popular_products/product_1-2.webp",
		link: "/catalog",
		price: "100",
	};

	return (
		<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" m={2}>
					Корзина
				</Typography>
				<List>
					<ListItem>
						<CartItem item={product} />
					</ListItem>
					<Divider />
					<ListItem>
						<CartItem item={product} />
					</ListItem>
					<Divider />
				</List>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-end",
						gap: 3,
					}}
				>
					<Typography variant="h5" textTransform="uppercase">
						total
					</Typography>
					<Button variant="contained" color="primary">
						оформить заказ
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
export default CartPage;
