import { ref, computed } from "vue";

// Create reactive wishlist state
const wishlistItems = ref([]);
const isModalVisible = ref(false);

// API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Get wishlist from localStorage on initialization
const loadWishlist = () => {
  const saved = localStorage.getItem("wishlist");
  if (saved) {
    wishlistItems.value = JSON.parse(saved);
  }
};

// Save wishlist to localStorage
const saveWishlist = () => {
  localStorage.setItem("wishlist", JSON.stringify(wishlistItems.value));
};

// Check if user is logged in
const isLoggedIn = () => {
  const token = localStorage.getItem("accessToken");
  return !!token;
};

// Get user ID from localStorage
const getUserId = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).id : null;
};

// API functions
const apiRequest = async (url, options = {}) => {
  const token = localStorage.getItem("accessToken");

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}/api/v1${url}`, config);

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "API request failed");
  }

  return response.json();
};

// Load wishlist on module initialization
loadWishlist();

export const useWishlist = () => {
  // Load wishlist from API if user is logged in
  const loadWishlistFromAPI = async () => {
    if (!isLoggedIn()) return;

    try {
      const response = await apiRequest("/wishlist");
      wishlistItems.value = response.wishlist || [];
    } catch (error) {
      console.error("Failed to load wishlist from API:", error);
      // Fallback to localStorage if API fails
    }
  };

  // Add item to wishlist
  const addToWishlist = async (product) => {
    // Check if product already exists in wishlist
    const existingIndex = wishlistItems.value.findIndex(
      (item) => item.id === product.id
    );

    if (existingIndex !== -1) {
      return false; // Already exists
    }

    if (isLoggedIn()) {
      // Add to API
      try {
        const userId = getUserId();
        const response = await apiRequest("/wishlist", {
          method: "POST",
          body: JSON.stringify({
            userId,
            productId: product.id,
          }),
        });

        // Add to local state with API response data
        const wishlistItem = {
          ...product,
          date: new Date().toLocaleDateString("vi-VN"),
          addedAt: new Date().toISOString(),
          wishlistId: response.wishlist?.id, // Store API wishlist ID
        };
        wishlistItems.value.push(wishlistItem);
        return true;
      } catch (error) {
        console.error("Failed to add to wishlist via API:", error);
        // Fallback to localStorage
      }
    }

    // Add to localStorage (for non-logged users or API fallback)
    const wishlistItem = {
      ...product,
      date: new Date().toLocaleDateString("vi-VN"),
      addedAt: new Date().toISOString(),
    };
    wishlistItems.value.push(wishlistItem);
    saveWishlist();
    return true;
  };

  // Remove item from wishlist
  const removeFromWishlist = async (productId) => {
    const index = wishlistItems.value.findIndex(
      (item) => item.id === productId
    );
    if (index === -1) return;

    const item = wishlistItems.value[index];

    if (isLoggedIn() && item.wishlistId) {
      // Remove from API
      try {
        await apiRequest(`/wishlist/${item.wishlistId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.error("Failed to remove from wishlist via API:", error);
        // Continue with local removal even if API fails
      }
    }

    // Remove from local state
    wishlistItems.value.splice(index, 1);
    saveWishlist();
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.value.some((item) => item.id === productId);
  };

  // Get all wishlist items
  const getWishlistItems = computed(() => wishlistItems.value);

  // Get wishlist count
  const getWishlistCount = computed(() => wishlistItems.value.length);

  // Clear all wishlist items
  const clearWishlist = async () => {
    if (isLoggedIn()) {
      // Clear from API (you might need to implement this endpoint)
      try {
        // If you have a clear all endpoint
        // await apiRequest('/wishlist/clear', { method: 'DELETE' })
      } catch (error) {
        console.error("Failed to clear wishlist via API:", error);
      }
    }

    wishlistItems.value = [];
    saveWishlist();
  };

  // Sync wishlist when user logs in
  const syncWishlistOnLogin = async () => {
    if (isLoggedIn()) {
      await loadWishlistFromAPI();
    }
  };

  // Clear wishlist when user logs out
  const clearWishlistOnLogout = () => {
    wishlistItems.value = [];
    saveWishlist();
  };

  // Modal control functions
  const showModal = () => {
    isModalVisible.value = true;
  };

  const hideModal = () => {
    isModalVisible.value = false;
  };

  const getModalVisibility = computed(() => isModalVisible.value);

  return {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getWishlistItems,
    getWishlistCount,
    clearWishlist,
    loadWishlistFromAPI,
    syncWishlistOnLogin,
    clearWishlistOnLogout,
    isLoggedIn,
    showModal,
    hideModal,
    getModalVisibility,
  };
};
