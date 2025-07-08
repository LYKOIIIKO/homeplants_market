import { Box } from "@mui/material"
import { useState } from "react"
import { FreeMode, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import s from "./ProductSliderMain.module.css"

function ProductSliderMain({ product }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<Box sx={{ px: 2 }}>
			<Swiper
				className={s.sliderProductMain}
				slidesPerView={1}
				spaceBetween={0}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Thumbs]}
			>
				<SwiperSlide>
					<img src={product.img1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product.img2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product.img3 || product.img1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product.img4 || product.img2} />
				</SwiperSlide>
			</Swiper>
			<Swiper
				className={s.sliderProductMain}
				slidesPerView={4}
				spaceBetween={10}
				freeMode={true}
				watchSlidesProgress={true}
				onSwiper={setThumbsSwiper}
				modules={[FreeMode, Thumbs]}
			>
				<SwiperSlide>
					<img src={product.img1} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product.img2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product.img3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product.img4} />
				</SwiperSlide>
			</Swiper>
		</Box>
	)
}
export default ProductSliderMain
