import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../../../../catalog-page/ui/components/productCard/ProductCard";
import SliderBottomBtns from "./SliderBottomBtns";
import "./SliderPopular.css";

function SliderPopular(props) {
	const { products } = props;
	return (
		<>
			<Swiper
				className="slider-popular_products"
				slidesPerView={4}
				spaceBetween={50}
				navigation={{
					nextEl: "slider_bottom_btn-prev",
					prevEl: "slider_bottom_btn-next",
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					1200: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					900: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
				}}
			>
				{products?.map((item) => {
					return (
						<SwiperSlide>
							<ProductCard key={item.id} product={item} />
						</SwiperSlide>
					);
				})}

				<SliderBottomBtns />
			</Swiper>
		</>
	);
}
export default SliderPopular;
