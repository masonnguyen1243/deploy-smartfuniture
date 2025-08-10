<template>
  <div class="news-page grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
    <div class="md:col-span-8">
      <div v-for="(post, index) in posts" :key="index" class="mb-10">
        <div class="relative">
          <img
            :src="post.image"
            alt="news image"
            class="rounded-lg mb-4 w-full object-cover"
          />
          <div
            class="absolute top-4 left-4 bg-white text-center text-black p-2 rounded"
          >
            <div class="text-xl font-bold">{{ post.date }}</div>
            <div class="text-sm">Th{{ post.month }}</div>
          </div>
        </div>
        <div class="text-sm text-gray-500 flex gap-2 items-center mb-2">
          <span>🧑 {{ post.author }}</span>
          <span>💬 {{ post.comments }}</span>
        </div>
        <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.summary }}</p>
      </div>
    </div>

    <div class="md:col-span-4 space-y-8">
      <!-- Tìm kiếm -->
      <div>
        <input
          type="text"
          placeholder="Tìm kiếm"
          class="w-full p-2 border rounded border-gray-200"
        />
      </div>

      <!-- Mạng xã hội -->
      <div>
        <h3 class="text-xl font-bold mb-2">Mạng Xã Hội</h3>
        <ul class="space-y-2">
          <li
            v-for="social in socials"
            :key="social.name"
            class="flex items-center justify-between border p-2 rounded border-gray-200"
          >
            <div class="flex gap-2 items-center">
              <span>{{ social.icon }}</span>
              <span>{{ social.name }}</span>
            </div>
            <button class="text-sm text-blue-600">{{ social.action }}</button>
          </li>
        </ul>
      </div>

      <!-- Categories -->
      <div>
        <h3 class="text-xl font-bold mb-2">Chuyên Mục</h3>
        <ul class="space-y-2">
          <li
            v-for="cat in categories"
            :key="cat.name"
            class="flex justify-between items-center border p-2 rounded border-gray-200"
          >
            <div class="flex gap-2 items-center">
              <span>{{ cat.icon }}</span>
              <span>{{ cat.name }}</span>
            </div>
            <span class="text-red-500">({{ cat.count }}) →</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    image: "/public/images/sofa1.jpg",
    date: "24",
    month: "9",
    author: "monamedia",
    comments: 0,
    title: "Perfect found a work computer setup That’s practically perf",
    summary:
      "Chào mừng bạn đến với mẫu tin tức hiện đại, phong cách và đẹp mắt.",
  },
  {
    image: "/public/images/sofa2.jpg",
    date: "14",
    month: "9",
    author: "monamedia",
    comments: 0,
    title: "Hoya Vision USA: Using Inbound Blogs and Emails for",
    summary: "Lorem Ipsum là đoạn văn mẫu của ngành in ấn và dàn trang.",
  },
];

const socials = [
  { name: "Facebook", icon: "📘", action: "Follow" },
  { name: "Twitter", icon: "🐦", action: "Follow" },
  { name: "Instagram", icon: "📸", action: "Follow" },
  { name: "YouTube", icon: "▶️", action: "Subscribe" },
  { name: "Pinterest", icon: "📌", action: "Follow" },
];

const categories = [
  { name: "Bedroom", icon: "🛏️", count: 2 },
  { name: "Drawing room", icon: "🛋️", count: 1 },
  { name: "Kitchn Room", icon: "🍽️", count: 1 },
  { name: "Living Room", icon: "🪑", count: 1 },
];
</script>

<style scoped>
.news-page {
  background-color: white;
}
</style>
