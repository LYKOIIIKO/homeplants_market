import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { Box, CssBaseline } from "@mui/material";

function Layout() {
	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100dvh",
				}}
			>
				<Header />
				<Main />
				<Footer />
			</Box>
		</>
	);
}
export default Layout;
