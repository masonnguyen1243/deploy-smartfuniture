//product details

<script setup>
import RelatedProduct from "@/components/RelatedProduct.vue";
import { useWishlist } from "@/stores/wishlist";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons-vue";
import { Heart, ShoppingCart } from "lucide-vue-next";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const relatedProducts = ref([]);
const product = ref(null);
const quantity = ref(1);

const fetchProductDetail = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/v1/products/${route.params.id}`
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const json = await res.json();

    product.value = json;
  } catch (err) {
    console.error(err);
  }
};

const increaseQty = () => {
  quantity.value++;
};

const decreaseQty = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const fetchRelatedProducts = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/v1/products/related/${route.params.id}`
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const json = await res.json();

    relatedProducts.value = json;
  } catch (err) {
    console.error(err);
  }
};

const addToCart = () => {
  alert("Add to cart successfully");
};

const props = defineProps([
  "id",
  "label",
  "discount",
  "name",
  "description",
  "oldPrice",
  "newPrice",
  "reviews",
  "image",
]);

const { addToWishlist, removeFromWishlist, isInWishlist, showModal } =
  useWishlist();

const toggleWishlist = async () => {
  try {
    if (isInWishlist(product.value.id)) {
      await removeFromWishlist(product.value.id);
    } else {
      const success = await addToWishlist(product.value);
      if (success) {
        // Show wishlist modal after successfully adding
        showModal();
        console.log(`Đã thêm "${product.value.name}" vào danh sách yêu thích!`);
      }
    }
  } catch (error) {
    console.error("Wishlist operation failed:", error);
    // You can show a toast notification here
  }
};

watch(
  () => route.params.id,
  (newId, oldId) => {
    // Chỉ gọi lại khi id thực sự thay đổi
    if (newId !== oldId) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Tùy chọn: tạo hiệu ứng cuộn mượt mà
      });

      fetchProductDetail();
      fetchRelatedProducts();
    }
  },
  // Thêm immediate: true để chạy watcher ngay khi component được mount lần đầu
  { immediate: true }
);

onMounted(fetchProductDetail);
onMounted(fetchRelatedProducts);
</script>

<template>
  <div class="font-sans text-gray-800" v-if="product">
    <!-- Breadcrumb -->
    <div class="bg-gray-50 py-6">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-2xl font-semibold mb-2">Chi Tiết Sản Phẩm</h1>
        <p class="text-sm text-gray-500">Trang Chủ > {{ product.name }}</p>
      </div>
    </div>

    <!-- Product Detail -->
    <div
      class="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <!-- Image Gallery -->
      <div>
        <img
          :src="product.imageUrl"
          :alt="product.name"
          class="w-full rounded-lg"
        />
        <div class="flex space-x-4 mt-4">
          <img
            v-for="(img, idx) in product.images || [product.imageUrl]"
            :key="idx"
            :src="img"
            class="w-20 h-20 border rounded-lg cursor-pointer hover:border-orange-500"
          />
        </div>
      </div>

      <!-- Info -->
      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ product.name }}</h2>
        <div class="mb-4">
          <span
            v-if="product.oldPrice"
            class="line-through text-gray-400 mr-2"
            >{{ product.oldPrice + "₫" }}</span
          >
          <span class="text-red-500 font-semibold text-xl"
            >{{ product.price }}₫</span
          >
        </div>
        <p class="text-gray-600 mb-4">
          {{ product.description }}
        </p>
        <p class="text-sm text-gray-500 mb-2">Mã: {{ product.sku || "N/A" }}</p>
        <p class="text-sm text-gray-500 mb-4">
          Danh mục: {{ product.category?.name || "Chưa có" }}
        </p>
        <div class="flex items-center space-x-2 mb-4">
          <button class="px-3 py-1 border cursor-pointer" @click="decreaseQty">
            -
          </button>
          <span>{{ quantity }}</span>
          <button class="px-3 py-1 border cursor-pointer" @click="increaseQty">
            +
          </button>
        </div>

        <!-- icons -->
        <div class="flex items-center my-4">
          <div class="flex items-center justify-center">
            <span class="font-medium text-gray-700">Chia sẻ:</span>
            <a
              href=""
              class="w-10 h-10 flex items-center justify-center hover:text-red-500"
            >
              <FacebookFilled class="w-5 h-5 text-gray-700 cursor-pointer" />
            </a>
            <a
              href=""
              class="w-10 h-10 flex items-center justify-center hover:text-red-500"
            >
              <InstagramFilled class="w-5 h-5 text-gray-700 cursor-pointer" />
            </a>
            <a
              href=""
              class="w-10 h-10 flex items-center justify-center hover:text-red-500"
            >
              <LinkedinFilled class="w-5 h-5 text-gray-700 cursor-pointer" />
            </a>
            <a
              href=""
              class="w-10 h-10 flex items-center justify-center hover:text-red-500"
            >
              <TwitterCircleFilled
                class="w-5 h-5 text-gray-700 cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="addToCart"
            class="bg-black cursor-pointer text-white px-6 py-3 uppercase tracking-wide hover:bg-orange-500 transition flex gap-3"
          >
            <ShoppingCart class="w-5 h-5 text-white cursor-pointer" />
            Thêm vào giỏ hàng
          </button>

          <button
            @click="toggleWishlist"
            class="bg-black cursor-pointer text-white px-6 py-3 uppercase tracking-wide hover:bg-pink-500 transition flex gap-3"
          >
            <Heart class="w-5 h-5 text-white cursor-pointer" />
            Thêm vào yêu thích
          </button>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="container mx-auto px-6">
      <div class="flex border-b mb-4">
        <button class="px-4 py-2 border-b-2 border-black">Mô Tả</button>
      </div>
      <p class="text-gray-600 mb-6">
        {{ product.longDescription || product.description }}
      </p>
    </div>

    <!-- Sản phẩm tương tự -->
    <RelatedProduct :products="relatedProducts.relatedProduct" />
  </div>

  <!-- Loading -->
  <div v-else class="text-center py-20">Đang tải...</div>
</template>
