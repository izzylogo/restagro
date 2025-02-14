<template>
  <footer class="bg-white py-[20px] px-[30px] md:px-[60px] text-gray-800">
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-[20px]"
    >
      <div>
        <img
          src="../../assets/images/logo.jpg"
          alt="Bank of Industry Logo"
          class="w-[120px] md:w-[120px] h-auto"
        />
      </div>

      <!-- Social Media Links -->
      <div class="flex gap-6 md:gap-4">
        <Icon
          icon="mage:facebook"
          width="20"
          height="20"
          class="text-gray-600 hover:text-green-800 transition-colors duration-300 cursor-pointer md:w-6 md:h-6"
        />
        <Icon
          icon="ri:twitter-x-fill"
          width="20"
          height="20"
          class="text-gray-600 hover:text-green-800 transition-colors duration-300 cursor-pointer md:w-6 md:h-6"
        />
        <Icon
          icon="mdi:instagram"
          width="20"
          height="20"
          class="text-gray-600 hover:text-green-800 transition-colors duration-300 cursor-pointer md:w-6 md:h-6"
        />
        <Icon
          icon="ic:baseline-email"
          width="20"
          height="20"
          class="text-gray-600 hover:text-green-800 transition-colors duration-300 cursor-pointer md:w-6 md:h-6"
        />
      </div>

      <div class="flex gap-4 md:gap-[30px] text-sm md:text-base">
        <p class="hover:text-green-800 transition-colors duration-300">Terms</p>
        <p class="hover:text-green-800 transition-colors duration-300">Conditions</p>
        <p class="hover:text-green-800 transition-colors duration-300">Service</p>
      </div>
    </div>

    <!-- Copyright and Credit Line -->
    <div class="mt-6 pt-4 border-t border-gray-200 text-center text-xs text-gray-600">
      <p class="mb-0.5 text-xs">
        © {{ currentYear }} Restagro Solutions. All rights reserved.
      </p>
      <p class="text-gray-500 text-xs">
        Built by
        <a
          href="https://github.com/izzylogo"
          target="_blank"
          class="text-green-800 hover:text-green-700 transition-colors duration-300"
        >
          IzzyDev
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";

// Get the current year
const currentYear = new Date().getFullYear();
</script>

<style scoped>
p {
  cursor: pointer;
}
</style>
