import { observer } from "mobx-react-lite";
import { useParams, useSearchParams } from "react-router";
import navigationStore from "../../../../store/navigationStore";
import PageNavigation from "../../../shared/ui/pageNavigation/PageNavigation";
import CatalogList from "./components/catalogList/CatalogList";

function CatalogPage() {
	const { categoryId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const { navigation } = navigationStore;
	let categoryTitle = "";

	if (categoryId) {
		const categoryTitleObj = navigation.map((item) => {
			if (item.name == "каталог")
				return item.items.find((i) => {
					if (i.name == categoryId) return i.title;
				});
		});

		categoryTitle = categoryTitleObj.map((item) => {
			return item.title;
		});
	}

	return (
		<>
			<PageNavigation
				linkTo={"catalog"}
				title={"Каталог"}
				categoryLink={categoryId ? categoryId : null}
				categoryTitle={categoryId ? categoryTitle : null}
			/>
			<CatalogList category={categoryId} searchParams={searchParams} setSearchParams={setSearchParams} />
		</>
	);
}
export default observer(CatalogPage);
