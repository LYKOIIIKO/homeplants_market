import ClearIcon from "@mui/icons-material/Clear";
import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import CartCounter from "../cartCounter/CartCounter";
import s from "./CartItem.module.css";

function CartItem({ item }) {
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
				<IconButton>
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
					src={item.img}
					onClick={() => navigate(item.link)}
				/>
			</Grid>
			<Grid
				size={{ xs: 8, lg: "grow" }}
				px={1}
				sx={{ order: { xs: 2, lg: 3 }, wordBreak: "break-all" }}
			>
				<Typography variant="body1" onClick={() => navigate(item.link)}>
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
				<CartCounter />
			</Grid>
			<Grid
				size={{ xs: 12, lg: 2 }}
				sx={{
					display: "flex",
					justifyContent: { xs: "flex-end", lg: "center" },
					order: { xs: 5, lg: 5 },
				}}
			>
				<Typography variant="body1">{item.price} руб.</Typography>
			</Grid>
		</Grid>
	);
}
export default CartItem;
