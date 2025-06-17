import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../../../../catalog-page/ui/components/productCard/ProductCard";
import SliderBottomBtns from "./SliderBottomBtns";
import './SliderPopular.css';


function SliderPopular(props) {
	const {product} = props
	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={50}
				navigation={{
					nextEl: "slider_bottom_btn-prev",
					prevEl: "slider_bottom_btn-next",
				}}
				keyboard={{
					enabled: true,
				}}
				loop={true}
				modules={[Navigation, Keyboard]}
				className="slider-popular_products"
			>

				<SwiperSlide>
					<ProductCard product={product}/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard product={product}/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard product={product}/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard product={product}/>
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard product={product}/>
				</SwiperSlide>
				<SliderBottomBtns />
			</Swiper>
		</>
	);
}
export default SliderPopular;
