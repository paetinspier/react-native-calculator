import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "./src/context/ThemeContext";
import { StyleSheet, Text, SafeAreaView, Switch } from "react-native";
import { myColors } from './src/styles/Colors';
import Button from "./src/components/Button";
import MyKeyboard from "./src/components/MyKeyboard";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#000" }]
        }
      >
        <StatusBar style="auto" />
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyboard/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
