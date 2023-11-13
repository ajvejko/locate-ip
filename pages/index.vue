<script setup lang="ts">
import { useIpStore } from "@/stores/ipStore";
import { ipv4Regex, ipv6Regex } from "@/utils/regex";

const store = useIpStore();
const input = ref("");

const isValidIp = computed(() => {
  const trimmedInput = input.value.trim();
  console.log("here");
  return (
    ipv4Regex.test(trimmedInput) ||
    ipv6Regex.test(trimmedInput) ||
    trimmedInput === ""
  );
});
</script>

<template>
  <section
    class="min-h-screen overflow-y-hidden bg-bgLight px-3 pt-16 text-textLight dark:bg-bgDark dark:text-textDark"
  >
    <div class="flex justify-center">
      <h1
        class="select-none bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 bg-clip-text font-poppins text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl"
      >
        Locate the IP!
      </h1>
    </div>

    <form
      class="mx-auto mt-12 flex w-2/3 max-w-xl flex-col items-center justify-center"
      @submit.prevent="store.fetchIpData(input)"
      :disabled="!isValidIp"
    >
      <div class="relative flex w-full">
        <div
          v-if="!isValidIp"
          class="absolute left-0 top-0 -translate-y-7 translate-x-6 text-red-500 lg:text-lg"
        >
          Invalid IP address
        </div>
        <input
          autofocus
          type="search"
          v-model.trim="input"
          placeholder="Enter an IP address"
          class="search-input w-full rounded-l-full border border-r-0 border-black/50 bg-bgLight px-5 py-2 text-textLight placeholder:font-roboto placeholder:text-textLight/80 focus:border-black focus:outline-none dark:border-white/70 dark:bg-bgDark dark:text-textDark dark:placeholder:text-textDark/80 dark:focus:border-white sm:text-xl lg:text-2xl"
          :class="[isValidIp ? '' : '!border-red-500']"
        />
        <button
          @click.prevent="store.fetchIpData(input)"
          class="search-button items-center rounded-r-full border-y border-r border-black/50 px-3 dark:border-white/70"
          :class="[isValidIp ? '' : '!border-red-500']"
          :disabled="!isValidIp"
        >
          <!-- Search icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-animation h-6 w-6 stroke-primaryLight hover:scale-90 dark:stroke-primaryDark md:h-7 md:w-7 lg:h-8 lg:w-8"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </form>
    <div class="flex justify-center lg:mt-3">
      <IpCard />
    </div>
  </section>
</template>

<style scoped>
.search-input:focus ~ .search-button {
  @apply border-black dark:border-white;
}
</style>
