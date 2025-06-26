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
import { useNavigate } from "react-router";
import cartStore from "../../../../store/cartStore";
import catalogStore from "../../../../store/catalogStore";
import CartItem from "./components/cartItem/CartItem";

function CartPage() {
	const { cart } = cartStore;

	const { products } = catalogStore;
	
	const navigate = useNavigate()

	return (
		<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" m={2}>
					Корзина {!cart.length && "пуста"}
				</Typography>
				{!!cart.length && (
					<>
					<Divider />
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								gap: 3,
								my: 2,
							}}
						>
							<Typography variant="h5" textTransform="uppercase">
								итого{" "}
								{cart?.reduce((acc, item) => {
									let value = products?.find((product) => {
										if (product.id == item.id)
											return product;
									});

									return (acc += +value?.price * +item.count);
								}, 0)}{" "}
								руб.
							</Typography>
							<Button variant="contained" color="primary" onClick={() => navigate('/checkout')}>
								оформить заказ
							</Button>
						</Box>
						<Divider />
					</>
				)}

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
				</List>
			</Container>
		</Box>
	);
}
export default observer(CartPage);
