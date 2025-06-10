import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { CssBaseline } from "@mui/material";

function Layout() {
	return (
		<>
			<CssBaseline />
			<Header />
			<Main />
			<Footer />
		</>
	);
}
export default Layout;
