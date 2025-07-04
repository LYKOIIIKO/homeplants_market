import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SliderBottomBtns from "../../../../components/sectionPopularProducts/components/sliderPopular/SliderBottomBtns"
import FeedbackCard from "../FeedbackCard/FeedbackCard"
import "./SliderFeedback.css"

function SliderFeedback(props) {
	const { item } = props
	return (
		<>
			<Swiper
				className="slider-feedback"
				slidesPerView={3}
				spaceBetween={50}
				navigation={{
					nextEl: "slider_bottom_btn-prev",
					prevEl: "slider_bottom_btn-next",
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					1200: {
						slidesPerView: 3,
						spaceBetween: 50,
					},

					900: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					0: {
						slidesPerView: 1,
					},
				}}
			>
				<SwiperSlide>
					<FeedbackCard item={item} />
				</SwiperSlide>
				<SwiperSlide>
					<FeedbackCard item={item} />
				</SwiperSlide>
				<SwiperSlide>
					<FeedbackCard item={item} />
				</SwiperSlide>
				<SwiperSlide>
					<FeedbackCard item={item} />
				</SwiperSlide>
				<SwiperSlide>
					<FeedbackCard item={item} />
				</SwiperSlide>
				<SliderBottomBtns />
			</Swiper>
		</>
	)
}
export default SliderFeedback
