<script setup>
import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import Solutions from "../components/home/Solutions.vue";
import HomeFaq from "../components/home/HomeFaq.vue";
import Footer from "../components/home/Footer.vue";
import ContactUs from "../components/home/ContactUs.vue";
</script>

<template>
  <div>
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="solutions">
      <Solutions />
    </section>
    <section id="contact">
      <ContactUs />
    </section>
    <Footer />
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
