<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Loader from './components/ui/Loader.vue'
import { onMounted, ref } from 'vue'

const isLoaded = ref(false);

onMounted(() => {
  // Wait for loader to complete before initializing scroll animations
  setTimeout(() => {
    isLoaded.value = true;
    
    // Main observer for general animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          
          // Handle counter animation if it's a counter element
          if (entry.target.classList.contains('animate-count-up')) {
            startCounterAnimation(entry.target);
          }
        }
      });
    }, { 
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    });

    // Separate observer for footer with different threshold
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { 
      threshold: 0,
      rootMargin: '0px'
    });

    // Observe footer elements
    document.querySelectorAll('.footer-content, .social-icon, .footer-links, .copyright-section').forEach((el) => {
      footerObserver.observe(el);
    });

    // Observe all other animated elements
    document.querySelectorAll('.animate-on-scroll, .animate-fade-in, .animate-slide-up, .animate-scale-in, .animate-bounce-in, [class*="animate-"]').forEach((el) => {
      observer.observe(el);
    });
  }, 7000);
});

// Counter animation function
function startCounterAnimation(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const step = target / (duration / 16); // 60fps
  let current = 0;

  function updateCounter() {
    if (current < target) {
      current += step;
      if (current > target) current = target;
      element.textContent = Math.round(current);
      requestAnimationFrame(updateCounter);
    }
  }

  updateCounter();
}
</script>

<template>
  <Loader v-if="!isLoaded" />
  <RouterView v-show="isLoaded" :class="{ 'fade-in': isLoaded }" />
</template>

<style>
/* Base animation styles */
[class*="animate-"] {
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1),
              transform 1s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Show state for all animations */
[class*="animate-"].show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) translateX(0) scale(1) !important;
}

/* Specific animation initial states */
.animate-fade-in {
  opacity: 0;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(40px);
}

.animate-slide-down {
  opacity: 0;
  transform: translateY(-40px);
}

.animate-slide-right {
  opacity: 0;
  transform: translateX(-40px);
}

.animate-slide-left {
  opacity: 0;
  transform: translateX(40px);
}

.animate-scale-in {
  opacity: 0;
  transform: scale(0.95);
}

.animate-bounce-in {
  opacity: 0;
  transform: scale(0.3);
  transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Staggered animations */
.animate-slide-up-stagger-1.show { transition-delay: 0.2s; }
.animate-slide-up-stagger-2.show { transition-delay: 0.4s; }
.animate-slide-up-stagger-3.show { transition-delay: 0.6s; }

.animate-slide-up-partner-1.show { transition-delay: 0.6s; }
.animate-slide-up-partner-2.show { transition-delay: 0.8s; }
.animate-slide-up-partner-3.show { transition-delay: 1s; }
.animate-slide-up-partner-4.show { transition-delay: 1.2s; }

/* Fade in animation for page transition */
.fade-in {
  animation: fadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Updated Hero section animations to match About section */
.animate-hero-title {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-hero-subtitle {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
}

.animate-hero-text {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.4s;
}

.animate-hero-title.show,
.animate-hero-subtitle.show,
.animate-hero-text.show {
  opacity: 1;
  transform: translate(0);
}
</style>
