import MySlider from "./components/mySlider/MySlider";
import SectionCategories from "./components/sectionCategories/SectionCategories";
import SectionFeedback from './components/sectionFeedback/SectionFeedback';
import SectionNews from "./components/sectionNews/SectionNews";
import SectionPopularProducts from "./components/sectionPopularProducts/SectionPopularProducts";

function IndexPage() {
	return (
		<>
			<MySlider />
			<SectionCategories />
			<SectionPopularProducts />
			<SectionFeedback />
			<SectionNews />
		</>
	);
}
export default IndexPage;
