import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { observer } from "mobx-react-lite";
import { db } from "../../../../firebase/initial";
import cartStore from "../../../../store/cartStore";
import catalogStore from "../../../../store/catalogStore";
import CheckoutForm from "./components/checkoutForm/CheckoutForm";
import CheckoutTotal from "./components/checkoutTotal/CheckoutTotal";

function CheckoutPage() {
	const { cart } = cartStore;
	const { products } = catalogStore;
	const cartTotal = cartStore.getCartTotal(products);

	const submitForm = (order) => {
		const data = {
			createdAt: serverTimestamp(),
			uid: "Гость",
			products: cart,
			address: {
				name: order.name,
				lastName: order.lastName,
				surName: order.surName,
				region: order.region,
				city: order.city,
				street: order.street,
				building: order.building,
				housing: order.housing,
				apartment: order.apartment,
				postalIndex: order.postalIndex,
			},
			paymentMethod: order.paymentMethod,
			email: order.email,
			phone: order.phone,
			total: cartTotal,
			status: "Заказ создан",
		};
		const sendOrder = async (data) => {
			await addDoc(collection(db, "orders"), data);
		};
		sendOrder(data);
	};

	return (
		<Box>
			<Typography variant="h4" textAlign="center" my={3}>
				{!!cart.length ? 'Оформление заказа' : 'Заказ успешно создан'}
			</Typography>
			<Divider />
			<Container maxWidth="xl">
				{!!cart.length && (
					<Grid container py={4} spacing={2}>
						<Grid
							size={{ xs: 12, lg: 6 }}
							sx={{ order: { xs: 1, lg: 0 } }}
						>
							<CheckoutForm submitForm={submitForm} />
						</Grid>
						<Grid
							size={{ xs: 12, lg: 6 }}
							sx={{
								order: { xs: 0, lg: 1 },
							}}
						>
							<CheckoutTotal />
						</Grid>
					</Grid>
				)}
			</Container>
		</Box>
	);
}
export default observer(CheckoutPage);
