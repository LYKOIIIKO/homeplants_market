import { useEffect, useState } from "react"

function GetCart() {
	const [cart, setCart] = useState([])

	const cartTmp = JSON.parse(localStorage.getItem("userCart"))

	useEffect(() => {
		if (!cart.length && cartTmp?.length) setCart(cartTmp)
	}, [cartTmp])

	return cart
}

export { GetCart }
