<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Tawk.to widget script
  var Tawk_API = window.Tawk_API || {};
  var Tawk_LoadStart = new Date();
  
  (function(){
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67ee3b73292599190ce3a048/1int9gfbq';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();
});
</script>

<template>
  <!-- The chat widget will be injected automatically -->
</template>

<style scoped>
/* You can add custom styles for the chat widget here if needed */
.tawk-min-container {
  /* Custom styles for minimized chat */
  bottom: 20px !important;
  right: 20px !important;
}

.tawk-max-container {
  /* Custom styles for maximized chat */
  height: calc(100% - 40px) !important;
  max-height: 600px !important;
}
</style> 