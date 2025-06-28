import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
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

	const cartTotal = cart?.reduce((acc, item) => {
		let value = products?.find((product) => {
			if (product.id == item.id) return product;
		});

		return (acc += +value?.price * +item.count);
	}, 0);

	return (
		<Box px={1}>
			<Accordion defaultExpanded>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="checkout-total"
					id="checkout-total"
					sx={{ display: { xs: "flex", lg: "flex" } }}
				>
					<Typography>Ваш заказ {cartTotal} руб.</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						{cart?.map((item) => {
							return products?.map((product) => {
								if (product.id == item.id)
									return (
										<ListItem key={item.id}>
											<CheckoutItem
												item={product}
												count={item.count}
											/>
										</ListItem>
									);
							});
						})}
					</List>
					<Box>
						<TextField label="Промокод" placeholder="Промокод" />
						<Button variant="contained" disabled>
							Применить
						</Button>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Промежуточный итог / {cart?.reduce((acc, item) => (acc += item.count), 0)} шт.</Typography>
						<Typography>{cartTotal} руб.</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Доставка</Typography>
						<Typography>Бесплатно</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography variant="h5">Итого</Typography>
						<Typography variant="h5">{cartTotal} руб.</Typography>
					</Box>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}
export default observer(CheckoutTotal);
