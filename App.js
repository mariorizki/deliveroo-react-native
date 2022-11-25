import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SafeViewAndroid from "./util/SafeViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.droidSafeArea}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <View className="">
        <Text className="">Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}
