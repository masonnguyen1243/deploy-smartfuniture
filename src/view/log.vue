<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <div class="w-full max-w-6x2 grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
      <!-- Đăng nhập -->
      <form
        @submit.prevent="handleLogin"
        class="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-none"
      >
        <h2 class="text-3xl font-bold mb-2">Đăng nhập</h2>
        <div>
          <label class="block mb-1 font-medium"
            >Tên tài khoản hoặc địa chỉ email
            <span class="text-red-500">*</span></label
          >
          <input
            v-model="loginForm.email"
            type="email"
            required
            class="w-full border rounded-full px-6 py-3 outline-none"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium"
            >Mật khẩu <span class="text-red-500">*</span></label
          >
          <div class="relative">
            <input
              :type="showLoginPassword ? 'text' : 'password'"
              v-model="loginForm.password"
              required
              class="w-full border rounded-full px-6 py-3 outline-none pr-10"
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              @click="showLoginPassword = !showLoginPassword"
            >
              <svg
                v-if="showLoginPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.236.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" v-model="loginForm.remember" id="remember" />
          <label for="remember" class="text-sm">Ghi nhớ mật khẩu</label>
        </div>
        <button
          type="submit"
          class="bg-black w-[150px] text-white rounded-none px-5 py-3 font-medium text-lg mt-2"
        >
          ĐĂNG NHẬP
        </button>
        <div v-if="loginError" class="text-red-500 text-sm">
          {{ loginError }}
        </div>
        <button
          type="button"
          class="text-red-500 mt-2 text-left"
          @click="showForgot = true"
        >
          Quên mật khẩu?
        </button>
      </form>

      <!-- Đăng ký -->
      <form
        @submit.prevent="handleRegister"
        class="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-none"
      >
        <h2 class="text-3xl font-bold mb-2">Đăng ký</h2>
        <div>
          <label class="block mb-1 font-medium"
            >Tên tài khoản <span class="text-red-500">*</span></label
          >
          <input
            v-model="registerForm.name"
            required
            class="w-full border rounded-full px-6 py-3 outline-none"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium"
            >Địa chỉ email <span class="text-red-500">*</span></label
          >
          <input
            v-model="registerForm.email"
            type="email"
            required
            class="w-full border rounded-full px-6 py-3 outline-none"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium"
            >Mật khẩu <span class="text-red-500">*</span></label
          >
          <div class="relative">
            <input
              :type="showRegisterPassword ? 'text' : 'password'"
              v-model="registerForm.password"
              required
              class="w-full border rounded-full px-6 py-3 outline-none pr-10"
            />
            <span
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              @click="showRegisterPassword = !showRegisterPassword"
            >
              <svg
                v-if="showRegisterPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.336-3.236.938-4.675M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div v-if="registerError" class="text-red-500 text-sm">
          {{ registerError }}
        </div>
        <div class="text-lg text-gray-600 mt-2">
          Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn
          trên toàn bộ trang web này, để quản lý quyền truy cập vào tài khoản
          của bạn và cho các mục đích khác được mô tả trong
          <span class="text-red-500">chính sách riêng tư</span> của chúng tôi.
        </div>
        <button
          type="submit"
          class="bg-black w-[150px] text-white rounded-none px-5 py-3 font-medium text-lg mt-2"
        >
          ĐĂNG KÝ
        </button>
      </form>
    </div>
    <!-- Modal xác thực tài khoản -->
    <div
      v-if="showVerify"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <form
        @submit.prevent="handleVerify"
        class="bg-white p-8 rounded-lg flex flex-col gap-4 min-w-[350px]"
      >
        <h3 class="text-xl font-bold mb-2">Xác thực tài khoản</h3>
        <input
          v-model="verifyForm.email"
          type="email"
          placeholder="Email"
          required
          class="border px-4 py-2 rounded"
        />
        <input
          v-model="verifyForm.verifyToken"
          placeholder="Mã xác thực"
          required
          class="border px-4 py-2 rounded"
        />
        <button type="submit" class="bg-black text-white px-4 py-2 rounded">
          Xác thực
        </button>
        <button type="button" class="text-gray-500" @click="showVerify = false">
          Đóng
        </button>
        <div v-if="verifyError" class="text-red-500 text-sm">
          {{ verifyError }}
        </div>
        <div v-if="verifySuccess" class="text-green-600 text-sm">
          {{ verifySuccess }}
        </div>
      </form>
    </div>
    <!-- Modal quên mật khẩu (demo, không thực hiện API) -->
    <div
      v-if="showForgot"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div class="bg-white p-8 rounded-lg flex flex-col gap-4 min-w-[350px]">
        <h3 class="text-xl font-bold mb-2">Quên mật khẩu</h3>
        <p>Vui lòng liên hệ quản trị viên để lấy lại mật khẩu.</p>
        <button type="button" class="text-gray-500" @click="showForgot = false">
          Đóng
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useWishlist } from "@/stores/wishlist";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const loginForm = ref({ email: "", password: "", remember: false });
const registerForm = ref({ name: "", email: "", password: "" });
const verifyForm = ref({ email: "", verifyToken: "" });

const showLoginPassword = ref(false);
const showRegisterPassword = ref(false);
const showVerify = ref(false);
const showForgot = ref(false);

const loginError = ref("");
const registerError = ref("");
const verifyError = ref("");
const verifySuccess = ref("");

async function handleLogin() {
  loginError.value = "";
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginForm.value.email,
        password: loginForm.value.password,
      }),
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || "Đăng nhập thất bại");
    }
    const data = await res.json();
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user));
    if (loginForm.value.remember) {
      localStorage.setItem("rememberLogin", "true");
    } else {
      localStorage.removeItem("rememberLogin");
    }

    // Sync wishlist after successful login
    const { syncWishlistOnLogin } = useWishlist();
    await syncWishlistOnLogin();

    window.location.href = "/";
  } catch (e) {
    loginError.value = e.message || "Đăng nhập thất bại";
  }
}

async function handleRegister() {
  registerError.value = "";
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerForm.value),
    });
    if (!res.ok) throw new Error("Đăng ký thất bại");

    showVerify.value = true;
    verifyForm.value.email = registerForm.value.email;
  } catch (e) {
    registerError.value = e.message || "Đăng ký thất bại";
  }
}

async function handleVerify() {
  verifyError.value = "";
  verifySuccess.value = "";
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/auth/verify-account`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(verifyForm.value),
    });
    if (!res.ok) throw new Error("Xác thực thất bại");

    verifySuccess.value = "Xác thực thành công!";

    setTimeout(() => {
      showVerify.value = false;
      verifySuccess.value = "";
    }, 1000);
  } catch (e) {
    verifyError.value = e.message || "Xác thực thất bại";
  }
}
</script>

<style scoped>
input[type="checkbox"] {
  accent-color: #000;
}
</style>
