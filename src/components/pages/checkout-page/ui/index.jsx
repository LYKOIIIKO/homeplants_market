import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import CheckoutForm from "./components/checkoutForm/CheckoutForm";
import CheckoutTotal from "./components/checkoutTotal/CheckoutTotal";

function CheckoutPage() {
	return (
		<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" my={2}>
					Оформление заказа
				</Typography>
				<Divider />
				<Grid container py={4}>
					<Grid size={{xs:12, lg:6}}><CheckoutForm /></Grid>
					<Grid size={6} sx={{display:{xs:'none', lg:'block'}, visibility:{xs:'hidden', lg:'visible'}}}><CheckoutTotal /></Grid>
				</Grid>
			</Container>
		</Box>
	);
}
export default CheckoutPage;
