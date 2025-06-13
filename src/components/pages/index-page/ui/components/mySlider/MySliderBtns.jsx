import { IconButton } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwiper } from "swiper/react";

function MySliderBtns() {
	const swiper = useSwiper()
	return (
		<>
			<IconButton
				className=".myslider_button_prev"
				color="info"
				sx={{
					position: "absolute",
					top: "calc(50% - 56px / 2)",
					left: "5vw",
					zIndex: 1,
				}}
			>
				<ArrowBackIosNewIcon fontSize="large" color="info" />
			</IconButton>
			<IconButton
				className=".myslider_button_next"
				onClick={() => swiper.slideNext()}
				color="info"
				sx={{
					position: "absolute",
					top: "calc(50% - 56px / 2)",
					right: "5vw",
					zIndex: 1,
				}}
			>
				<ArrowForwardIosIcon fontSize="large" color="info" />
			</IconButton>
		</>
	);
}
export default MySliderBtns;
