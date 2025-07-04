import DeleteIcon from "@mui/icons-material/Delete"
import { Box, Button, Container, Divider, List, ListItem, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import cartStore from "../../../../store/cartStore"
import catalogStore from "../../../../store/catalogStore"
import CartItem from "./components/cartItem/CartItem"

function CartPage() {
	const { cart } = cartStore
	const { products } = catalogStore

	const cartTotal = cartStore.getCartTotal(products)

	const navigate = useNavigate()

	return (
		<Box>
			<Typography variant="h4" textAlign="center" my={3}>
				Корзина {!cart.length && "пуста"}
			</Typography>
			{!!cart.length && (
				<>
					<Divider />
					<Container
						maxWidth="xl"
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							alignItems: "center",
							justifyContent: "space-between",
							p: 3,
							gap: 3,
						}}
					>
						<Button
							size="large"
							startIcon={<DeleteIcon />}
							variant="outlined"
							onClick={() => cartStore.clearAll()}
						>
							очистить корзину
						</Button>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								gap: 3,
							}}
						>
							<Typography variant="h5" textTransform="uppercase">
								итого {cartTotal || " "} руб.
							</Typography>
							<Button
								variant="contained"
								size="large"
								color="primary"
								onClick={() => navigate("/checkout")}
							>
								оформить заказ
							</Button>
						</Box>
					</Container>
					<Divider />
				</>
			)}
			<Container maxWidth="xl">
				<List>
					{cart?.map((item) => {
						return products?.map((product) => {
							if (product.id == item.id)
								return (
									<ListItem key={product.id}>
										<CartItem item={product} count={item.count} />
									</ListItem>
								)
						})
					})}
				</List>
			</Container>
		</Box>
	)
}
export default observer(CartPage)
