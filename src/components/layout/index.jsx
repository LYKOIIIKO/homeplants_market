import { Box, CssBaseline } from "@mui/material"
import Footer from "./footer"
import Header from "./header"
import Main from "./main"

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
	)
}
export default Layout
