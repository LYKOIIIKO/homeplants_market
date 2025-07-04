import { Box, Container, Typography } from "@mui/material"
import * as images from "../../../../../../assets"
import SliderFeedback from "./components/sliderFeedback/SliderFeedback"

function SectionFeedback() {
	const feedback = {
		userName: "Alex Stivenson",
		userJob: "Designer",
		userAvatar: images.ImgFeedback1,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor doloribus quam error voluptas doloremque tempora. Animi dolor doloremque corrupti repudiandae eaque nihil rerum magnam!",
		userRating: "5",
	}

	return (
		<section className="section-feedback" style={{ margin: "40px 0" }}>
			<Container maxWidth="xl">
				<Box textAlign="center" mb={5}>
					<Typography variant="h5" textTransform="uppercase">
						отзывы покупателей
					</Typography>
				</Box>
				<Box>
					<SliderFeedback item={feedback} />
				</Box>
			</Container>
		</section>
	)
}
export default SectionFeedback
