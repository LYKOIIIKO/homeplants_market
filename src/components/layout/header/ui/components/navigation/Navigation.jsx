import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { Link, NavLink } from "react-router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../../../../../assets/Logo";
import styles from './Navigation.module.css'

function Navigation() {
	return (
		<List
			sx={{
				display: "inline-flex",
				textWrap: "nowrap",
				pt: 0,
				pb: 0,
			}}
		>
			<ListItem className={styles.navElem}>
				<NavLink className={styles.navLink} to="/catalog" >
					<Box display="flex" className={styles.navElemActive}>
						<Typography variant="body1" textTransform="uppercase">
							Каталог
						</Typography>
						<ArrowDropDownIcon />
					</Box>
				</NavLink>
				<Paper variant="outlined" className={styles.dropItem}>
					<List>
						<ListItem>
							<Link to="/catalog/indoor-plants">
								<Typography>Комнатные растения</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/catalog/outdoor-plants">
								<Typography>Уличные растения</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/catalog/air-purifying-plants">
								<Typography>
									Очищающие воздух растения
								</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/catalog/planters-and-pots">
								<Typography>Горшки и кашпо</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/catalog/tools">
								<Typography>Инструмент</Typography>
							</Link>
						</ListItem>
					</List>
				</Paper>
			</ListItem>

			<ListItem>
				<NavLink to="/blog">
					<Typography variant="subtitle1" textTransform="uppercase">
						Блог
					</Typography>
				</NavLink>
			</ListItem>
			<ListItem>
				<Link to="/">
					<Logo />
				</Link>
			</ListItem>
			<ListItem>
				<NavLink to="/delivery">
					<Typography variant="subtitle1" textTransform="uppercase">
						Доставка
					</Typography>
				</NavLink>
			</ListItem>
			<ListItem>
				<NavLink to="/about">
					<Typography variant="subtitle1" textTransform="uppercase">
						О нас
					</Typography>
				</NavLink>
			</ListItem>
		</List>
	);
}
export default Navigation;
