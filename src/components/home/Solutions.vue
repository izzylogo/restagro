<script setup>
import backgroundImage from "@/assets/images/background (1).jpg";
</script>

<template>
  <section class="py-16 md:py-24 relative">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-fixed z-0"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Overlay - Adjusted to be less green -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-gray-900/85 to-green-900/90 z-10"
    ></div>

    <!-- Content -->
    <div class="container mx-auto px-4 max-w-[1460px] relative z-20">
      <!-- Solutions Section -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Our Solutions</h2>
          <div class="h-1 w-20 bg-green-400 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-white/20"
          >
            <div class="text-green-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">Mechanized Farming</h3>
            <p class="text-gray-200">
              Advanced farming techniques to maximize efficiency and productivity through
              modern machinery and technology.
            </p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-white/20"
          >
            <div class="text-green-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">Profit Maximization</h3>
            <p class="text-gray-200">
              Reduction in input costs and optimization of resources to ensure maximum
              returns for investors.
            </p>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-white/20"
          >
            <div class="text-green-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">Expert Support</h3>
            <p class="text-gray-200">
              Technical backstopping by industry experts and comprehensive training
              programs for farmers.
            </p>
          </div>
        </div>
      </div>

      <!-- Why Partner With Us Section -->
      <div class="mt-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Partner With Us?
          </h2>
          <div class="h-1 w-20 bg-green-400 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-white/20"
          >
            <div class="flex gap-4 items-start">
              <div class="bg-green-400/20 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-white">Proven Track Record</h3>
                <p class="text-gray-200">
                  Successfully partnered with established farmhouses, achieving over 60%
                  yield growth in less than 4 months of implementation.
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-white/20"
          >
            <div class="flex gap-4 items-start">
              <div class="bg-green-400/20 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-white">
                  Sustainable Practices
                </h3>
                <p class="text-gray-200">
                  Committed to environmentally friendly farming methods that align with
                  global sustainability goals.
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-white/20"
          >
            <div class="flex gap-4 items-start">
              <div class="bg-green-400/20 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-white">Expert Team</h3>
                <p class="text-gray-200">
                  Our team comprises industry experts with 15+ years of experience in the
                  agro-sector.
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-white/20"
          >
            <div class="flex gap-4 items-start">
              <div class="bg-green-400/20 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-white">Scalable Model</h3>
                <p class="text-gray-200">
                  Business model designed for rapid scalability, ensuring high returns on
                  investment within 24 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
