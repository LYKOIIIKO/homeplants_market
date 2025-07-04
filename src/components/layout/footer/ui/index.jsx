import { Container, Divider } from "@mui/material"
import FooterBottom from "./components/footerBottom/FooterBottom"
import FooterTop from "./components/footerTop/FooterTop"

function Footer() {
	return (
		<footer
			style={{
				marginTop: "auto",
				backgroundColor: "#224229",
			}}
		>
			<Container maxWidth="xl">
				<FooterTop />
			</Container>

			<Divider color="#666" />

			<Container maxWidth="xl">
				<FooterBottom />
			</Container>
		</footer>
	)
}
export default Footer
