import ClearIcon from "@mui/icons-material/Clear";
import { Grid, IconButton, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import cartStore from "../../../../../../store/cartStore";
import CartCounter from "../cartCounter/CartCounter";
import s from "./CartItem.module.css";

function CartItem({ item, count }) {
	const navigate = useNavigate();

	return (
		<Grid
			container
			spacing={{ xs: 2, lg: 2 }}
			alignItems="center"
			my={2}
			sx={{ overflow: "hidden" }}
		>
			<Grid
				size={{ xs: 4, lg: 1 }}
				sx={{
					display: "flex",
					justifyContent: { xs: "flex-start", lg: "center" },
					order: { xs: 3, lg: 1 },
				}}
			>
				<IconButton onClick={() => cartStore.removeItem(item.id)}>
					<ClearIcon />
				</IconButton>
			</Grid>
			<Grid
				size={{ xs: 4, lg: 2 }}
				sx={{
					display: "flex",
					justifyContent: "center",
					order: { xs: 1, lg: 2 },
				}}
			>
				<img
					className={s.image}
					src={item.img1}
					onClick={() => navigate(`/catalog/${item.category}/${item.id}`)}
				/>
			</Grid>
			<Grid
				size={{ xs: 8, lg: "grow" }}
				px={1}
				sx={{ order: { xs: 2, lg: 3 }, wordBreak: "break-word" }}
			>
				<Typography
					className={s.link}
					variant="body1"
					onClick={() => navigate(`/catalog/${item.category}/${item.id}`)}
				>
					{item.title}
				</Typography>
			</Grid>
			<Grid
				size={{ xs: 8, lg: 2 }}
				sx={{
					display: "flex",
					justifyContent: { xs: "flex-end", lg: "center" },
					order: { xs: 4, lg: 4 },
				}}
			>
				<CartCounter itemId={item.id} count={count} />
			</Grid>
			<Grid
				size={{ xs: 12, lg: 2 }}
				sx={{
					display: "flex",
					justifyContent: { xs: "flex-end", lg: "center" },
					order: { xs: 5, lg: 5 },
				}}
			>
				<Typography variant="body1">{item.price * count} руб.</Typography>
			</Grid>
		</Grid>
	);
}
export default observer(CartItem);
