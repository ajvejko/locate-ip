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
  const pending = ref(false);
  const ip = ref();
  const countryName = ref();
  const region = ref();
  const city = ref();
  const isp = ref();
  const latitude = ref();
  const longitude = ref();
  const fetchUserIpData = async () => {
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

      ip.value = ipInfo.value?.ip;
      countryName.value = ipInfo.value?.country_name;
      region.value = ipInfo.value?.region;
      city.value = ipInfo.value?.city;
      isp.value = ipInfo.value?.org;
      latitude.value = ipInfo.value?.latitude;
      longitude.value = ipInfo.value?.longitude;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSpecificIpData = async (selectedIP: string) => {
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

      ip.value = ipInfo.value?.ip;
      countryName.value = ipInfo.value?.country_name;
      region.value = ipInfo.value?.region;
      city.value = ipInfo.value?.city;
      isp.value = ipInfo.value?.org;
      latitude.value = ipInfo.value?.latitude;
      longitude.value = ipInfo.value?.longitude;
    } catch (error) {
      console.log(error);
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
