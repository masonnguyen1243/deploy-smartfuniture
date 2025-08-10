<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div
      class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden"
      @click.stop
    >
      <!-- Header -->
      <div
        class="bg-gray-800 text-white px-6 py-4 flex justify-between items-center"
      >
        <h3 class="text-lg font-semibold">
          Danh sách yêu thích ({{ wishlistItems.length }})
        </h3>
        <button
          @click="closeModal"
          class="text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div class="p-6 max-h-[60vh] overflow-y-auto">
        <div
          v-if="wishlistItems.length === 0"
          class="text-center py-8 text-gray-500"
        >
          <p>Danh sách yêu thích của bạn đang trống.</p>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="(item, index) in wishlistItems"
            :key="item.id"
            class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
          >
            <!-- Remove Button -->
            <button
              @click.stop="removeFromWishlist(item.id)"
              class="text-gray-400 hover:text-red-500 transition-colors text-lg font-normal cursor-pointer"
            >
              X
            </button>

            <!-- Product Image -->

            <div
              class="w-16 h-16 flex-shrink-0 border border-gray-200 rounded-md overflow-hidden"
            >
              <img
                :src="item.imageUrl"
                :alt="item.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Product Details -->
            <router-link
              :to="`/san-pham/${item.id}`"
              @click="closeModal"
              class="flex-grow"
            >
              <h4 class="text-lg font-medium text-red-600 mb-1">
                {{ item.name }}
              </h4>
              <div class="flex items-baseline gap-2 mb-1">
                <span
                  v-if="item.oldPrice"
                  class="text-gray-500 line-through text-sm"
                >
                  {{ item.oldPrice }}
                </span>
                <span class="text-gray-800 font-bold">
                  {{ item.price }}
                </span>
              </div>
              <p class="text-gray-500 text-sm">{{ item.date }}</p>
            </router-link>

            <!-- Add to Cart Button -->
            <button
              @click="addToCart(item)"
              class="bg-black cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors flex-shrink-0 text-sm"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="border-t border-gray-200 px-6 py-4 flex justify-end">
        <button
          @click="closeModal"
          class="text-red-600 hover:text-red-700 cursor-pointer underline font-medium"
        >
          TIẾP TỤC MUA HÀNG
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlist } from "@/stores/wishlist";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const { getWishlistItems, removeFromWishlist: removeFromWishlistStore } =
  useWishlist();

// Get reactive wishlist items
const wishlistItems = getWishlistItems;

// Close modal
const closeModal = () => {
  emit("close");
};

// Remove item from wishlist
const removeFromWishlist = async (productId) => {
  try {
    await removeFromWishlistStore(productId);
  } catch (error) {
    console.error("Failed to remove from wishlist:", error);
  }
};

// Add to cart
const addToCart = (item) => {
  console.log("Adding to cart:", item.name);
  // In real app, this would dispatch to cart store
  alert(`Đã thêm "${item.name}" vào giỏ hàng!`);
};
</script>

<style scoped>
/* Custom scrollbar for the content area */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
