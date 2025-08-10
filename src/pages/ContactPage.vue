<template>
  <!-- Features Section -->
  <section class="py-15 bg-secondary-50">
    <div class="max-w-7xl mx-auto px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border border-gray-200 p-2"
      >
        <!-- Feature 1 -->
        <div class="flex items-start space-x-4 my-6 border-r border-gray-200">
          <div class="bg-primary-100 p-2 rounded-lg">
            <Truck class="w-10 h-10 text-primary-500" />
          </div>
          <div>
            <h3 class="font-semibold text-secondary-900 mb-2">Email</h3>
            <p class="text-secondary-600 text-sm">info@themona.global</p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex items-start space-x-4 my-6 border-r border-gray-200">
          <div class="bg-primary-100 p-2 rounded-lg">
            <Shield class="w-10 h-10 text-primary-500" />
          </div>
          <div>
            <h3 class="font-semibold text-secondary-900 mb-2">Địa Chỉ</h3>
            <p class="text-secondary-600 text-sm">
              Digital Agency Network 2021, Eastbourne Terrace
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="flex items-start space-x-4 my-6 border-gray-200">
          <div class="bg-primary-100 p-2 rounded-lg">
            <Headphones class="w-10 h-10 text-primary-500" />
          </div>
          <div>
            <h3 class="font-semibold text-secondary-900 mb-2">Số Điện Thoại</h3>
            <p class="text-secondary-600 text-sm">(+84) 0313-728-397</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-8 bg-gray-100 min-h-screen">
    <h2 class="text-3xl font-bold mb-6 text-center">Liên hệ với chúng tôi</h2>
    <form class="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <div>
        <label class="block mb-1 font-semibold">Họ và tên</label>
        <input
          type="text"
          v-model="form.name"
          class="w-full border p-2 rounded border-gray-200"
          placeholder="Nhập họ tên của bạn"
        />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Email</label>
        <input
          type="email"
          v-model="form.email"
          class="w-full border p-2 rounded border-gray-200"
          placeholder="Nhập email của bạn"
        />
      </div>
      <div>
        <label class="block mb-1 font-semibold">Nội dung</label>
        <textarea
          v-model="form.message"
          class="w-full border p-2 rounded border-gray-200"
          rows="5"
          placeholder="Nhập nội dung liên hệ"
        ></textarea>
      </div>
      <button
        type="submit"
        @click.prevent="submitForm"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Gửi liên hệ
      </button>
    </form>
  </section>
</template>
<script setup>
import { Truck, Headphones, Shield, Award } from "lucide-vue-next";
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  if (!form.name || !form.email || !form.message) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>
