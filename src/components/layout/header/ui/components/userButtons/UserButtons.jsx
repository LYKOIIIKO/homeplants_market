import { Badge, Grid, IconButton } from "@mui/material";
import { Link } from "react-router";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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
				<Link to="/favorite">
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
						<Badge color="secondary" badgeContent={99}>
							<ShoppingCartOutlinedIcon />
						</Badge>
					</IconButton>
				</Link>
			</Grid>
		</>
	);
}
export default UserButtons;
