import { Box, Divider, Drawer, List, ListItem, Typography } from "@mui/material"
import { Link } from "react-router"
import Search from "../search/Search"

const menuItems = [
	{ id: 0, name: "каталог", link: "/catalog", dropMenu: true },
	{ id: 1, name: "блог", link: "/blog", dropMenu: false },
	{ id: 3, name: "доставка", link: "/delivery", dropMenu: false },
	{ id: 4, name: "о нас", link: "/about", dropMenu: false },
]

function DrawerMenu(props) {
	const { open, handler } = props
	return (
		<Drawer
			variant="temporary"
			open={open}
			onClose={handler}
			ModalProps={{
				keepMounted: true,
			}}
			sx={{
				display: { xs: "block", lg: "none" },
				"& .MuiDrawer-paper": {
					boxSizing: "border-box",
					width: "80dvw",
				},
			}}
		>
			<Search />
			<Box sx={{ textAlign: "center" }}>
				<Divider />
				<List>
					<ListItem display="flex" sx={{ justifyContent: "center" }}>
						<Link to="/">
							<Typography variant="subtitle1" textTransform="uppercase">
								главная
							</Typography>
						</Link>
					</ListItem>
					{menuItems.map((item) => (
						<ListItem key={item.id} display="flex" sx={{ justifyContent: "center" }}>
							<Link to={item.link}>
								<Typography variant="subtitle1" textTransform="uppercase">
									{item.name}
								</Typography>
							</Link>
						</ListItem>
					))}
				</List>
				<Box sx={{ display: { xs: "block", md: "none" } }}>
					<Divider />
					<List>
						<ListItem display="flex" sx={{ justifyContent: "center" }}>
							<Link to="/account">
								<Typography variant="subtitle1" textTransform="uppercase">
									аккаунт
								</Typography>
							</Link>
						</ListItem>
						<ListItem display="flex" sx={{ justifyContent: "center" }}>
							<Link to="/wishlist">
								<Typography variant="subtitle1" textTransform="uppercase">
									избранное
								</Typography>
							</Link>
						</ListItem>
					</List>
				</Box>
			</Box>
		</Drawer>
	)
}
export default DrawerMenu
