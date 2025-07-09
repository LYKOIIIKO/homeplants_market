import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Box, IconButton, Paper, Typography } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import cartStore from "../../../../../../store/cartStore"
import styles from "./ProductCard.module.css"

function ProductCard(props) {
	const { product } = props

	const navigate = useNavigate()

	const handlerCart = (id) => {
		if (!cartStore.getItemStatus(id)) {
			cartStore.setCart(id)
		} else {
			cartStore.removeItem(id)
		}
	}
	return (
		<Box className={styles.container}>
			<Paper className={styles.wrapperImg} variant="outlined">
				<img
					onClick={() => navigate(`/catalog/${product.category}/${product.id}`)}
					className={styles.productImg}
					src={product.img1}
					alt={product.title}
				/>
				<img
					onClick={() => navigate(`/catalog/${product.category}/${product.id}`)}
					className={styles.productImgHover}
					src={product.img2}
					alt={product.title}
				/>
				<Paper
					className={styles.wrapperTools}
					variant="elevation"
					elevation={4}
					sx={{
						opacity: { xs: "1", md: "0" },
						visibility: { xs: "visible", md: "hidden" },
					}}
				>
					<IconButton>
						<FavoriteBorderIcon />
					</IconButton>
					<IconButton onClick={() => handlerCart(product.id)}>
						{cartStore.getItemStatus(product.id) ? (
							<ShoppingCartIcon />
						) : (
							<ShoppingCartOutlinedIcon />
						)}
					</IconButton>
				</Paper>
			</Paper>
			<Box className={styles.wrapperInfo}>
				<Typography
					onClick={() => navigate(`/catalog/${product.category}/${product.id}`)}
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
	)
}
export default observer(ProductCard)
