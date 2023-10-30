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
/*const { data: ipInfo } = await useFetch<AddressInfo>("https://ipapi.co/json/", {
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

ipData.value = {
  ip: ipInfo.value?.ip,
  country_name: ipInfo.value?.country_name,
  region: ipInfo.value?.region,
  city: ipInfo.value?.city,
  isp: ipInfo.value?.org,
  latitude: ipInfo.value?.latitude,
  longitude: ipInfo.value?.longitude,
};*/
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
          1a23:4567:c890:1234:5d6e:a78e:90eb:acd1
        </span>
      </div>
      <!-- Country info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconCountry
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Country:
        <span class="font-roboto font-light">Czech republic </span>
      </div>
      <!-- Region info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconRegion
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Region:
        <span class="font-roboto font-light"> Kralovehradecky kraj </span>
      </div>
      <!-- City info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconCity
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />City:
        <span class="font-roboto font-light">Hradec Králové </span>
      </div>
      <!-- Isp info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconIsp
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />ISP:
        <span class="font-roboto font-light">
          Vodafone Czech Republic a.s.
        </span>
      </div>
      <!-- Latitude info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconLatitude
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Latitude:
        <span class="font-roboto font-light"> 12.3456 </span>
      </div>
      <!-- Longtitude info -->
      <div class="flex flex-wrap items-center gap-1 font-poppins">
        <IconLongtitude
          class="stroke-accentLight dark:stroke-accentDark"
          :filled="true"
        />Longitude:
        <span class="font-roboto font-light"> 65.4321 </span>
      </div>
    </div>
  </div>
</template>
