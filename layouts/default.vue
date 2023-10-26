<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="bg-bgLight dark:bg-bgDark">
    <nav
      class="bg-bgLight/60 dark:bg-bgDark/60 sticky top-0 z-10 flex items-center justify-between px-3 py-2 backdrop-blur"
    >
      <div class="transition-animation flex items-center gap-2 hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-accentLight dark:stroke-accentDark h-6 w-6"
        >
          <polygon
            points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
          ></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>

        <a
          href="#home"
          class="font-poppins text-textLight dark:text-textDark select-none text-2xl font-bold"
        >
          LocateIP
        </a>
      </div>
      <button @click="toggleDark()">
        <!-- Moon icon -->
        <Transition name="slide-up" mode="out-in">
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-7 w-7 stroke-blue-500 md:h-8 md:w-8 lg:h-9 lg:w-9"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <!-- Sun icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-7 w-7 stroke-yellow-400 md:h-8 md:w-8 lg:h-9 lg:w-9"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </Transition>
      </button>
    </nav>

    <slot></slot>
  </div>
</template>

<style scoped>
.transition-animation {
  transition: all 0.3s ease-in;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
