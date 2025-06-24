import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import cartStore from "../../../../../../store/cartStore";
import styles from "./ProductCard.module.css";

function ProductCard(props) {
	const { product } = props;

	const navigate = useNavigate();
	return (
		<Box className={styles.container}>
			<Paper className={styles.wrapperImg} variant="outlined">
				<img
					onClick={() => navigate(product.link)}
					className={styles.productImg}
					src={product.img}
					alt={product.title}
				/>
				<img
					onClick={() => navigate(product.link)}
					className={styles.productImgHover}
					src={product.imgHover}
					alt={product.title}
				/>
				<Paper
					className={styles.wrapperTools}
					variant="elevation"
					elevation={4}
					sx={{
						display: { xs: "flex", md: "none" },
						opacity: { xs: "1", md: "0" },
						visibility: { xs: "visible", md: "hidden" },
					}}
				>
					<IconButton>
						<FavoriteBorderIcon />
					</IconButton>
					<IconButton onClick={() => cartStore.setCart(product.id)}>
						<ShoppingCartOutlinedIcon />
					</IconButton>
				</Paper>
			</Paper>
			<Box className={styles.wrapperInfo}>
				<Typography
					onClick={() => navigate(product.link)}
					className={styles.productTitle}
					variant="body1"
				>
					{product.title}
				</Typography>
				<Typography className={styles.productPrice} variant="body1">
					{product.price} руб.
				</Typography>
			</Box>
		</Box>
	);
}
export default observer(ProductCard);
