import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	List,
	ListItem,
	Typography,
} from "@mui/material"
import { Link } from "react-router"
import Logo from "../../../../../../assets/logo/Logo"

function FooterTop() {
	return (
		<Grid container my={{ xs: 1, md: 6 }} spacing={3}>
			<Grid
				size={{ xs: 12, md: "grow" }}
				display="flex"
				flexDirection="column"
				gap="15px"
				alignItems={{ xs: "center", md: "flex-start" }}
				pl={{ xs: 0, md: 1 }}
			>
				<Link to="/">
					<Logo />
				</Link>
				<Link target="_blank" to="tel:+375295550123">
					<Typography variant="body2">+375(29)555 01 23</Typography>
				</Link>
				<Link target="_blank" to="mailto:homeplants_market@gmail.com">
					<Typography variant="body2">homeplants_market@gmail.com</Typography>
				</Link>
			</Grid>
			<Grid size={{ xs: 12, md: 3, lg: 2 }} px={3}>
				<Accordion
					sx={{
						bgcolor: "transparent",
						display: { xs: "block", md: "none" },
					}}
					variant="none"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon color="info" />}
						aria-controls="footer-info"
						id="info-header"
					>
						<Typography textTransform="uppercase" variant="body2">
							Информация
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ py: 0 }}>
						<List sx={{ py: 0 }}>
							<ListItem sx={{ px: 0 }}>
								<Link to="/about">
									<Typography variant="body2">Контакты</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/delivery">
									<Typography variant="body2">Доставка</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/pay">
									<Typography variant="body2">Оплата</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/returns">
									<Typography variant="body2">Возврат</Typography>
								</Link>
							</ListItem>
						</List>
					</AccordionDetails>
				</Accordion>

				<List
					sx={{ display: { xs: "none", md: "block" } }}
					subheader={
						<Typography textTransform="uppercase" variant="body2" mb={2}>
							Информация
						</Typography>
					}
				>
					<ListItem sx={{ px: 0 }}>
						<Link to="/about">
							<Typography variant="body2">Контакты</Typography>
						</Link>
					</ListItem>
					<ListItem sx={{ px: 0 }}>
						<Link to="/delivery">
							<Typography variant="body2">Доставка</Typography>
						</Link>
					</ListItem>
					<ListItem sx={{ px: 0 }}>
						<Link to="/pay">
							<Typography variant="body2">Оплата</Typography>
						</Link>
					</ListItem>
					<ListItem sx={{ px: 0 }}>
						<Link to="/returns">
							<Typography variant="body2">Возврат</Typography>
						</Link>
					</ListItem>
				</List>
			</Grid>
			<Grid size={{ xs: 12, md: 3, lg: 2 }} px={3}>
				<Accordion
					sx={{
						bgcolor: "transparent",
						display: { xs: "block", md: "none" },
					}}
					variant="none"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon color="info" />}
						aria-controls="footer-account"
						id="account-header"
					>
						<Typography textTransform="uppercase" variant="body2">
							аккаунт
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ py: 0 }}>
						<List>
							<ListItem sx={{ px: 0 }}>
								<Link to="/account">
									<Typography variant="body2">Ваш аккаунт</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/orders">
									<Typography variant="body2">Заказы</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/wishlist">
									<Typography variant="body2">Избранное</Typography>
								</Link>
							</ListItem>
						</List>
					</AccordionDetails>
				</Accordion>
				<List
					sx={{ display: { xs: "none", md: "block" } }}
					subheader={
						<Typography textTransform="uppercase" variant="body2" mb={2}>
							Аккаунт
						</Typography>
					}
				>
					<ListItem sx={{ px: 0 }}>
						<Link to="/account">
							<Typography variant="body2">Ваш аккаунт</Typography>
						</Link>
					</ListItem>
					<ListItem sx={{ px: 0 }}>
						<Link to="/orders">
							<Typography variant="body2">Заказы</Typography>
						</Link>
					</ListItem>
					<ListItem sx={{ px: 0 }}>
						<Link to="/wishlist">
							<Typography variant="body2">Избранное</Typography>
						</Link>
					</ListItem>
				</List>
			</Grid>
		</Grid>
	)
}
export default FooterTop
