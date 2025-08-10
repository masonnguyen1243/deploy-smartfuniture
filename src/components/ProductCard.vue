<template>
  <div
    class="group relative bg-white hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
  >
    <!-- Hình ảnh -->
    <div class="w-full h-64 bg-gray-100 flex items-center justify-center">
      <img :src="image" :alt="name" class="w-full h-full object-contain" />
    </div>

    <!-- Giảm giá -->
    <div class="absolute top-4 left-4">
      <span class="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
        -{{ discount }}%
      </span>
    </div>

    <!-- Icon hiện khi hover -->
    <div
      class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10"
    >
      <button
        @click="toggleWishlist"
        class="mb-3 w-10 h-10 hover:bg-gray-50 hover:text-gray-30 bg-white rounded-full shadow-lg flex items-center justify-center"
      >
        <Heart class="w-5 h-5 text-gray-700 cursor-pointer" />
      </button>
      <button
        class="w-10 h-10 hover:bg-gray-50 bg-white rounded-full shadow-lg flex items-center justify-center"
      >
        <ShoppingCart class="w-5 h-5 text-gray-700 cursor-pointer" />
      </button>
    </div>

    <!-- Nội dung -->
    <router-link :to="`/san-pham/${product.id}`">
      <div class="p-4">
        <p class="text-amber-700 font-medium">{{ label }}</p>
        <h3 class="font-semibold text-lg mb-1">{{ name }}</h3>
        <p class="text-gray-500 text-sm mb-2">{{ description }}</p>
        <div class="mb-10">
          <div
            v-if="oldPrice"
            class="flex justify-between border-t border-gray-300 mt-5 py-5"
          >
            <span class="text-gray-400 line-through text-sm">{{
              oldPrice
            }}</span>
            <span class="text-primary-500 font-bold text-lg">{{
              newPrice
            }}</span>
          </div>

          <div
            v-else
            class="flex justify-end border-t border-gray-300 mt-5 py-5"
          >
            <span class="text-primary-500 font-bold text-lg">{{
              newPrice
            }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { useWishlist } from "@/stores/wishlist";
import { Heart, ShoppingCart } from "lucide-vue-next";

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

const product = {
  id: props.id,
  label: props.label,
  discount: props.discount,
  name: props.name,
  description: props.description,
  oldPrice: props.oldPrice,
  price: props.newPrice,
  reviews: props.reviews,
  imageUrl: props.image,
};

const toggleWishlist = async () => {
  try {
    if (isInWishlist(props.id)) {
      await removeFromWishlist(props.id);
    } else {
      const success = await addToWishlist(product);
      if (success) {
        // Show wishlist modal after successfully adding
        showModal();
        console.log(`Đã thêm "${props.name}" vào danh sách yêu thích!`);
      }
    }
  } catch (error) {
    console.error("Wishlist operation failed:", error);
    // You can show a toast notification here
  }
};
</script>
