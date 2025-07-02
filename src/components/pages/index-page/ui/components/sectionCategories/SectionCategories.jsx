import { Box, Button, Container, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import navigationStore from "../../../../../../store/navigationStore";

function SectionCategories() {
	const navigate = useNavigate();

	const {navigation} = navigationStore

	const cardItems = [
		{
			name: "каталог",
			items: [
				{
					title: "Комнатные растения",
					link: "/catalog/indoor-plants",
					img: "url(src/assets/index_page/category_1.jpg)",
				},
				{
					title: "Уличные растения",
					link: "/catalog/outdoor-plants",
					img: "url(src/assets/index_page/category_2.jpg)",
				},
				{
					title: "Очищающие воздух растения",
					link: "/catalog/air-purifying-plants",
					img: "url(src/assets/index_page/category_3.jpg)",
				},
				{
					title: "Горшки и кашпо",
					link: "/catalog/planters-and-pots",
					img: "url(src/assets/index_page/category_4.jpg)",
				},
				{
					title: "Инструмент",
					link: "/catalog/tools",
					img: "url(src/assets/index_page/category_5.jpg)",
				},
			],
		},
	];

	return (
		<section className="section-categories" style={{ margin: "40px 0" }}>
			<Container maxWidth="xl">
				<Grid container spacing={5}>
					{navigation.map((obj) => {
						if (obj.name == "каталог")
							return obj.items.map((item) => {
								return (
									<Grid key={item.name}
										onClick={() => navigate(item.link)}
										minHeight="300px"
										size={{
											xs: 12,
											sm: 6,
											md: 4,
											lg: "grow",
										}}
									>
										<Box
											sx={[
												{
													height: "100%",
													display: "flex",
													flexDirection: "column",
													justifyContent: "flex-end",
													alignItems: "center",
													pb: "20px",
													bgcolor: "transparent",
													backgroundImage: item.img,
													borderRadius: "5%",
													backgroundRepeat:
														"no-repeat",
													backgroundSize: "cover",
													backgroundPosition:
														"center",
													cursor: "pointer",
													overflow: "hidden",
													transition: 'all .5s ease'
												},
												{
													"&:hover": {
														boxShadow: '1px 1px 10px #666',
														transition: 'all .5s ease'
													},
												},
											]}
										>
											<Button
												onClick={() =>
													navigate(item.link)
												}
												variant="contained"
												color="primary"
												sx={{
													opacity: "0.8",
													width: "100%",
													color: "#dfe7d0",
													bgcolor: "#224229",
												}}
											>
												{item.title}
											</Button>
										</Box>
									</Grid>
								);
							});
					})}
				</Grid>
			</Container>
		</section>
	);
}
export default observer(SectionCategories);
