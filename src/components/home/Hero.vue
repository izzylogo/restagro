<script>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import EmailModal from "./EmailModal.vue";

export default {
  data() {
    return {
      isMenuOpen: false,
      isModalVisible: ref(false),
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
  watch: {
    isModalVisible(newValue) {
      if (newValue) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = ""; // Restore scrolling
      }
    },
  },
  components: { Icon, EmailModal },
};
</script>

<template>
  <div class="relative min-h-screen bg-cover bg-center hero z-[300]">
    <div class="min-h-screen flex flex-col">
      <!-- Navbar -->
      <nav
        class="px-[30px] md:px-[50px] py-[5px] pl-[40px] md:pl-[60px] text-gray-50 bg-white bg-opacity-90 relative z-[300] w-full shadow-md"
      >
        <div class="flex items-center justify-between max-w-[1920px] mx-auto w-full">
          <img
            src="../../assets/images/logo.jpg"
            alt="Bank of Industry Logo"
            class="w-[80px] md:w-[120px] h-auto "
          />

          <!-- Mobile Invest Button -->
          <button
            class="md:hidden bg-green-900 text-[10px] text-white px-4 py-2 rounded-full hover:bg-green-800 transition-all duration-300 animate-on-scroll"
            @click="showModal"
          >
            Invest
          </button>

          <!-- Desktop Menu -->
          <div class="hidden md:flex gap-5 items-center text-black font-extrabold">
            <a
              class="nav-links hover:text-green-800 transition-colors duration-300 animate-on-scroll"
              @click.prevent="scrollToSection('about')"
              >About</a
            >
            <a
              class="nav-links hover:text-green-800 transition-colors duration-300 animate-on-scroll"
              @click.prevent="scrollToSection('solutions')"
              >Solutions</a
            >
            <a
              class="nav-links hover:text-green-800 transition-colors duration-300 animate-on-scroll"
              @click.prevent="scrollToSection('contact')"
              >Contact</a
            >
          </div>

          <!-- Buttons -->
          <div class="hidden md:flex gap-5 mr-[50px]">
            <button
              class="bg-green-900 border-[2px] border-green-900 px-[30px] md:px-[40px] py-[12px] rounded-3xl text-gray-50 hover:bg-green-800 transition-all duration-300 transform hover:scale-105 animate-on-scroll"
              @click="showModal"
            >
              Invest
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden block text-black p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300 animate-on-scroll"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div
          v-if="isMenuOpen"
          class="md:hidden fixed left-0 top-0 h-screen w-full flex flex-col items-left bg-white p-8 pt-[70px] text-black"
        >
          <div
            @click="toggleMenu"
            class="absolute right-[30px] top-[30px] hover:rotate-90 transition-transform duration-300"
          >
            <Icon icon="mingcute:close-fill" width="35" height="35" style="color: #000" />
          </div>
          <a
            class="py-2 !mt-[10px] font-bold text-3xl leading-relaxed hover:text-green-800 transition-colors duration-300"
            @click.prevent="
              scrollToSection('about');
              toggleMenu();
            "
            >About</a
          >
          <a
            class="py-2 !mt-[10px] font-bold text-3xl leading-relaxed hover:text-green-800 transition-colors duration-300"
            @click.prevent="
              scrollToSection('solutions');
              toggleMenu();
            "
            >Solutions</a
          >
          <a
            class="py-2 !mt-[10px] font-bold text-3xl leading-relaxed hover:text-green-800 transition-colors duration-300"
            @click.prevent="
              scrollToSection('contact');
              toggleMenu();
            "
            >Contact</a
          >

          <!-- <div class="flex flex-col gap-3 mt-4 w-full">
            <button
              class="bg-green-900 border border-green-900 text-2xl px-6 py-3 rounded-3xl text-gray-50 w-full hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
            >
              INVEST
            </button>
          </div> -->
        </div>
      </nav>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/80 to-green-950/95"></div>

      <!-- Main Section -->
      <div
        class="main-section hero-main w-full max-w-[1460px] mx-auto relative z-[200] px-[3%] md:px-[5%] pt-[20px] md:pt-[45px] pb-[50px] md:pb-[80px] flex-grow"
      >
        <div class="w-full flex items-center">
          <div>
            <div class="content-text mb-8 md:mb-12 relative max-w-[1200px]">
              <h1 class="leading-[75px] text-white brightness-125 hidden md:block animate-on-scroll">
                Transforming Agriculture
              </h1>
              <div
                class="absolute bg-green-800 h-[20px] md:h-[30px] w-[80%] md:w-[450px] bottom-[85px] md:bottom-[55px] rotate-3 animate-slide-right"
              ></div>
              <h1 class="leading-[75px] text-white brightness-125 hidden md:block mb-4 animate-on-scroll">
                Through Innovation
              </h1>
              <h1 class="leading-[75px] text-white brightness-125 hidden md:block animate-on-scroll">
                And Sustainability
              </h1>

              <!-- mobile text -->
              <h1
                class="md:hidden block text-4xl leading-tight text-white brightness-125 md:mt-8 mt-0 animate-on-scroll"
              >
                Transforming Agriculture Through Innovation And Sustainability
              </h1>
            </div>

            <div class="caption-text mb-12 max-w-[900px] animate-on-scroll">
              <p
                class="text-gray-300 font-normal leading-normal tracking-wide text-[40px] md:text-xl"
              >
                At RESTAGRO SOLUTIONS, we stand at the forefront of agricultural
                innovation, empowering farmers with cutting-edge technology and
                sustainable practices. From enhancing productivity to ensuring food
                security, we're dedicated to transforming the future of farming....
              </p>
            </div>

            <div class="caption-btn flex flex-col sm:flex-row gap-6 mt-8">
              <button
                class="bg-transparent border-[2px] border-gray-100 px-[35px] md:px-[45px] py-[14px] rounded-3xl text-gray-50 w-full sm:w-auto hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-on-scroll"
              >
                Get Started
              </button>
              <button
                @click.prevent="scrollToSection('solutions')"
                class="bg-green-900 border-[2px] border-gray-100 px-[35px] md:px-[45px] py-[14px] rounded-3xl text-gray-50 w-full sm:w-auto hover:bg-green-800 transition-all duration-300 transform hover:scale-105 animate-on-scroll"
              >
                <span class="text-lg">Our Solutions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EmailModal :isVisible="isModalVisible" @close="closeModal" />
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 300px;
  opacity: 1;
}

.hero {
  background-image: url("../../assets/images/background (1).jpg");
  background-position: center;
  background-size: cover;
}

.nav-gradient {
  background: linear-gradient(
    180deg,
    rgba(215, 215, 215, 0.95) 0%,
    rgba(211, 211, 211, 0.75) 43%,
    rgba(255, 255, 255, 0.05) 100%
  );
}

.content-text h1 {
  font-size: 54px;
  font-weight: 700;
  position: relative;
  z-index: 100;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
}

.caption-text {
  border-left: 6px solid #016837;
  padding-left: 25px;
  margin-top: 50px;
}

.caption-text p {
  font-size: 20px;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.nav-links {
  font-weight: 600;
  cursor: pointer;
  position: relative;
}

.nav-links::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #016837;
  transition: width 0.3s ease;
}

.nav-links:hover::after {
  width: 100%;
}

.right-img {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: all 0.3s ease;
}

.right-img:hover {
  filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.2));
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  /* animation: fadeIn 0.3s ease-in-out; */
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-100%) rotate(3deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(3deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown 0.8s ease-out forwards;
}

.animate-slide-down-delay-1 {
  animation: slideDown 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-slide-down-delay-2 {
  animation: slideDown 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.animate-slide-right {
  animation: slideRight 1.5s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out 0.8s forwards;
  opacity: 0;
}

.animate-fade-in-up-delay {
  animation: fadeInUp 0.8s ease-out 1s forwards;
  opacity: 0;
}

@media (max-width: 800px) {
  .hero-main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
    min-height: 95dvh;
    padding-top: 60px;
  }

  .caption-text {
    margin-top: 30px;
    padding-left: 20px;
  }

  .content-text h1 {
    font-size: 43px;
    line-height: 1.4;
    padding-top: 10px;
  }

  .caption-text p {
    font-size: 18px;
    line-height: 1.6;
  }

  .caption-btn {
    width: 100%;
    gap: 16px;
  }
}

@media (max-width: 388px) {
  .content-text h1 {
    font-size: 32px;
  }

  .caption-text p {
    font-size: 16px;
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.show {
  opacity: 1;
  transform: translateY(0);
}

/* Add staggered delays for nav items */
nav .animate-on-scroll:nth-child(1) { transition-delay: 0.3s; transform: translateY(-40px);}
nav .animate-on-scroll:nth-child(2) { transition-delay: 0.5s; }
nav .animate-on-scroll:nth-child(3) { transition-delay: 0.7s; }
nav .animate-on-scroll:nth-child(4) { transition-delay: 0.9s; }

/* Add staggered delays for hero content */
.content-text .animate-on-scroll:nth-child(1) { 
  transform: translateX(-40px);
  transition-delay: 1.1s; 
}
.content-text .animate-on-scroll:nth-child(2) { 
  transform: translateX(-40px);
  transition-delay: 1.3s; 
}
.content-text .animate-on-scroll:nth-child(3) { 
  transform: translateX(-40px);
  transition-delay: 1.5s; 
}

.caption-text.animate-on-scroll { 
  transform: translateY(40px);
  transition-delay: 1.5s; 
}

.caption-btn .animate-on-scroll:nth-child(1) { 
  transform: translateY(40px);
  transition-delay: 0.3s; 
}

.caption-btn .animate-on-scroll:nth-child(2) { 
  transform: translateY(40px);
  transition-delay: 0.4s; 
}
</style>
