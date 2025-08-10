<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { ref, onMounted } from "vue";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// State lưu sản phẩm
const products = ref([]);

const fetchProducts = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/products`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await res.json();

    // Lấy đúng mảng data
    products.value = json.data.map((item) => ({
      id: item.id,
      label: item.category?.name || "",
      discount: item.discount ? `${item.discount}` : 0,
      name: item.name,
      description: item.description,
      oldPrice: item.oldPrice ? `${item.oldPrice}₫` : 0,
      newPrice: `${item.price}₫`, // Nếu có giảm giá thì thay đổi
      reviews: 0, // API chưa có reviews
      image: item.imageUrl,
    }));
  } catch (err) {
    console.error(err);
  }
};

onMounted(fetchProducts);
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8"
  >
    <RouterLink v-for="(product, index) in products" :key="index">
      <ProductCard v-bind="product" />
    </RouterLink>
  </div>
</template>
