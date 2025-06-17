import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MySlider.css";
import MySliderBtns from "./MySliderBtns";

export default function MySlider() {
	return (
		<section className="slider-homepage">
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
					className="mySwiper"
				>
					<MySliderBtns />
					<SwiperSlide>
						<Box className="slide-container">
							<Grid container direction={"column"} spacing={4}>
								<Grid>
									<Box className="slide-hidebox">
										<Typography
											className="slide-text"
											letterSpacing={3}
											textTransform="uppercase"
											variant="h6"
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
											className="slide-text"
											variant="h2"
										>
											Новые поступления
										</Typography>
									</Box>
									<Box className="slide-hidebox">
										<Typography
											className="slide-text"
											variant="body2"
										>
											Скидка до 30%
										</Typography>
									</Box>
								</Grid>
								<Grid>
									<Box className="slide-hidebox">
										<Box className="slide-text">
											<Link to="/catalog">
												<Button
													size="large"
													className="slide-text"
													variant="contained"
													sx={{ color: "#dfe7d0" }}
												>
													каталог
												</Button>
											</Link>
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</SwiperSlide>
					<SwiperSlide>
						<Box className="slide-container">
							<Grid container direction={"column"} spacing={4}>
								<Grid>
									<Box className="slide-hidebox">
										<Typography
											className="slide-text"
											letterSpacing={3}
											textTransform="uppercase"
											variant="h6"
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
											className="slide-text"
											variant="h2"
										>
											Уход за растениями
										</Typography>
									</Box>
									<Box className="slide-hidebox">
										<Typography
											className="slide-text"
											variant="body2"
										>
											Узнайте как правильно ухаживать за
											вашими "зелеными друзьями"
										</Typography>
									</Box>
								</Grid>
								<Grid>
									<Box className="slide-hidebox">
										<Box className="slide-text">
											<Link to="/catalog">
												<Button
													size="large"
													variant="contained"
													sx={{ color: "#dfe7d0" }}
												>
													блог
												</Button>
											</Link>
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</SwiperSlide>
				</Swiper>
			</Box>
		</section>
	);
}
