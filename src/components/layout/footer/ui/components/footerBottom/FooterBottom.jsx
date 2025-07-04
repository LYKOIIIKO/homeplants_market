import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon from "@mui/icons-material/Pinterest"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { Grid, IconButton, List, ListItem, Typography } from "@mui/material"
import Belcart from "../../../../../../assets/footer/payments_belcart.svg?react"
import ERIP from "../../../../../../assets/footer/payments_erip.svg?react"
import MasterCard from "../../../../../../assets/footer/payments_mastercart.svg?react"
import Visa from "../../../../../../assets/footer/payments_visa.svg?react"

function FooterBottom() {
	return (
		<Grid
			container
			alignItems="center"
			justifyContent="space-between"
			flexDirection={{ xs: "column", md: "row" }}
		>
			<Grid>
				<List sx={{ display: "flex" }}>
					<ListItem sx={{ pl: 0, py: { xs: 0, md: 1 } }}>
						<IconButton target="_blank" href="https://www.instagram.com/">
							<InstagramIcon color="info" />
						</IconButton>
					</ListItem>
					<ListItem sx={{ py: { xs: 0, md: 1 } }}>
						<IconButton target="_blank" href="https://ru.pinterest.com/">
							<PinterestIcon color="info" />
						</IconButton>
					</ListItem>
					<ListItem sx={{ py: { xs: 0, md: 1 } }}>
						<IconButton target="_blank" href="https://www.youtube.com/">
							<YouTubeIcon color="info" />
						</IconButton>
					</ListItem>
				</List>
			</Grid>
			<Grid pb={{ xs: 2, md: 0 }} sx={{ display: "flex", justifyContent: "center" }}>
				<Typography variant="body2">© 2025, Homeplants market.</Typography>
			</Grid>
			<Grid>
				<List
					sx={{
						display: "flex",
						gap: "15px",
						zoom: { xs: "0.6", sm: "0.8" },
					}}
				>
					<ListItem sx={{ bgcolor: "#fff", borderRadius: "10px" }}>
						<Visa />
					</ListItem>
					<ListItem sx={{ bgcolor: "#fff", borderRadius: "10px" }}>
						<MasterCard />
					</ListItem>
					<ListItem sx={{ bgcolor: "#fff", borderRadius: "10px" }}>
						<Belcart />
					</ListItem>
					<ListItem sx={{ bgcolor: "#fff", borderRadius: "10px" }}>
						<ERIP />
					</ListItem>
				</List>
			</Grid>
		</Grid>
	)
}
export default FooterBottom
