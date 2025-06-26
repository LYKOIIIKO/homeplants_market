import { makeAutoObservable } from "mobx";

class NavigationStore {
	navigation = [
		{
			name: "каталог",
			items: [
				{ title: "Комнатные растения", link: "/catalog/indoor-plants", name: 'indoor-plants' },
				{ title: "Уличные растения", link: "/catalog/outdoor-plants", name: 'outdoor-plants'},
				{
					title: "Очищающие воздух растения",
					link: "/catalog/air-purifying-plants", name:'air-purifying-plants'
				},
				{ title: "Горшки и кашпо", link: "/catalog/planters-and-pots", name:'planters-and-pots' },
				{ title: "Инструмент", link: "/catalog/gardening-tools", name: 'gardening-tools' },
			],
		},
	];

	constructor() {
		makeAutoObservable(this);
	}
}

const navigationStore = new NavigationStore();
export default navigationStore;
