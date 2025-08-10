import { createRouter, createWebHistory } from "vue-router";

// Import các component bạn có sẵn hoặc cần tạo
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ProductList from "../pages/ProductList.vue";
import NewsPage from "../pages/NewsPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import CartPage from "../pages/CartPage.vue";
import WishlistPage from "../pages/WishlistPage.vue";
import AccountPage from "../pages/AccountPage.vue";
import StoreLocation from "../pages/StoreLocation.vue";
import TrackOrder from "../pages/TrackOrder.vue";
import HotlinePage from "../pages/HotlinePage.vue";
import Log from "@/view/log.vue";
import ProductDetails from "@/components/ProductDetails.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/gioi-thieu", component: AboutPage },
  { path: "/san-pham", component: ProductList },
  {
    path: "/san-pham/:id",
    name: "ProductDetail",
    component: ProductDetails,
    props: true,
  },
  { path: "/tin-tuc", component: NewsPage },
  { path: "/lien-he", component: ContactPage },
  { path: "/gio-hang", component: CartPage },
  { path: "/yeu-thich", component: WishlistPage },
  { path: "/tai-khoan", component: Log },
  { path: "/store-location", component: StoreLocation },
  { path: "/track-order", component: TrackOrder },
  { path: "/hotline", component: HotlinePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
