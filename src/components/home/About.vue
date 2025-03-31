<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-[1460px]">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div class="relative">
          <div class="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden animate-scale-in">
            <img
              src="../../assets/images/background (4).jpg"
              alt="Sustainable Farming"
              class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 bg-green-800 p-6 rounded-xl text-white animate-slide-up">
            <div class="text-4xl font-bold mb-1 animate-count-up" data-target="80">0</div>
            <div class="text-sm">Profit Growth</div>
          </div>
        </div>

        <!-- Content Column -->
        <div class="space-y-6">
          <div class="inline-block animate-slide-right">
            <h2 class="text-green-800 font-semibold mb-2">ABOUT RESTAGRO</h2>
            <div class="h-1 w-20 bg-green-800"></div>
          </div>

          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight animate-fade-in">
            Pioneering Sustainable Agriculture for a Better Tomorrow
          </h3>

          <p class="text-gray-600 leading-relaxed animate-fade-in">
            RESTAGRO SOLUTIONS is more than just an agricultural company – we're a
            catalyst for transformation in the farming sector. Our journey began with a
            simple yet powerful vision: to revolutionize agriculture through innovation
            while maintaining environmental responsibility.
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-4 animate-slide-up-stagger-1">
              <div class="p-2 bg-green-100 rounded-lg mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Sustainable Innovation</h4>
                <p class="text-gray-600">
                  Combining cutting-edge technology with environmentally responsible
                  practices.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 animate-slide-up-stagger-2">
              <div class="p-2 bg-green-100 rounded-lg mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Farmer Empowerment</h4>
                <p class="text-gray-600">
                  Providing comprehensive support and resources to enhance agricultural
                  productivity.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 animate-slide-up-stagger-3">
              <div class="p-2 bg-green-100 rounded-lg mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Food Security</h4>
                <p class="text-gray-600">
                  Contributing to global food security through sustainable agricultural
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <button
            class="mt-8 bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 inline-flex items-center gap-2 animate-bounce-in"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Counter animation will be handled by App.vue's global animation system
});
</script>

<style scoped>
/* Remove duplicate keyframes and animation classes since they're now handled by App.vue */

/* Custom transitions for hover effects */
.hover\:scale-110:hover {
  transform: scale(1.1);
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover\:bg-green-700:hover {
  background-color: rgb(21 128 61);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
