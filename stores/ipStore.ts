import { defineStore, acceptHMRUpdate } from "pinia";

interface AddressInfo {
  ip: string;
  country_name: string;
  region: string;
  city: string;
  org: string;
  latitude: number;
  longitude: number;
}

export const useIpStore = defineStore("ipStore", () => {
  const pending = ref<boolean>(false);
  const ip = ref<string | null>(null);
  const countryName = ref<string | null>(null);
  const region = ref<string | null>(null);
  const city = ref<string | null>(null);
  const isp = ref<string | null>(null);
  const latitude = ref<number | null>(null);
  const longitude = ref<number | null>(null);

  const fetchIpData = async (selectedIP?: string) => {
    pending.value = true;
    try {
      const url = selectedIP
        ? `https://ipapi.co/${selectedIP}/json/`
        : "https://ipapi.co/json/";
      const { data: ipInfo } = await useFetch<AddressInfo>(url, {
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
      if (ipInfo.value) {
        const {
          ip: ipVal,
          country_name: countryNameVal,
          region: regionVal,
          city: cityVal,
          org: orgVal,
          latitude: latitudeVal,
          longitude: longitudeVal,
        } = ipInfo.value;

        ip.value = ipVal;
        countryName.value = countryNameVal;
        region.value = regionVal;
        city.value = cityVal;
        isp.value = ipInfo.value?.org;
        latitude.value = latitudeVal;
        longitude.value = longitudeVal;
      }
    } catch (error) {
      console.error("Failed to fetch IP data", error);
    } finally {
      pending.value = false;
    }
  };

  return {
    ip,
    countryName,
    region,
    city,
    isp,
    latitude,
    longitude,
    fetchIpData,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIpStore, import.meta.hot));
}
