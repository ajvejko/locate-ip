<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="bg-bgLight dark:bg-bgDark">
    <nav
      class="sticky top-0 z-10 flex items-center justify-between bg-bgLight/60 px-3 py-2 backdrop-blur dark:bg-bgDark/60"
    >
      <div class="transition-animation flex items-center gap-2 hover:scale-105">
        <IconMap
          class="h-7 w-7 stroke-accentLight dark:stroke-accentDark md:h-8 md:w-8 lg:h-9 lg:w-9"
          :fontControlled="false"
          :filled="true"
        />

        <a
          href="#home"
          class="select-none font-poppins text-2xl font-bold text-textLight dark:text-textDark md:text-3xl"
        >
          LocateIP
        </a>
      </div>
      <button
        @click="toggleDark()"
        class="transition-animation hover:scale-110"
      >
        <!-- Moon icon -->
        <Transition name="slide-up" mode="out-in">
          <IconMoon
            v-if="isDark"
            class="h-7 w-7 stroke-blue-500 md:h-8 md:w-8 lg:h-9 lg:w-9"
            :fontControlled="false"
            :filled="true"
          />

          <!-- Sun icon -->
          <IconSun
            v-else
            class="h-7 w-7 stroke-yellow-400 md:h-8 md:w-8 lg:h-9 lg:w-9"
            :fontControlled="false"
            :filled="true"
          />
        </Transition>
      </button>
    </nav>

    <slot></slot>
    <div
      class="sticky flex grow-0 justify-center border-t border-black bg-bgLight pb-1 pt-2 text-center font-roboto text-textLight dark:border-white dark:bg-bgDark dark:text-textDark lg:text-lg"
    >
      Want to checkout the source code? ->
      <a
        href="https://github.com/ajvejko/locate-ip"
        class="transition-animation ml-2 hover:scale-110"
      >
        <IconGithub
          class="h-6 w-6 stroke-textLight dark:stroke-textDark md:h-8 md:w-8 lg:h-9 lg:w-9"
          :filled="true"
          :fontControlled="false"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
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
