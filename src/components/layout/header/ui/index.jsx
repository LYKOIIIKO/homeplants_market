import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Container, Grid, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Logo from "../../../../assets/logo/Logo";
import DrawerMenu from "./components/drawerMenu/DrawerMenu";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search/Search";
import UserButtons from "./components/userButtons/UserButtons";
import "./index.css";

function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	
	const location = useLocation()

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	useEffect(() => {
	  setMobileOpen(false);
	}, [location])

	return (
		<>
			<AppBar color="inherit" position="sticky" variant="outlined" className="site_header">
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
							size={{ xs: 0, lg: 3 }}
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
