<script setup>
import { Heart, ShoppingCart } from "lucide-vue-next";

defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="container mx-auto px-6 py-10">
    <h3 class="text-xl font-semibold mb-6 border-l-4 border-red-500 pl-3">
      Sản Phẩm Tương Tự
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <router-link
        v-for="item in products"
        :key="item.id"
        :to="{ name: 'ProductDetail', params: { id: item.id } }"
        class="overflow-hidden relative hover:shadow-lg transition cursor-pointer"
      >
        <!-- Hình ảnh sản phẩm -->
        <img
          :src="item.imageUrl"
          :alt="item.name"
          class="w-full h-48 object-cover"
        />

        <!-- Hiển thị discount -->
        <div class="absolute top-4 left-4">
          <span class="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
            -{{ item.discount }}%
          </span>
        </div>

        <!-- Icon hiện khi hover -->
        <div
          class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          <button
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

        <!-- Nội dung sản phẩm -->
        <div class="p-4">
          <h4 class="text-base font-semibold mb-2 truncate">
            {{ item.name }}
          </h4>

          <!-- Giá và giảm giá -->
          <div class="mb-1 flex justify-between">
            <span
              v-if="item.oldPrice"
              class="line-through text-gray-400 text-sm mr-2"
            >
              {{ item.oldPrice + "₫" }}
            </span>
            <span class="text-red-500 font-semibold">{{ item.price }}₫</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
