import "./index.css";
import { AppBar, Container, Grid } from "@mui/material";
import Search from "./components/search/Search";
import Navigation from "./components/navigation/Navigation";
import UserButtons from "./components/userButtons/UserButtons";

function Header() {
	return (
		<AppBar color="inherit" position="sticky" variant="outlined">
			<Container maxWidth="xl">
				<Grid container alignItems="center" spacing="auto">
					<Grid size="auto">
						<Search />
					</Grid>
					<Grid size="grow" display="flex" justifyContent="center">
						<Navigation />
					</Grid>
					<Grid container spacing={1} size="auto">
						<UserButtons />
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
}
export default Header;
