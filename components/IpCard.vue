<script setup lang="ts">
interface AddressInfo {
  ip: string;
  country_name: string;
  region: string;
  city: string;
  org: string;
  latitude: number;
  longitude: number;
}

const ipData = ref();
const loading = ref(true);
const { data: ipInfo } = await useFetch<AddressInfo>("https://ipapi.co/json/", {
  pick: [
    "ip",
    "country_name",
    "region",
    "city",
    "org",
    "latitude",
    "longitude",
  ],
});

ipData.value =
  {
    ip: ipInfo.value?.ip,
    country_name: ipInfo.value?.country_name,
    region: ipInfo.value?.region,
    city: ipInfo.value?.city,
    isp: ipInfo.value?.org,
    latitude: ipInfo.value?.latitude,
    longitude: ipInfo.value?.longitude,
  } ?? [];
</script>
<template>
  <div
    class="mt-6 overflow-clip rounded-2xl border border-black bg-white/10 text-xl dark:border-white dark:bg-bgDark"
  >
    <div
      class="px-3 py-2 text-center font-poppins font-bold text-textLight shadow-lg shadow-black/10 dark:text-textDark dark:shadow-white/5"
    >
      IP Address details
    </div>

    <div class="px-3 py-4 shadow-inner">
      <div class="flex flex-col gap-y-2 text-lg">
        <!-- Ip info -->
        <div class="flex items-center gap-1">
          <IconIp
            class="stroke-accentLight dark:stroke-accentDark"
            :filled="true"
          />
          <span class="text-textLight dark:text-textDark"
            >IP Address: {{ ipData.ip }}</span
          >
        </div>
        <!-- Country info -->
        <div class="flex items-center gap-1">
          <IconCountry
            class="stroke-accentLight dark:stroke-accentDark"
            :filled="true"
          />
          <span class="text-textLight dark:text-textDark"
            >Country: {{ ipData.country_name }}</span
          >
        </div>
        <!-- Region info -->
        <div class="flex items-center gap-1">
          <IconRegion
            class="stroke-accentLight dark:stroke-accentDark"
            :filled="true"
          />
          <span class="text-textLight dark:text-textDark"
            >Region: {{ ipData.region }}
          </span>
        </div>
        <!-- City info -->
        <div class="flex items-center gap-1">
          <IconCity
            class="stroke-accentLight dark:stroke-accentDark"
            :filled="true"
          />
          <span class="text-textLight dark:text-textDark"
            >City: {{ ipData.city }}
          </span>
        </div>
        <!-- Isp info -->
        <div class="flex items-center gap-1">
          <IconIsp
            class="stroke-accentLight dark:stroke-accentDark"
            :filled="true"
          />
          <span class="text-textLight dark:text-textDark"
            >ISP: {{ ipData.isp }}</span
          >
        </div>
        <!-- Latitude info -->
        <div class="flex items-center gap-1">
          <IconLatitude
            class="stroke-accentLight dark:stroke-accentDark"
            :filled="true"
          />
          <span class="text-textLight dark:text-textDark"
            >Latitude: {{ ipData.latitude }}
          </span>
        </div>
        <!-- Longtitude info -->
        <div class="flex items-center gap-1">
          <IconLongtitude
            class="stroke-accentLight dark:stroke-accentDark"
            :filled="true"
          />
          <span class="text-textLight dark:text-textDark"
            >Longitude: {{ ipData.longitude }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
