import { Image } from "react-native-expo-image-cache";
import { View, StyleSheet } from "react-native";

const CachedImageBackground = ({
  alignItems = "",
  children,
  justifyContent = "center",
  previewUrl = "",
  style,
  uri,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={StyleSheet.absoluteFillObject}
        preview={{
          uri: previewUrl,
        }}
        tint="light"
        uri={uri}
      />
      <View style={[styles.content, { alignItems, justifyContent }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
  },
});

export default CachedImageBackground;

// import { Image } from "react-native-expo-image-cache";
// import { View, StyleSheet } from "react-native";

// const CachedImageBackground = ({
//   alignItems = "",
//   children,
//   justifyContent = "center",
//   style,
//   uri,
// }) => {
//   return (
//     <View style={[styles.container, style]}>
//       <Image
//         style={StyleSheet.absoluteFillObject}
//         preview={{
//           uri: "https://firebasestorage.googleapis.com/v0/b/react-practice-3b04d.appspot.com/o/thumbnail%2Fthumnail.png?alt=media&token=05f80303-81b1-434a-bf73-e4796170c565",
//         }}
//         tint="light"
//         uri={uri}
//       />
//       <View style={[styles.content, { alignItems, justifyContent }]}>
//         {children}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
//   content: {
//     flex: 1,
//   },
// });

// export default CachedImageBackground;
