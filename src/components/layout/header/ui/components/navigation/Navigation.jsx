import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router";
import Logo from "../../../../../../assets/logo/Logo";
import navigationStore from "../../../../../../store/navigationStore";
import styles from "./Navigation.module.css";

function Navigation() {
	const menuItems = [
		{ id: 0, name: "каталог", link: "/catalog", dropMenu: true },
		{ id: 1, name: "блог", link: "/blog", dropMenu: false },
		{ id: 3, name: "доставка", link: "/delivery", dropMenu: false },
		{ id: 4, name: "о нас", link: "/about", dropMenu: false },
	];

	const { navigation } = navigationStore;

	return (
		<List
			sx={{
				display: "inline-flex",
				textWrap: "nowrap",
				pt: 0,
				pb: 0,
			}}
		>
			{menuItems.map((item) => {
				return (
					<ListItem
						key={item.id}
						className={styles.navElem}
						sx={{ order: item.id }}
					>
						<NavLink className={styles.navLink} to={item.link}>
							<Box
								display="flex"
								alignItems="center"
								className={styles.navElemActive}
							>
								<Typography
									variant="subtitle1"
									textTransform="uppercase"
								>
									{item.name}
								</Typography>

								{item.dropMenu && <ArrowDropDownIcon />}
							</Box>
						</NavLink>

						{navigation.map((subItem) => {
							if (subItem.name === item.name)
								return (
									<Paper
										key={subItem.name}
										variant="outlined"
										className={styles.dropItem}
									>
										<List>
											{subItem.items.map((item) => {
												return (
													<ListItem key={item.name}>
														<Link
															className={
																styles.navLink
															}
															to={item.link}
														>
															<Typography
																className={
																	styles.navLink
																}
															>
																{item.title}
															</Typography>
														</Link>
													</ListItem>
												);
											})}
										</List>
									</Paper>
								);
						})}
					</ListItem>
				);
			})}

			<ListItem sx={{ order: 2 }}>
				<Link to="/">
					<Logo />
				</Link>
			</ListItem>
		</List>
	);
}
export default observer(Navigation);
