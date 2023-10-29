<script setup lang="ts">
const input = ref("");
</script>

<template>
  <section
    class="min-h-screen bg-bgLight px-3 pt-16 text-textLight dark:bg-bgDark dark:text-textDark"
  >
    <div class="flex justify-center">
      <span
        class="bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 bg-clip-text font-poppins text-3xl font-bold text-transparent"
        >Locate the IP!</span
      >
    </div>
    <div class="mt-6 flex justify-center">
      <input
        autofocus
        type="search"
        v-model="input"
        placeholder="Enter an IP address"
        class="search-input w-2/3 max-w-xl rounded-l-full border border-r-0 border-black/50 bg-bgLight px-5 py-2 text-textLight placeholder:font-roboto placeholder:text-textLight/80 focus:border-black focus:outline-none dark:border-white/70 dark:bg-bgDark dark:text-textDark dark:placeholder:text-textDark/80 dark:focus:border-white"
      />
      <button
        class="search-button items-center rounded-r-full border-y border-r border-black/50 px-3 dark:border-white/70"
      >
        <!-- Search icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 stroke-primaryLight dark:stroke-primaryDark md:h-7 md:w-7 lg:h-8 lg:w-8"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
    <IpCard>
      
    </IpCard>
  </section>
</template>

<style scoped>
.search-input:focus ~ .search-button {
  @apply border-black dark:border-white;
}
</style>
