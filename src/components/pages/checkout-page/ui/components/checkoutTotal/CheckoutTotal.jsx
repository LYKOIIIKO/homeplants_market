import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import cartStore from "../../../../../../store/cartStore";
import catalogStore from "../../../../../../store/catalogStore";
import CheckoutItem from "../checkoutItem/CheckoutItem";

function CheckoutTotal() {
	const { cart } = cartStore;
	const { products } = catalogStore;

	const cartTotal = cartStore.getCartTotal(products);
	const cartCount = cartStore.getCartCount();

	return (
		<Box>
			<Accordion defaultExpanded elevation={3}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="checkout-total"
					id="checkout-total"
				>
					<Typography
						variant="body1"
						textTransform="uppercase"
						fontWeight="bold"
					>
						Ваш заказ {cartTotal || " "} руб.
					</Typography>
				</AccordionSummary>
				<AccordionDetails
					sx={{ display: "flex", flexDirection: "column", gap: 3 }}
				>
					<List>
						{cart?.map((item) => {
							return products?.map((product) => {
								if (product.id == item.id)
									return (
										<Box key={item.id}>
											<ListItem sx={{ p: 0 }}>
												<CheckoutItem
													item={product}
													count={item.count}
												/>
											</ListItem>
											<Divider />
										</Box>
									);
							});
						})}
					</List>
					<Box
						sx={{
							display: "flex",
							alignItems: { xs: "flex-end", sm: "stretch" },
							gap: 2,
							flexDirection: { xs: "column", sm: "row" },
						}}
					>
						<TextField
							disabled
							type="text"
							name="promocode"
							size="small"
							label="Промокод"
							placeholder="Промокод"
							sx={{ flexGrow: 1, alignSelf: "stretch" }}
						/>
						<Button variant="contained" disabled>
							Недоступно
						</Button>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Сумма заказа ·</Typography>
						<Typography>{cartTotal || " "} руб.</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Доставка ·</Typography>
						<Typography>Бесплатно</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography variant="h5" fontWeight="bold">
							Итого ·
						</Typography>
						<Typography variant="h5" fontWeight="bold">
							{cartTotal || " "} руб.
						</Typography>
					</Box>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}
export default observer(CheckoutTotal);
