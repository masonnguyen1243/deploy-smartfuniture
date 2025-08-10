<template>
  <!-- Features Section -->
  <section class="py-15 bg-secondary-50">
    <div class="max-w-7xl mx-auto px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border border-gray-200 p-2"
      >
        <!-- Feature 1 -->
        <div class="flex items-start space-x-4 my-6 border-r border-gray-200">
          <div class="bg-primary-100 p-2 rounded-lg">
            <Truck class="w-10 h-10 text-primary-500" />
          </div>
          <div>
            <h3 class="font-semibold text-secondary-900 mb-2">
              Miễn Phí Vận Chuyển
            </h3>
            <p class="text-secondary-600 text-sm">
              Miễn phí vận chuyển cho đơn hàng trên 500k
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex items-start space-x-4 my-6 border-r border-gray-200">
          <div class="bg-primary-100 p-2 rounded-lg">
            <Shield class="w-10 h-10 text-primary-500" />
          </div>
          <div>
            <h3 class="font-semibold text-secondary-900 mb-2">
              Thanh Toán An Toàn
            </h3>
            <p class="text-secondary-600 text-sm">
              Thanh toán bảo mật an toàn 100%
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="flex items-start space-x-4 my-6 border-r border-gray-200">
          <div class="bg-primary-100 p-2 rounded-lg">
            <Headphones class="w-10 h-10 text-primary-500" />
          </div>
          <div>
            <h3 class="font-semibold text-secondary-900 mb-2">Hỗ Trợ 24/7</h3>
            <p class="text-secondary-600 text-sm">
              Dịch vụ hỗ trợ chuyên nghiệp 24/7
            </p>
          </div>
        </div>

        <!-- Feature 4 -->
        <div class="flex items-start space-x-4 my-6 border-r border-gray-200">
          <div class="bg-primary-100 p-2 rounded-lg">
            <Award class="w-10 h-10 text-primary-500" />
          </div>
          <div>
            <h3 class="font-semibold text-secondary-900 mb-2">
              Cam Kết Hoàn Tiền
            </h3>
            <p class="text-secondary-600 text-sm">
              Đảm bảo hoàn tiền nếu không hài lòng
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { Truck, Headphones, Shield, Award } from "lucide-vue-next";
</script>
