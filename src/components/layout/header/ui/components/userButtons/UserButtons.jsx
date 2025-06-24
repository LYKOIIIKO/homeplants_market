import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Grid, IconButton } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link } from "react-router";
import cartStore from "../../../../../../store/cartStore";

function UserButtons() {
	return (
		<>
			<Grid sx={{ display: { xs: "none", md: "block" } }}>
				<Link to="/account">
					<IconButton>
						<PersonOutlineOutlinedIcon />
					</IconButton>
				</Link>
			</Grid>
			<Grid sx={{ display: { xs: "none", md: "block" } }}>
				<Link to="/wishlist">
					<IconButton>
						<Badge color="secondary" variant="dot">
							<FavoriteBorderIcon />
						</Badge>
					</IconButton>
				</Link>
			</Grid>
			<Grid>
				<Link to="/cart">
					<IconButton>
						<Badge
							color="secondary"
							badgeContent={cartStore.cart.reduce((acc, item) => (acc += item.count), 0)}
						>
							<ShoppingCartOutlinedIcon />
						</Badge>
					</IconButton>
				</Link>
			</Grid>
		</>
	);
}
export default observer(UserButtons);
