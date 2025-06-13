import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MySlider.css";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Box, Container, Grid, IconButton } from "@mui/material";
import MySliderBtns from "./MySliderBtns";

export default function MySlider() {
	return (
		<Box sx={{ position: "relative" }}>
			<Swiper
				pagination={{
					type: "bullets",
					clickable: true,
				}}
				navigation={{
					nextEl: ".myslider_button_next",
					prevEl: ".myslider_button_prev",
				}}
				mousewheel={true}
				loop={true}
				modules={[Pagination, Navigation, Mousewheel]}
				className="mySwiper"
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
			<MySliderBtns />
			
		</Box>
	);
}
