<script setup>
import backgroundImage from "@/assets/images/background (1).jpg";

const partnerItems = [
  {
    title: "Proven Track Record",
    description: "Successfully partnered with established farmhouses, achieving over 60% yield growth in less than 4 months of implementation.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Sustainable Practices",
    description: "Committed to environmentally friendly farming methods that align with global sustainability goals.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
  },
  {
    title: "Expert Team",
    description: "Our team comprises industry experts with 15+ years of experience in the agro-sector.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "Scalable Model",
    description: "Business model designed for rapid scalability, ensuring high returns on investment within 24 months.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  }
];
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
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll">Our Solutions</h2>
          <div class="h-1 w-20 bg-green-400 mx-auto animate-on-scroll"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="solution-card animate-on-scroll">
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

          <div class="solution-card animate-on-scroll">
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

          <div class="solution-card animate-on-scroll">
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
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll">Why Partner With Us?</h2>
          <div class="h-1 w-20 bg-green-400 mx-auto animate-on-scroll"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(item, index) in partnerItems"
            :key="index"
            class="partner-card animate-on-scroll"
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
                    :d="item.icon"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2 text-white">{{ item.title }}</h3>
                <p class="text-gray-200">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Base card styles */
.solution-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.solution-card::before {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(34, 197, 94, 0.1),
    rgba(34, 197, 94, 0.2)
  );
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  border-radius: 1rem;
}

.solution-card::after {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    rgba(34, 197, 94, 0.1)
  );
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  border-radius: 1rem;
}

.solution-card:hover::before {
  left: 0;
}

.solution-card:hover::after {
  left: 0;
  transition-delay: 0.2s;
}

.solution-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);
  border-color: rgba(34, 197, 94, 0.4);
}

.solution-card:hover .text-green-400 {
  transform: scale(1.1) rotate(5deg);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.partner-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
}

.partner-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

/* Animation for scroll reveal */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.show {
  opacity: 1;
  transform: translateY(0);
}

/* Remove previous animation classes as they're no longer needed */
</style>
