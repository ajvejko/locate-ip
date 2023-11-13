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
  const fetchUserIpData = async () => {
    pending.value = true;
    try {
      const { data: ipInfo, pending } = await useFetch<AddressInfo>(
        "https://ipapi.co/json/",
        {
          pick: [
            "ip",
            "country_name",
            "region",
            "city",
            "org",
            "latitude",
            "longitude",
          ],
        },
      );
      if (ipInfo.value) {
        ip.value = ipInfo.value?.ip;
        countryName.value = ipInfo.value?.country_name;
        region.value = ipInfo.value?.region;
        city.value = ipInfo.value?.city;
        isp.value = ipInfo.value?.org;
        latitude.value = ipInfo.value?.latitude;
        longitude.value = ipInfo.value?.longitude;
      }
    } catch (error) {
      console.log("Failed to fetch user IP data", error);
    } finally {
      pending.value = false;
    }
  };
  const fetchSpecificIpData = async (selectedIP: string) => {
    pending.value = true;
    try {
      const { data: ipInfo, pending } = await useFetch<AddressInfo>(
        `https://ipapi.co/${selectedIP}/json/`,
        {
          pick: [
            "ip",
            "country_name",
            "region",
            "city",
            "org",
            "latitude",
            "longitude",
          ],
        },
      );
      if (ipInfo.value) {
        ip.value = ipInfo.value?.ip;
        countryName.value = ipInfo.value?.country_name;
        region.value = ipInfo.value?.region;
        city.value = ipInfo.value?.city;
        isp.value = ipInfo.value?.org;
        latitude.value = ipInfo.value?.latitude;
        longitude.value = ipInfo.value?.longitude;
      }
    } catch (error) {
      console.log("Failed to fetch selected IP data", error);
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
    fetchUserIpData,
    fetchSpecificIpData,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIpStore, import.meta.hot));
}
