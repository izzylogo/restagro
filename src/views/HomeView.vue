<script setup>
import { defineAsyncComponent } from 'vue';

// Lazy load components
const Hero = defineAsyncComponent(() => import("../components/home/Hero.vue"));
const About = defineAsyncComponent(() => import("../components/home/About.vue"));
const Solutions = defineAsyncComponent(() => import("../components/home/Solutions.vue"));
const HomeFaq = defineAsyncComponent(() => import("../components/home/HomeFaq.vue"));
const Footer = defineAsyncComponent(() => import("../components/home/Footer.vue"));
const ContactUs = defineAsyncComponent(() => import("../components/home/ContactUs.vue"));
</script>

<template>
  <div>
    <Hero />
    <section id="about" class="animate-on-scroll">
      <About />
    </section>
    <section id="solutions" class="animate-on-scroll">
      <Solutions />
    </section>
    <section id="contact" class="animate-on-scroll">
      <ContactUs />
    </section>
    <!-- <section class="animate-on-scroll">
      <HomeFaq />
    </section> -->
    <Footer />
  </div>
</template>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
