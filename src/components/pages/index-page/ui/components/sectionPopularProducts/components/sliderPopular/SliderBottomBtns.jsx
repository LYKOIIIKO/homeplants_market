import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Box, IconButton } from "@mui/material"
import { useSwiper } from "swiper/react"

function SliderBottomBtns() {
	const swiper = useSwiper()
	return (
		<Box
			sx={{
				bgcolor: "transparent",
				display: "flex",
				gap: "40px",
				justifyContent: "center",
				mt: "20px",
			}}
		>
			<IconButton
				className="slider_bottom_btn-prev"
				onClick={() => swiper.slidePrev()}
				sx={{ bgcolor: "#224229 !important" }}
			>
				<ArrowBackIosNewIcon fontSize="large" color="info" />
			</IconButton>
			<IconButton
				className="slider_bottom_btn-next"
				onClick={() => swiper.slideNext()}
				sx={{ bgcolor: "#224229 !important" }}
			>
				<ArrowForwardIosIcon fontSize="large" color="info" />
			</IconButton>
		</Box>
	)
}
export default SliderBottomBtns
