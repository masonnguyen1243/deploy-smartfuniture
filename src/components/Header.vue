<template>
  <header class="flex mr-1 items-center gap-3 h-full">
    <a href="#">
      <img
        src="https://smartfurniture.monamedia.net/wp-content/uploads/2024/11/logo.svg"
        alt="Smart Furniture"
        class="mb-4 w-32"
      />
    </a>
    <div class="w-full border-l border-gray-200">
      <!-- tầng 1 -->
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2 text-sm text-gray-700"
      >
        <!-- Bên trái -->
        <div class="flex items-center gap-4">
          <router-link
            to="/store-location"
            class="text-gray-700 inline-flex items-center no-underline border-r border-gray-200 pr-4 font-medium"
          >
            <EnvironmentOutlined class="me-1 h-3" /> Vị trí cửa hàng
          </router-link>

          <router-link
            to="/track-order"
            class="text-gray-700 inline-flex items-center no-underline border-r border-gray-200 pr-4 font-medium"
          >
            <PhoneOutlined class="me-1 h-3" /> Theo dõi đơn hàng
          </router-link>

          <router-link
            to="/hotline"
            class="bodder-r inline-flex items-center border-gray-200 pr-4 font-medium"
          >
            <CarOutlined class="me-1 h-3" /> Hotline
          </router-link>
        </div>

        <!-- Bên phải -->
        <div class="flex gap-4 text-right">
          <div class="border-r border-gray-200 pr-4 text-left">
            <div class="flex items-start gap-2">
              <DropboxOutlined class="text-2xl mt-2 text-blue-600" />
              <div>
                <p class="font-medium">Miễn phí vận chuyển</p>
                <p class="text-xs text-gray-500">Cho đơn hàng trên 2tr</p>
              </div>
            </div>
          </div>

          <div class="border-r border-gray-200 pr-4">
            <div class="flex items-start gap-2">
              <CustomerServiceFilled class="text-2xl mt-2" />
              <div class="flex flex-col text-left">
                <p class="font-medium">Hỗ trợ 24/7</p>
                <p class="text-gray-500">Hỗ trợ tận tâm</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col leading-tight text-left">
            <div class="flex items-start gap-2">
              <UnlockFilled class="text-2xl mt-2" />
              <div>
                <p class="font-medium">Thanh toán an toàn</p>
                <p class="text-gray-500">Đảm bảo an toàn thông tin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- tầng 2 -->
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 border-t border-gray-200"
      >
        <div class="flex items-center gap-10">
          <nav class="flex gap-6 text-base">
            <router-link
              to="/"
              class="text-gray-700 font-medium hover:text-red-500 no-underline"
              active-class="text-red-500"
            >
              Trang chủ
            </router-link>

            <router-link
              to="/gioi-thieu"
              class="text-gray-700 font-medium hover:text-red-500 no-underline"
              active-class="text-red-500"
            >
              Giới thiệu
            </router-link>

            <router-link
              to="/san-pham"
              class="text-gray-700 font-medium hover:text-red-500 no-underline"
              active-class="text-red-500"
            >
              Sản phẩm
            </router-link>

            <router-link
              to="/tin-tuc"
              class="text-gray-700 font-medium hover:text-red-500 no-underline"
              active-class="text-red-500"
            >
              Tin tức
            </router-link>

            <router-link
              to="/lien-he"
              class="text-gray-700 font-medium hover:text-red-500 no-underline"
              active-class="text-red-500"
            >
              Liên hệ
            </router-link>
          </nav>
        </div>

        <!-- Bên phải -->
        <div class="flex items-center">
          <div class="relative w-70 m-5">
            <span
              class="absolute inset-y-0 left-0 flex items-center ml-2 text-gray-400"
            >
              <SearchOutlined class="text-l md:text-xl" />
            </span>
            <input
              type="text"
              placeholder="Tìm kiếm"
              class="pl-10 pr-3 py-2 h-10 w-70 border border-gray-300 rounded-full bg-gray-100 focus:outline-none focus:border-red-500"
            />
          </div>

          <router-link
            to="/tai-khoan"
            class="text-gray-700 font-medium hover:text-red-500 no-underline ml-5"
          >
            <UserOutlined class="w-6 h-6 cursor-pointer" />
          </router-link>

          <!-- User menu when logged in -->
          <div v-if="isUserLoggedIn" class="flex items-center gap-2 ml-5">
            <span class="text-sm text-gray-700">{{
              user?.name || user?.email
            }}</span>
            <button
              @click="handleLogout"
              class="text-gray-700 hover:text-red-500 transition-colors cursor-pointer"
              title="Đăng xuất"
            >
              <LogoutOutlined class="w-5 h-5" />
            </button>
          </div>

          <button
            @click="showWishlistModal"
            class="text-gray-700 font-medium hover:text-red-500 no-underline relative"
          >
            <HeartOutlined class="h-6 w-6 cursor-pointer" />
            <!-- Wishlist count badge -->
            <span
              v-if="wishlistCount > 0"
              class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ wishlistCount > 99 ? "99+" : wishlistCount }}
            </span>
          </button>

          <router-link
            to="/gio-hang"
            class="text-gray-700 font-medium hover:text-red-500 no-underline"
          >
            <ShoppingOutlined class="h-6 w-6 cursor-pointer" />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { useWishlist } from "@/stores/wishlist";
import {
  UserOutlined,
  ShoppingOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  CarOutlined,
  SearchOutlined,
  DropboxOutlined,
  CustomerServiceFilled,
  UnlockFilled,
  TableOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "Header",
  components: {
    UserOutlined,
    ShoppingOutlined,
    HeartOutlined,
    EnvironmentOutlined,
    PhoneOutlined,
    CarOutlined,
    SearchOutlined,
    DropboxOutlined,
    CustomerServiceFilled,
    UnlockFilled,
    TableOutlined,
    LogoutOutlined,
  },
  setup() {
    const { getWishlistCount, clearWishlistOnLogout, isLoggedIn, showModal } =
      useWishlist();
    const user = ref(null);
    const isUserLoggedIn = ref(false);

    onMounted(() => {
      const userData = localStorage.getItem("user");
      if (userData) {
        user.value = JSON.parse(userData);
        isUserLoggedIn.value = true;
      }
    });

    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("rememberLogin");
      clearWishlistOnLogout();
      isUserLoggedIn.value = false;
      user.value = null;
      window.location.href = "/";
    };

    const showWishlistModal = () => {
      showModal();
    };

    return {
      wishlistCount: getWishlistCount,
      user,
      isUserLoggedIn,
      handleLogout,
      showWishlistModal,
    };
  },
});
</script>
