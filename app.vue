<script setup lang="ts">
import { useIpStore } from "@/stores/ipStore";

const store = useIpStore();
onMounted(() => {
  store.fetchIpData();
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.transition-animation {
  transition: all 0.3s ease-in;
}
</style>
