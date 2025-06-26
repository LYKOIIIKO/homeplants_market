import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CartCounter from "../../../../cart-page/ui/components/cartCounter/CartCounter";
import ProductSliderMain from "../productSliderMain/ProductSliderMain";

function ProductInfo({ product, count }) {
	return (
		<Grid container spacing={2} mb={5}>
			<Grid size={{xs:12, lg:6}}>
				<ProductSliderMain product={product} />
			</Grid>
			<Grid
				size={{xs:12, lg:6}}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 3,
					alignItems: "flex-start",
					px:2
				}}
			>
				<Typography variant='h4' fontSize={{xs:'1.6rem', lg:'2.4285714285714284rem'}}>{product.title}</Typography>
				<Typography
					textTransform="uppercase"
					variant="h5"
					color="textSecondary"
					fontSize={{xs:'1.3rem', lg:'1.7142857142857142rem'}}
				>
					{product.price} руб.
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "row", lg: "row" },
						gap: 3,
					}}
				>
					<CartCounter itemId={product.id} count={count} />
					<Button variant="contained" size='small'>в корзину</Button>
				</Box>

				<Button variant="text" startIcon={<FavoriteBorderIcon />}>
					в избранное
				</Button>

				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<Typography variant="body1" fontWeight={500}>Поделиться:</Typography>

					<IconButton href="https://telegram.me/share/url?url=ВАШ_URL&text=ТЕКСТ">
						<TelegramIcon />
					</IconButton>
				</Box>

				<Box>
					<Typography variant="body1" fontWeight={500}>Описание:</Typography>
					<Typography variant="body1" textAlign='justify' sx={{wordBreak: 'break-word'}}>{product.description}</Typography>
				</Box>
			</Grid>
		</Grid>
	);
}
export default ProductInfo;
