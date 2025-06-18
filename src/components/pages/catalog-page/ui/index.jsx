import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation";
import CatalogList from "./components/catalogList/CatalogList";

function CatalogPage() {
	return (
		<>
			<PageNavigation linkTo={'/catalog'} title={'Каталог'} />
			<CatalogList />
		</>
	);
}
export default CatalogPage;
