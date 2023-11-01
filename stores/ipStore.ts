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
  const ipData = ref();
  const fetchUserIpData = async (data: AddressInfo) => {
    try {
      const { data: ipInfo } = await useFetch<AddressInfo>(
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
    } catch (error) {
      console.log(error);
    }
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIpStore, import.meta.hot));
}
