<template>
  <div>
    <!--ảnh 1-->
    <div
      id="app"
      v-show="currentIndex === 0"
      class="bg-[url(/images/anh2.jpg)] bg-cover bg-center text-white h-[600px] py-10 pl-15"
    >
      <p class="text-red-700 text-xl mb-5">Mona Furniture</p>
      <p class="text-5xl mb-1">Mang đến phong cách</p>
      <p class="text-5xl mb-4">sống đẳng cấp</p>
      <p class="text-xl text-medium">
        Nâng tầm không gian sống với những thiết kế nội thất hiện địa và sang
      </p>
      <p class="text-xl text-medium mb-4">
        trọng từ bộ sưu tập 2024 của Mona Furniture
      </p>
      <div class="flex flex-col items-start">
        <p class="text-xl text-medium mb-4">
          Giá chỉ từ: <span class="text-red-700">500k</span>
        </p>
        <button
          class="border border-gray-300 bg-white text-black hover:bg-red-500 py-2 px-5"
        >
          Mua ngay
          <ArrowRightOutlined class="flex items-start mt-2 py-1 ms-1" />
        </button>
      </div>
    </div>

    <!--ảnh 2-->
    <div
      id="app"
      v-show="currentIndex === 1"
      class="bg-[url(/images/anh.jpg)] bg-cover bg-center text-white h-[600px] py-10 pl-15 transition duration-100 ease-in-out"
    >
      <p class="text-red-700 text-xl mb-5">Mona Furniture</p>
      <p class="text-5xl mb-4">Nội thất phong cách tối giản</p>
      <p class="text-xl text-medium">
        Gia tăng hiệu suất làm việc với các thiết kế nội thất tinh tế, đơn giản
        mà
      </p>
      <p class="text-xl text-medium mb-4">
        đầy đủ tiện nghi, giúp không gian gọn luôn gọn gàng và thanh lịch
      </p>
      <div class="flex flex-col items-start">
        <p class="text-xl text-medium mb-4">
          Giá chỉ từ: <span class="text-red-700">500k</span>
        </p>
        <button
          class="border border-gray-300 bg-white text-black hover:bg-red-500 py-2 px-5"
        >
          Mua ngay
          <ArrowRightOutlined class="flex items-start mt-2 py-1 ms-1" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ArrowRightOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
const currentIndex = ref(1);
onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 2;
  }, 5000);
});
defineComponent({
  name: "HeroBanner",
  components: {
    ArrowRightOutlined,
  },
});
</script>
