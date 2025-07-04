import { Box, Container, Grid, Typography } from "@mui/material"
import * as images from "../../../../../../assets"
import NewsCard from "./components/newsCard/NewsCard"

function SectionNews() {
	const news = {
		img: "assets/index_page/news/news_1.webp",
		date: "may 22, 2025",
		title: "Indoor Plants That Promote Luck",
		desc: "Similar to the money tree, jade plants symbolize fortune and prosperity, as well as friendship, making them...",
		link: "/blog",
	}

	return (
		<section className="section-news" style={{ margin: "40px 0" }}>
			<Container maxWidth="xl">
				<Box textAlign="center" mb={5}>
					<Typography variant="h5" textTransform="uppercase">
						последние новости
					</Typography>
				</Box>
				<Grid container spacing={5} alignItems="center">
					<Grid
						size={{ xs: 12, md: 6, lg: 4 }}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<NewsCard item={news} img={images.ImgNews1} />
					</Grid>
					<Grid
						size={{ xs: 12, md: 6, lg: 4 }}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<NewsCard item={news} img={images.ImgNews2} />
					</Grid>
					<Grid
						size={{ xs: 12, md: 6, lg: 4 }}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<NewsCard item={news} img={images.ImgNews3} />
					</Grid>
				</Grid>
			</Container>
		</section>
	)
}
export default SectionNews
