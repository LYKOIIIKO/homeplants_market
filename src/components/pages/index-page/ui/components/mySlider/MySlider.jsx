import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./MySlider.css";
import MySliderBtns from "./MySliderBtns";

export default function MySlider() {
	return (
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
				mousewheel={true}
				loop={true}
				modules={[Pagination, Navigation, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				<MySliderBtns />
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
		</Box>
	);
}
