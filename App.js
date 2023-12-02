import React, { useState } from "react";
import {} from "react-native";
import { Platform, StyleSheet, StatusBar } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <WelcomeScreen />
    // <ViewImageScreen />;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //it takes entire screen
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
