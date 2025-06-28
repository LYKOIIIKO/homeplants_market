import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import cartStore from "../../../../store/cartStore";
import CheckoutForm from "./components/checkoutForm/CheckoutForm";
import CheckoutTotal from "./components/checkoutTotal/CheckoutTotal";

function CheckoutPage() {
	const { cart } = cartStore;
	return (
		<Box>
			<Typography variant="h4" textAlign="center" my={3}>
				Оформление заказа
			</Typography>
			<Divider />
			<Container maxWidth="xl">
				{!!cart.length && (
					<Grid container py={4}>
						<Grid size={{ xs: 12, lg: 6 }} sx={{order:{xs:1, lg: 0}}}>
							<CheckoutForm />
						</Grid>
						<Grid
							size={{xs:12, lg:6}}
							sx={{
								order:{xs:0, lg: 1}
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
