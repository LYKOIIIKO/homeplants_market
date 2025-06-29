import { Badge, Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function CheckoutItem({ item, count }) {
	const navigate = useNavigate();
	return (
		<Grid
			container
			spacing={2}
			my={3}
			alignItems="center"
			sx={{ width: "100%" }}
		>
			<Grid size={{xs:5, sm: 2}}>
				<Badge color="primary" badgeContent={count}>
					<Box
						borderRadius={5}
						overflow="hidden"
						display="flex"
						sx={{ cursor: "pointer" }}
					>
						<img
							onClick={() =>
								navigate(`/catalog/${item.category}/${item.id}`)
							}
							src={item.img1}
							alt={item.title}
							style={{ width: "100%" }}
						/>
					</Box>
				</Badge>
			</Grid>
			<Grid size="grow">
				<Typography
					onClick={() =>
						navigate(`/catalog/${item.category}/${item.id}`)
					}
					variant="subtitle1"
					sx={{ cursor: "pointer" }}
				>
					{item.title}
				</Typography>
			</Grid>
			<Grid size={{xs:12, sm: 2}}>
				<Typography variant="subtitle1" textAlign='right'>
					{item.price * count} руб.
				</Typography>
			</Grid>
		</Grid>
	);
}
export default CheckoutItem;
