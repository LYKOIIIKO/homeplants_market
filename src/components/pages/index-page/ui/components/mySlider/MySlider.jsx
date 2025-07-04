import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Keyboard, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "./MySlider.css"
import MySliderBtns from "./MySliderBtns"

export default function MySlider() {
	return (
		<section className="section-slider_homepage">
			<Box sx={{ position: "relative" }}>
				<Swiper
					slidesPerView={1}
					pagination={{
						type: "bullets",
						clickable: true,
					}}
					navigation={{
						nextEl: ".myslider_button_next",
						prevEl: ".myslider_button_prev",
					}}
					keyboard={{
						enabled: true,
					}}
					loop={true}
					modules={[Pagination, Navigation, Keyboard]}
					className="slider_homepage"
				>
					<MySliderBtns />
					<SwiperSlide className="slide_homepage slide_homepage_1">
						<Container maxWidth="xl" className="slide_container">
							<Grid container direction={"column"} spacing={4}>
								<Grid>
									<Box className="slide-hidebox">
										<Typography
											className="slide_homepage_text"
											letterSpacing={3}
											textTransform="uppercase"
											variant="h6"
											fontSize={{
												xs: "1rem",
												md: "1.4285714285714284rem",
											}}
										>
											каталог
										</Typography>
									</Box>
								</Grid>

								<Grid
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										color: "#dfe7d0",
									}}
								>
									<Box className="slide-hidebox">
										<Typography
											className="slide_homepage_text"
											variant="h2"
											fontSize={{
												xs: "2rem",
												md: "4.285714285714286rem",
											}}
										>
											Новые поступления
										</Typography>
									</Box>
									<Box className="slide-hidebox">
										<Typography className="slide_homepage_text" variant="body2">
											Скидка до 30%
										</Typography>
									</Box>
								</Grid>
								<Grid>
									<Box className="slide-hidebox">
										<Box className="slide_homepage_text">
											<Link to="/catalog">
												<Button
													size="large"
													className="slide_homepage_text"
													variant="contained"
													color="primary"
												>
													каталог
												</Button>
											</Link>
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Container>
					</SwiperSlide>
					<SwiperSlide className="slide_homepage slide_homepage_2">
						<Container maxWidth="xl" className="slide_container">
							<Grid container direction={"column"} spacing={4}>
								<Grid>
									<Box className="slide-hidebox">
										<Typography
											className="slide_homepage_text"
											letterSpacing={3}
											textTransform="uppercase"
											variant="h6"
											fontSize={{
												xs: "1rem",
												md: "1.4285714285714284rem",
											}}
										>
											блог
										</Typography>
									</Box>
								</Grid>
								<Grid
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
										color: "#dfe7d0",
									}}
								>
									<Box className="slide-hidebox">
										<Typography
											className="slide_homepage_text"
											variant="h2"
											fontSize={{
												xs: "2rem",
												md: "4.285714285714286rem",
											}}
										>
											Уход за растениями
										</Typography>
									</Box>
									<Box className="slide-hidebox">
										<Typography className="slide_homepage_text" variant="body2">
											Узнайте как правильно ухаживать за вашими "зелеными
											друзьями"
										</Typography>
									</Box>
								</Grid>
								<Grid>
									<Box className="slide-hidebox">
										<Box className="slide_homepage_text">
											<Link to="/catalog">
												<Button
													size="large"
													variant="contained"
													color="primary"
												>
													блог
												</Button>
											</Link>
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Container>
					</SwiperSlide>
				</Swiper>
			</Box>
		</section>
	)
}
