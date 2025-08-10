<template>
  <div class="space-y-24 px-6 lg:px-20 py-10 bg-white text-gray-800">
    <!-- Section 1: Kinh nghiệm + giới thiệu -->
    <section class="flex flex-col lg:flex-row items-center gap-10">
      <!-- Left image + box -->
      <div class="relative flex-1">
        <div
          class="absolute top-0 left-0 bg-white shadow-md p-4 text-center w-24 h-24 flex flex-col items-center justify-center rounded"
        >
          <p class="text-3xl font-bold">26<sup>+</sup></p>
          <p class="text-sm leading-4">năm<br />kinh nghiệm</p>
        </div>
        <img
          src="/public/images/anh.jpg"
          alt="Living Room"
          class="rounded-lg w-full"
        />
      </div>

      <!-- Right text -->
      <div class="flex-1 space-y-4">
        <button class="border px-4 py-1 text-sm rounded">Mona Furniture</button>
        <h2 class="text-3xl font-bold">
          Thiết kế nội thất<br />phù hợp với mọi nhu cầu
        </h2>
        <p class="text-gray-500">
          Lựa chọn sản phẩm theo nhu cầu và sở thích cá nhân.<br />
          Với Mona Furniture, bạn có thể tạo dựng không gian sống ưng ý và tiện
          nghi nhất.
        </p>

        <div class="flex gap-6 mt-4">
          <div class="flex items-center gap-2 font-medium">
            <span>🛋️</span>Nội thất chất lượng
          </div>
          <div class="flex items-center gap-2 font-medium">
            <span>🏠</span>Không gian sống lý tưởng
          </div>
        </div>

        <ul class="mt-4 space-y-2 text-sm">
          <li>
            ✔️ Cung cấp sản phẩm nội thất cao cấp giúp bạn tối ưu hóa không
            gian.
          </li>
          <li>
            ✔️ Kết hợp tinh tế giữa màu sắc, kiểu dáng và chất liệu, mang đến
            không gian sống hoàn hảo.
          </li>
        </ul>
      </div>
    </section>

    <!-- Section 2: Doanh nghiệp -->
    <section class="text-center space-y-6">
      <button class="border border-black px-4 py-1 rounded-full font-semibold">
        Nội Thất Bền Bỉ 100%
      </button>
      <h2 class="text-3xl font-bold leading-snug">
        Sản Xuất Nội Thất Đẹp Mắt<br />Cho Doanh Nghiệp Của Bạn
      </h2>

      <div class="flex justify-center gap-4">
        <button class="px-6 py-2 bg-black text-white rounded shadow">
          ABOUT US
        </button>
        <button class="px-6 py-2 bg-white border rounded">OBJECTIVE</button>
        <button class="px-6 py-2 bg-white border rounded">EXCELLENT</button>
      </div>

      <p class="text-gray-500 max-w-3xl mx-auto">
        Từ thiết kế đến chất lượng, Mona Furniture cam kết mang đến những sản
        phẩm đẳng cấp cho doanh nghiệp của bạn. Mang đến cho không gian văn
        phòng sự thoải mái và năng suất làm việc cao nhất.
      </p>

      <h3 class="text-xl font-semibold">
        Nội Thất Mona Furniture – Nâng Tầm Không Gian Sống
      </h3>
      <div
        class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left max-w-4xl mx-auto text-sm"
      >
        <div>✔️ Nội Thất Cao Cấp Cho Doanh Nghiệp</div>
        <div>✔️ Thiết Kế Đẹp Mắt</div>
        <div>✔️ Nâng Tầm Không Gian Sống</div>
        <div>✔️ Đảm Bảo Chất Lượng</div>
      </div>
    </section>

    <!-- Section 3: Chính sách -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div class="bg-white p-6 rounded-lg shadow">
        <img
          src="/public/images/anh2.jpg"
          alt="Free Shipping"
          class="mx-auto mb-4 h-32 object-contain"
        />
        <h4 class="font-bold mb-2">Miễn Phí Vận Chuyển</h4>
        <p class="text-gray-500 text-sm">
          Miễn phí vận chuyển cho mọi đơn hàng! Mang sản phẩm nội thất chất
          lượng đến tận tay bạn mà không mất thêm chi phí.
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <img
          src="/public/images/chair.jpg"
          alt="Easy Return"
          class="mx-auto mb-4 h-32 object-contain"
        />
        <h4 class="font-bold mb-2">Chính Sách Đổi Trả Dễ Dàng</h4>
        <p class="text-gray-500 text-sm">
          Đổi trả đơn giản, dễ dàng. Đảm bảo quyền lợi cho bạn nếu không hài
          lòng với sản phẩm.
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <img
          src="/public/images/table1.jpg"
          alt="Warranty"
          class="mx-auto mb-4 h-32 object-contain"
        />
        <h4 class="font-bold mb-2">Chính Sách Bảo Hành Uy Tín</h4>
        <p class="text-gray-500 text-sm">
          Sản phẩm chất lượng, bảo hành dài lâu. Được hỗ trợ tận tâm khi sử dụng
          lâu dài.
        </p>
      </div>
    </section>
  </div>
</template>
