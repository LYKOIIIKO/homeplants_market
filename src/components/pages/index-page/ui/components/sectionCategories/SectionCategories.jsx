import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router";

function SectionCategories() {
	const cardItems = [
		{
			name: "каталог",
			items: [
				{
					title: "Комнатные растения",
					link: "/catalog/indoor-plants",
					img: "#",
				},
				{
					title: "Уличные растения",
					link: "/catalog/outdoor-plants",
					img: "#",
				},
				{
					title: "Очищающие воздух растения",
					link: "/catalog/air-purifying-plants",
					img: "#",
				},
				{
					title: "Горшки и кашпо",
					link: "/catalog/planters-and-pots",
					img: "#",
				},
				{ title: "Инструмент", link: "/catalog/tools", img: "#" },
			],
		},
	];

	return (
		<section className="section-categories" style={{ margin: "20px 0" }}>
			<Container maxWidth="xl">
				<Grid container spacing={5}>
					{cardItems?.map((card) => {
						if (card.name == "каталог") {
							card.items.map((item) => {
								return (
									<Grid
										minHeight="300px"
										size="grow"
										sx={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "flex-end",
											pb: "20px",
											bgcolor: "#ccc",
											backgroundImage: item.image,
											borderRadius: "5%",
										}}
									>
										<Link to={item.link}>
											<Button>{item.title}</Button>
										</Link>
									</Grid>
								);
							});
						}
					})}
				</Grid>
			</Container>
		</section>
	);
}
export default SectionCategories;
