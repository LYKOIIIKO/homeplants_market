import { Route, Routes } from "react-router";
import PageNotFound from '../../../pages/404-page';
import AboutPage from '../../../pages/about-page';
import AccountPage from '../../../pages/account-page';
import BlogPage from '../../../pages/blog-page';
import CartPage from '../../../pages/cart-page';
import CatalogPage from '../../../pages/catalog-page';
import DeliveryPage from '../../../pages/delivery-page';
import IndexPage from '../../../pages/index-page';
import PayPage from '../../../pages/pay-page';
import ProductPage from '../../../pages/product-page';
import ReturnsPage from '../../../pages/returns-page';
import WishlistPage from '../../../pages/wishlist-page';

function Main() {
	return (
		<main className="site_main">
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
