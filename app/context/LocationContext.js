import React, { createContext, useState } from "react";

const LocationContext = createContext({
  location: {},
  setLocation: () => {},
});

export const LocationProvider = ({ children, value }) => (
  <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
);

export default LocationContext;

// import React, { createContext, useState } from "react";

// const LocationContext = createContext({
//   location: {},
//   updateLocation: () => {},
// });

// export const LocationProvider = ({ children }) => {
//   const [location, setLocation] = useState({});

//   const updateLocation = (locationData) => {
//     setLocation(locationData);
//   };

//   return (
//     <LocationContext.Provider value={{ location, updateLocation }}>
//       {children}
//     </LocationContext.Provider>
//   );
// };

// export default LocationContext;
