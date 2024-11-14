import React, { useContext, useEffect } from "react";
import * as Location from "expo-location";
import LocationContext from "../context/LocationContext";

const useLocation = ({ children }) => {
  const { setLocation } = useContext(LocationContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        setLocation({
          city: reverseGeocode[0].city,
          state: reverseGeocode[0].region,
        });
      }
    })();
  }, []);

  return <>{children}</>;
};

export default useLocation;

// import React, { useContext, useEffect } from "react";
// import * as Location from "expo-location";
// import LocationContext from "../context/LocationContext";

// const LocationFetcher = ({ children }) => {
//   const { updateLocation } = useContext(LocationContext);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       let reverseGeocode = await Location.reverseGeocodeAsync({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });

//       if (reverseGeocode.length > 0) {
//         updateLocation({
//           neighbourhood: reverseGeocode[0].city,
//           state: reverseGeocode[0].region,
//         });
//       }
//     })();
//   }, []);

//   return <>{children}</>;
// };

// export default LocationFetcher;
