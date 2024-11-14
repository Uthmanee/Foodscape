import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [locationReady, setLocationReady] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          const currentLocation = await Location.getCurrentPositionAsync({});
          const reverseGeocode = await Location.reverseGeocodeAsync({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          });
          if (reverseGeocode.length > 0) {
            setLocation({
              city: reverseGeocode[0].city,
              state: reverseGeocode[0].region,
            });
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLocationReady(true);
      }
    };

    getLocation();
  }, []);

  return { location, locationReady, setLocation };
};

export default useLocation;
