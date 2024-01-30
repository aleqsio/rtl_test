import { StyleSheet, Text, View, I18nManager, Platform } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>is RTL {I18nManager.isRTL ? "yes" : "no"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
