<script setup lang="ts">
import { useIpStore } from "@/stores/ipStore";

const store = useIpStore();
store.fetchUserIpData();
</script>
<template>
  <div
    class="mt-6 flex max-w-xl flex-col rounded-2xl border border-black bg-white/10 text-xl dark:border-white dark:bg-bgDark lg:text-2xl"
  >
    <h2
      class="border-b border-black px-3 py-2 text-center font-poppins font-bold text-textLight shadow-lg shadow-black/10 dark:border-white dark:text-textDark dark:shadow-white/10"
    >
      IP Address details:
    </h2>

    <div
      class="flex flex-col gap-y-2 break-all px-3 py-4 text-lg font-bold text-textLight dark:text-textDark lg:text-xl"
    >
      <!-- Ip info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconIp
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />
        IP Address:
        <span class="font-roboto font-light">
          {{ store.ip }}
        </span>
      </div>
      <!-- Country info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconCountry
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Country:
        <span class="font-roboto font-light">{{ store.countryName }} </span>
      </div>
      <!-- Region info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconRegion
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Region:
        <span class="font-roboto font-light">
          {{ store.region }}
        </span>
      </div>
      <!-- City info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconCity
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />City:
        <span class="font-roboto font-light">{{ store.city }} </span>
      </div>
      <!-- Isp info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconIsp
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />ISP:
        <span class="font-roboto font-light">
          {{ store.isp }}
        </span>
      </div>
      <!-- Latitude info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconLatitude
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Latitude:
        <span class="font-roboto font-light">
          {{ store.latitude }}
        </span>
      </div>
      <!-- Longtitude info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconLongtitude
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Longitude:
        <span class="font-roboto font-light">
          {{ store.longitude }}
        </span>
      </div>
    </div>
  </div>
</template>
