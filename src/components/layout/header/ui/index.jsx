import {
	AppBar,
	Badge,
	Box,
	Container,
	Grid,
	IconButton,
	InputBase,
	List,
	ListItem,
	Paper,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../../../assets/Logo";
import { Link, NavLink } from "react-router";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
	return (
		<AppBar color="transparent" position="static" variant="outlined">
			<Container maxWidth="xl">
				<Grid container alignItems="center" spacing="auto">
					<Grid size="auto">
						<Paper variant="elevation" elevation={1}>
							<IconButton
								type="button"
								sx={{ p: "10px" }}
								aria-label="search"
							>
								<SearchIcon />
							</IconButton>
							<InputBase
								sx={{ ml: 1, flex: 1 }}
								placeholder="Поиск"
								inputProps={{
									"aria-label": "search",
								}}
							/>
						</Paper>
					</Grid>
					<Grid size="grow" display="flex" justifyContent="center">
						<List
							sx={{
								display: "inline-flex",
								textWrap: "nowrap",
								pt: 0,
								pb: 0,
							}}
						>
							<ListItem
								sx={[
									{ position: "relative" },
									{
										"&:hover > div": {
											opacity: 1,
											visibility: "visible",
										},
									},
								]}
							>
								<NavLink to="/catalog">
									<Box
										display="flex"
										sx={[
											{
												"&::before": {
													content:'" "',
													position: "absolute",
													right: "0",
													bottom: "2px",
													weight: "10px",
													height: "5px",
													transition:
														"height .3s ease",
													zIndex: "10",
													opacity: "0.3",
													bgcolor: "#008342",
												},
											},
										]}
									>
										<Typography
											variant="subtitle1"
											textTransform="uppercase"
										>
											Каталог
										</Typography>
										<ArrowDropDownIcon />
									</Box>
								</NavLink>
								<Paper
									className="subNavItem"
									variant="outlined"
									sx={{
										position: "absolute",
										top: "100%",
										opacity: 0,
										visibility: "hidden",
									}}
								>
									<List>
										<ListItem>
											<Link to="/catalog/indoor-plants">
												<Typography>
													Комнатные растения
												</Typography>
											</Link>
										</ListItem>
										<ListItem>
											<Link to="/catalog/outdoor-plants">
												<Typography>
													Уличные растения
												</Typography>
											</Link>
										</ListItem>
										<ListItem>
											<Link to="/catalog/air-purifying-plants">
												<Typography>
													Очищающие воздух
												</Typography>{" "}
												растения
											</Link>
										</ListItem>
										<ListItem>
											<Link to="/catalog/planters-and-pots">
												<Typography>
													Горшки и кашпо
												</Typography>
											</Link>
										</ListItem>
										<ListItem>
											<Link to="/catalog/tools">
												<Typography>
													Инструмент
												</Typography>
											</Link>
										</ListItem>
									</List>
								</Paper>
							</ListItem>

							<ListItem>
								<NavLink to="/blog">
									<Typography
										variant="subtitle1"
										textTransform="uppercase"
									>
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
									<Typography
										variant="subtitle1"
										textTransform="uppercase"
									>
										Доставка
									</Typography>
								</NavLink>
							</ListItem>
							<ListItem>
								<NavLink to="/about">
									<Typography
										variant="subtitle1"
										textTransform="uppercase"
									>
										О нас
									</Typography>
								</NavLink>
							</ListItem>
						</List>
					</Grid>
					<Grid
						container
						spacing={1}
						size="auto"
						justifyContent="center"
					>
						<Grid>
							<Link to="/account">
								<IconButton alignItems="center">
									<PersonOutlineOutlinedIcon />
								</IconButton>
							</Link>
						</Grid>
						<Grid>
							<Link to="/favorite">
								<IconButton>
									<Badge color="secondary" variant="dot">
										<FavoriteBorderIcon />
									</Badge>
								</IconButton>
							</Link>
						</Grid>
						<Grid>
							<Link to="/cart">
								<IconButton>
									<Badge color="secondary" badgeContent={99}>
										<ShoppingCartOutlinedIcon />
									</Badge>
								</IconButton>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</AppBar>
	);
}
export default Header;
