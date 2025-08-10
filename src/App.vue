<!-- App.vue -->
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import "@/assets/main.css";
import { useWishlist } from "@/stores/wishlist";
import WishlistModal from "@/components/WishlistModal.vue";

const { getModalVisibility, hideModal } = useWishlist();
</script>

<template>
  <div>
    <Header />
    <router-view />
    <Footer />
    <WishlistModal :is-visible="getModalVisibility" @close="hideModal" />
  </div>
</template>
