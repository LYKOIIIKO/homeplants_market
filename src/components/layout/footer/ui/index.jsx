import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Divider,
	Grid,
	IconButton,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import { Link } from "react-router";
import Logo from "../../../../assets/logo/Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Visa from "../../../../assets/payments_visa.svg?react";
import MasterCard from "../../../../assets/payments_mastercart.svg?react";
import Belcart from "../../../../assets/payments_belcart.svg?react";
import ERIP from "../../../../assets/payments_erip.svg?react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Footer() {
	return (
		<footer
			style={{
				marginTop: "auto",
				backgroundColor: "#224229",
			}}
		>
			<Container maxWidth="xl">
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
							<Typography variant="body2">
								+375(29)555 01 23
							</Typography>
						</Link>
						<Link
							target="_blank"
							to="mailto:homeplants_market@gmail.com"
						>
							<Typography variant="body2">
								homeplants_market@gmail.com
							</Typography>
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
								<Typography
									textTransform="uppercase"
									variant="body2"
								>
									Информация
								</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ py: 0 }}>
								<List sx={{ py: 0 }}>
									<ListItem sx={{ px: 0 }}>
										<Link to="/about">
											<Typography variant="body2">
												Контакты
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ px: 0 }}>
										<Link to="/delivery">
											<Typography variant="body2">
												Доставка
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ px: 0 }}>
										<Link to="/pay">
											<Typography variant="body2">
												Оплата
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ px: 0 }}>
										<Link to="/returns">
											<Typography variant="body2">
												Возврат
											</Typography>
										</Link>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>

						<List
							sx={{ display: { xs: "none", md: "block" } }}
							subheader={
								<Typography
									textTransform="uppercase"
									variant="body2"
									mb={2}
								>
									Информация
								</Typography>
							}
						>
							<ListItem sx={{ px: 0 }}>
								<Link to="/about">
									<Typography variant="body2">
										Контакты
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/delivery">
									<Typography variant="body2">
										Доставка
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/pay">
									<Typography variant="body2">
										Оплата
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/returns">
									<Typography variant="body2">
										Возврат
									</Typography>
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
								<Typography
									textTransform="uppercase"
									variant="body2"
								>
									аккаунт
								</Typography>
							</AccordionSummary>
							<AccordionDetails sx={{ py: 0 }}>
								<List>
									<ListItem sx={{ px: 0 }}>
										<Link to="/account">
											<Typography variant="body2">
												Ваш аккаунт
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ px: 0 }}>
										<Link to="/orders">
											<Typography variant="body2">
												Заказы
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ px: 0 }}>
										<Link to="/favorite">
											<Typography variant="body2">
												Избранное
											</Typography>
										</Link>
									</ListItem>
								</List>
							</AccordionDetails>
						</Accordion>
						<List
							sx={{ display: { xs: "none", md: "block" } }}
							subheader={
								<Typography
									textTransform="uppercase"
									variant="body2"
									mb={2}
								>
									Аккаунт
								</Typography>
							}
						>
							<ListItem sx={{ px: 0 }}>
								<Link to="/account">
									<Typography variant="body2">
										Ваш аккаунт
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/orders">
									<Typography variant="body2">
										Заказы
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/favorite">
									<Typography variant="body2">
										Избранное
									</Typography>
								</Link>
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Container>

			<Divider color="#666" />
			<Container maxWidth="xl">
				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					flexDirection={{ xs: "column", md: "row" }}
				>
					<Grid>
						<List sx={{ display: "flex" }}>
							<ListItem sx={{ pl: 0, py: { xs: 0, md: 1 } }}>
								<IconButton
									target="_blank"
									href="https://www.instagram.com/"
								>
									<InstagramIcon color="info" />
								</IconButton>
							</ListItem>
							<ListItem sx={{ py: { xs: 0, md: 1 } }}>
								<IconButton
									target="_blank"
									href="https://ru.pinterest.com/"
								>
									<PinterestIcon color="info" />
								</IconButton>
							</ListItem>
							<ListItem sx={{ py: { xs: 0, md: 1 } }}>
								<IconButton
									target="_blank"
									href="https://www.youtube.com/"
								>
									<YouTubeIcon color="info" />
								</IconButton>
							</ListItem>
						</List>
					</Grid>
					<Grid
						pb={{ xs: 2, md: 0 }}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Typography variant="body2">
							© 2025, Homeplants market.
						</Typography>
					</Grid>
					<Grid>
						<List
							sx={{
								display: "flex",
								gap: "15px",
								zoom: { xs: "0.6", sm: "0.8" },
							}}
						>
							<ListItem
								sx={{ bgcolor: "#fff", borderRadius: "10px" }}
							>
								<Visa />
							</ListItem>
							<ListItem
								sx={{ bgcolor: "#fff", borderRadius: "10px" }}
							>
								<MasterCard />
							</ListItem>
							<ListItem
								sx={{ bgcolor: "#fff", borderRadius: "10px" }}
							>
								<Belcart />
							</ListItem>
							<ListItem
								sx={{ bgcolor: "#fff", borderRadius: "10px" }}
							>
								<ERIP />
							</ListItem>
						</List>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
}
export default Footer;
