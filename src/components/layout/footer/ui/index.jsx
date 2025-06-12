import {
	Container,
	Divider,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListSubheader,
	Typography,
} from "@mui/material";
import { Link } from "react-router";
import Logo from "../../../../assets/logo/Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Visa from '../../../../assets/payments_visa.svg?react'
import MasterCard from '../../../../assets/payments_mastercart.svg?react'
import Belcart from '../../../../assets/payments_belcart.svg?react'
import ERIP from '../../../../assets/payments_erip.svg?react'

function Footer() {
	return (
		<footer
			style={{
				marginTop: "auto",
				backgroundColor: "#224229",
			}}
		>
			<Container>
				<Grid container my={6}>
					<Grid
						size="grow"
						display="flex"
						flexDirection="column"
						gap="15px"
						alignItems="flex-start"
					>
						<Link to="/">
							<Logo />
						</Link>
						<Link to="tel:+375295550123">
							<Typography variant="body2">
								+375(29)555 01 23
							</Typography>
						</Link>
						<Link to="mailto:homeplants_market@gmail.com">
							<Typography variant="body2">
								homeplants_market@gmail.com
							</Typography>
						</Link>
					</Grid>
					<Grid px={3}>
						<List
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
								<Link to="/">
									<Typography variant="body2">
										Контакты
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/">
									<Typography variant="body2">
										Доставка
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/">
									<Typography variant="body2">
										Оплата
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/">
									<Typography variant="body2">
										Возврат
									</Typography>
								</Link>
							</ListItem>
						</List>
					</Grid>
					<Grid px={3}>
						<List
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
								<Link to="/">
									<Typography variant="body2">
										Ваш аккаунт
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/">
									<Typography variant="body2">
										Заказы
									</Typography>
								</Link>
							</ListItem>
							<ListItem sx={{ px: 0 }}>
								<Link to="/">
									<Typography variant="body2">
										Избранное
									</Typography>
								</Link>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Divider />
				<Grid container>
					<Grid>
						<List>
							<ListItem>
								<IconButton>
									<InstagramIcon />
								</IconButton>
							</ListItem>
							<ListItem>
								<IconButton>
									<PinterestIcon />
								</IconButton>
							</ListItem>
							<ListItem>
								<IconButton>
									<YouTubeIcon />
								</IconButton>
							</ListItem>
						</List>
					</Grid>
					<Grid>
                        <Typography>© 2025, Homeplants market.</Typography>
                    </Grid>
					<Grid size={3}>
                        <List sx={{display:'flex'}}>
                            <ListItem sx={{width:'100px', height:'100px'}}><Visa/></ListItem>
                            <ListItem sx={{width:'100px', height:'100px'}}><MasterCard/></ListItem>
                            <ListItem sx={{width:'100px', height:'100px'}}><Belcart/></ListItem>
                            <ListItem sx={{width:'100px', height:'100px'}}><ERIP/></ListItem>
                        </List>
                    </Grid>
				</Grid>
			</Container>
		</footer>
	);
}
export default Footer;
