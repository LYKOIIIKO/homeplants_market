import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import styles from "./ProductCard.module.css";

function ProductCard(props) {
	const { product } = props;

	const navigate = useNavigate();
	return (
		<Box
			className={styles.container}
			onClick={() => navigate(product.link)}
		>
			<Paper className={styles.wrapperImg} variant="outlined">
				<img
					className={styles.productImg}
					src={product.img}
					alt={product.title}
				/>
				<img
					className={styles.productImgHover}
					src={product.imgHover}
					alt={product.title}
				/>
				<Paper
					className={styles.wrapperTools}
					variant="elevation"
					elevation={4}
				>
					<IconButton>
						<FavoriteBorderIcon />
					</IconButton>
					<IconButton>
						<ShoppingCartOutlinedIcon />
					</IconButton>
				</Paper>
			</Paper>
			<Box className={styles.wrapperInfo}>
				<Typography className={styles.productTitle} variant="body1">
					{product.title}
				</Typography>
				<Typography className={styles.productPrice} variant="body1">
					{product.price} руб.
				</Typography>
			</Box>
		</Box>
	);
}
export default ProductCard;
