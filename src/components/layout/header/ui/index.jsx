import "./index.css";
import { AppBar, Container, Grid, IconButton } from "@mui/material";
import Search from "./components/search/Search";
import Navigation from "./components/navigation/Navigation";
import UserButtons from "./components/userButtons/UserButtons";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./components/drawerMenu/DrawerMenu";
import Logo from "../../../../assets/logo/Logo";
import { Link } from "react-router";

function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<>
			<AppBar color="inherit" position="sticky" variant="outlined">
				<Container maxWidth="xl">
					<Grid container alignItems="center">
						<Grid size={{ xs: 3, lg: 0 }}>
							<IconButton
								color="main"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { lg: "none" } }}
							>
								<MenuIcon />
							</IconButton>
						</Grid>
						<Grid
							size={{ xs: 0, lg: 2 }}
							sx={{ display: { xs: "none", lg: "block" } }}
						>
							<Search />
						</Grid>
						<Grid
							size="grow"
							sx={{
								display: { xs: "flex", lg: "none" },
								justifyContent: "center",
							}}
						>
							<Link to="/">
								<Logo />
							</Link>
						</Grid>
						<Grid
							size="grow"
							justifyContent="center"
							sx={{ display: { xs: "none", lg: "flex" } }}
						>
							<Navigation />
						</Grid>

						<Grid
							container
							spacing={1}
							size={3}
							justifyContent="flex-end"
						>
							<UserButtons />
						</Grid>
					</Grid>
				</Container>
			</AppBar>

			<DrawerMenu open={mobileOpen} handler={handleDrawerToggle} />
		</>
	);
}
export default Header;
