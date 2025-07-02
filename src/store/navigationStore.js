import { makeAutoObservable } from "mobx";

class NavigationStore {
	navigation = [
		{
			name: "каталог",
			items: [
				{
					title: "Комнатные растения",
					link: "/catalog/indoor-plants",
					name: "indoor-plants",
					img: "url(src/assets/index_page/category_1.jpg)",
				},
				{
					title: "Уличные растения",
					link: "/catalog/outdoor-plants",
					name: "outdoor-plants",
					img: "url(src/assets/index_page/category_2.jpg)",
				},
				{
					title: "Очищающие воздух растения",
					link: "/catalog/air-purifying-plants",
					name: "air-purifying-plants",
					img: "url(src/assets/index_page/category_3.jpg)",
				},
				{
					title: "Горшки и кашпо",
					link: "/catalog/planters-and-pots",
					name: "planters-and-pots",
					img: "url(src/assets/index_page/category_4.jpg)",
				},
				{
					title: "Инструмент",
					link: "/catalog/gardening-tools",
					name: "gardening-tools",
					img: "url(src/assets/index_page/category_5.jpg)",
				},
			],
		},
	];

	constructor() {
		makeAutoObservable(this);
	}
}

const navigationStore = new NavigationStore();
export default navigationStore;
