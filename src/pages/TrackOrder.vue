<template>
  <div class="min-h-screen flex flex-col items-center py-10">
    <div class="w-full bg-white rounded-lg">
      <div class="bg-gray-100 p-8">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800">Theo Dõi Đơn Hàng</h1>
        </div>
        <div class="text-center text-sm text-gray-500 mb-8">
          <span class="text-gray-500">Trang Chủ</span> >
          <span>Theo Dõi Đơn Hàng</span>
        </div>
      </div>

      <div class="mt-20 p-8">
        <p class="text-gray-500 mb-6 leading-relaxed">
          Để theo dõi đơn hàng của bạn xin vui lòng nhập ID đơn hàng của bạn vào
          ô dưới đây và nhấn nút "Theo dõi". ID đơn hàng đã được gửi cho bạn qua
          biên lai và qua email xác nhận mà bạn nhận được.
        </p>

        <form
          @submit.prevent="trackOrder"
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label for="orderId" class="block text-sm font-medium text-gray-700"
              >ID Đơn hàng</label
            >
            <input
              id="orderId"
              v-model="orderId"
              type="text"
              placeholder="Tìm thấy trong email xác nhận đơn hàng của bạn."
              class="mt-2 block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              for="billingEmail"
              class="block text-sm font-medium text-gray-700"
              >Email thanh toán</label
            >
            <input
              id="billingEmail"
              v-model="billingEmail"
              type="email"
              placeholder="Email được sử dụng trong quá trình thanh toán."
              class="mt-2 block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div class="col-span-full mt-4">
            <button
              type="submit"
              class="w-full md:w-auto px-7 py-5 bg-black text-white font-semibold shadow-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors cursor-pointer"
            >
              THEO DÕI
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const orderId = ref("");
const billingEmail = ref("");

const trackOrder = () => {
  // Logic xử lý khi người dùng nhấn nút "Theo dõi"
  console.log("ID Đơn hàng:", orderId.value);
  console.log("Email thanh toán:", billingEmail.value);
  alert(
    ` ID Đơn hàng:, ${orderId.value}, Email thanh toán:, ${billingEmail.value}`
  );
  // Gọi API để theo dõi đơn hàng
};
</script>
