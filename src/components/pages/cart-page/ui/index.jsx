import {
	Box,
	Button,
	Container,
	Divider,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import cartStore from "../../../../store/cartStore";
import catalogStore from "../../../../store/catalogStore";
import CartItem from "./components/cartItem/CartItem";

function CartPage() {
	const { cart } = cartStore;

	const { products } = catalogStore;

	return (
		<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" m={2}>
					Корзина
				</Typography>
				<List>
					{cart?.map((item) => {
						return products?.map((product) => {
							if (product.id == item.id)
								return (
									<ListItem key={product.id}>
										<CartItem
											item={product}
											count={item.count}
										/>
									</ListItem>
								);
						});
					})}

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
						total{" "}
						{cart?.reduce((acc, item) => {
							let value = products?.find((product) => {
								if (product.id == item.id) return product;
							});

							return (acc += +value?.price * +item.count);
						}, 0)}{" "} 
						pcs.
					</Typography>
					<Button variant="contained" color="primary">
						оформить заказ
					</Button>
				</Box>
			</Container>
		</Box>
	);
}
export default observer(CartPage);
