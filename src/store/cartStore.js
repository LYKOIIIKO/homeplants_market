import { makeAutoObservable } from "mobx";
import { GetCart } from "../services/cartService";

class CartStore {
	cart = [];

	constructor() {
		makeAutoObservable(this);
		this.cartTmp = JSON.parse(localStorage.getItem("userCart"));
		if (!this.cart.length && this.cartTmp?.length) this.cart = this.cartTmp;
	}

	getAll() {
		const data = GetCart();
		this.setAll(data);
	}

	setAll(cart) {
		this.cart = cart;
	}
	clearAll() {
		this.cart = [];
		localStorage.removeItem("userCart");
	}

	getCartLength() {
		return this.cart.length;
	}

	setCart(productId) {
		if (!this.cart.length) {
			this.cart = [...this.cart, { id: productId, count: 1 }];

			localStorage.setItem("userCart", JSON.stringify(this.cart));
		} else {
			let str = JSON.stringify(this.cart);

			if (str.indexOf(productId) == -1) {
				this.cart = [...this.cart, { id: productId, count: 1 }];

				localStorage.setItem("userCart", JSON.stringify(this.cart));
			}
		}
	}

	removeItem(id) {
		this.cart = this.cart.filter((item) => item.id !== id);
		localStorage.setItem("userCart", JSON.stringify(this.cart));
	}

	setItemCount(id) {
		this.cart = this.cart.map((item) => {
			if (item.id == id) item.count++;
			return item;
		});
		localStorage.setItem("userCart", JSON.stringify(this.cart));
	}

	getItemCount(id) {
		this.cart = this.cart.map((item) => {
			if (item.id == id) item.count--;
			return item;
		});
		localStorage.setItem("userCart", JSON.stringify(this.cart));
	}
}

const cartStore = new CartStore();
export default cartStore;
