import { makeAutoObservable } from "mobx"
import * as images from "../assets"

class NavigationStore {
	navigation = [
		{
			name: "каталог",
			items: [
				{
					title: "Комнатные растения",
					link: "/catalog/indoor-plants",
					name: "indoor-plants",
					img: `url("${images.ImgCategory1}")`,
				},
				{
					title: "Уличные растения",
					link: "/catalog/outdoor-plants",
					name: "outdoor-plants",
					img: `url("${images.ImgCategory2}")`,
				},
				{
					title: "Очищающие воздух растения",
					link: "/catalog/air-purifying-plants",
					name: "air-purifying-plants",
					img: `url("${images.ImgCategory3}")`,
				},
				{
					title: "Горшки и кашпо",
					link: "/catalog/planters-and-pots",
					name: "planters-and-pots",
					img: `url("${images.ImgCategory4}")`,
				},
				{
					title: "Инструмент",
					link: "/catalog/gardening-tools",
					name: "gardening-tools",
					img: `url("${images.ImgCategory5}")`,
				},
			],
		},
	]

	constructor() {
		makeAutoObservable(this)
	}
}

const navigationStore = new NavigationStore()
export default navigationStore
