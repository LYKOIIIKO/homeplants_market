import { Box, Container, Divider, Typography } from "@mui/material";

function CheckoutPage() {
	return (
		<Box my={3}>
			<Container maxWidth="xl">
				<Typography variant="h4" textAlign="center" my={2}>
					Оформление заказа
				</Typography>
				<Divider />
				
			</Container>
		</Box>
	);
}
export default CheckoutPage;
