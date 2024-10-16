<template>
  <nav
    :class="{ 'mt-5': menuVisible }"
    class="flex items-center justify-center h-32 transition-all duration-300 cursor-pointer"
  >
    <div class="flex items-center justify-between w-full max-w-screen-xl px-4">
      <div class="flex gap-2 items-center">
        <h1 class="text-white font-bold text-2xl">
          Dia das <span class="text-secondary">Bruxas</span>
        </h1>
        <img src="../assets/abobora1.svg" alt="" />
      </div>

      <div v-if="isNavbarVisible" class="flex items-center gap-10">
        <a
          @click.prevent="scrollToSection('#home')"
          class="text-white font-medium text-lg"
          >Home</a
        >
        <a
          @click.prevent="scrollToSection('#categoria')"
          class="text-white font-medium text-lg"
          >Categoria</a
        >
        <a
          @click.prevent="scrollToSection('#sobre')"
          class="text-white font-medium text-lg"
          >Sobre</a
        >
        <a
          @click.prevent="scrollToSection('#dout')"
          class="text-white font-medium text-lg"
          >Doçuras ou travessuras</a
        >
        <button
          v-if="!menuVisible"
          class="px-4 py-2 rounded-full text-white font-bold text-lg bg-secondary"
        >
          Doar
        </button>
      </div>

      <div v-else class="flex items-center gap-2">
        <button
          v-if="!menuVisible"
          class="px-4 py-2 rounded-full text-white font-bold text-lg bg-secondary mt-4"
        >
          Doar
        </button>
        <button @click="toggleMenu" class="text-white font-medium text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="menuVisible"
        class="bg-gray-800 text-white rounded-md mt-2 p-2"
      >
        <a
          @click.prevent="scrollToSection('#home')"
          class="block hover:underline py-1"
          >Home</a
        >
        <a
          @click.prevent="scrollToSection('#categoria')"
          class="block hover:underline py-1"
          >Categoria</a
        >
        <a
          @click.prevent="scrollToSection('#sobre')"
          class="block hover:underline py-1"
          >Sobre</a
        >
        <a
          @click.prevent="scrollToSection('#dout')"
          class="block hover:underline py-1"
          >Doçuras ou travessuras</a
        >
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarVisible: true,
      menuVisible: false,
    };
  },
  methods: {
    checkWindowSize() {
      this.isNavbarVisible = window.innerWidth > 768; // Altere o valor conforme necessário
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    scrollToSection(selector) {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    this.checkWindowSize();
    window.addEventListener("resize", this.checkWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkWindowSize);
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
