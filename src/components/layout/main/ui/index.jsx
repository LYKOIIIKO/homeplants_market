import { Route, Routes } from "react-router";
import IndexPage from '../../../pages/index-page'
import CatalogPage from '../../../pages/catalog-page'
import ProductPage from '../../../pages/product-page'
import BlogPage from '../../../pages/blog-page'
import DeliveryPage from '../../../pages/delivery-page'
import AboutPage from '../../../pages/about-page'
import CartPage from '../../../pages/cart-page'
import AccountPage from '../../../pages/account-page'
import WishlistPage from '../../../pages/wishlist-page'
import PayPage from '../../../pages/pay-page'
import ReturnsPage from '../../../pages/returns-page'
import PageNotFound from '../../../pages/404-page'

function Main() {
	return (
		<main>
			<Routes>
				<Route index element={<IndexPage />} />
				<Route path="/catalog" element={<CatalogPage />} />
				<Route path="/catalog/:id" element={<ProductPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/delivery" element={<DeliveryPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/cart" element={<CartPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/pay" element={<PayPage />} />
                <Route path="/returns" element={<ReturnsPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	);
}
export default Main;
