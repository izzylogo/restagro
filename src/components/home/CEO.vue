<template>
  <section id="ceo" class="py-16 bg-gradient-to-b from-white/0 to-gray-50">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div class="order-2 lg:order-1">
          <h2 class="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">Meet our CEO</h2>
          <p class="text-lg text-gray-700 mb-4">David Udofia Udeme leads Restagro with a vision to modernize agricultural value chains using sustainable technology and community-first practices.</p>
          <p class="text-base text-gray-600">With extensive experience in agribusiness and a passion for empowering smallholder farmers, David focuses on building practical tools that deliver measurable impact across supply, logistics, and market access.</p>
        </div>

        <div class="flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="relative w-54 h-54 lg:w-66 lg:h-66 rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <img src="@/assets/man.jpg" alt="CEO David Udofia Udeme" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// component is presentational — no props yet
</script>

<style scoped>
/* subtle border to match site theme */
#ceo h2 { letter-spacing: -0.02em; }
</style>
