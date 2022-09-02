import { NativeBaseProvider, StatusBar } from "native-base";
import { View } from "react-native";
import { Home } from "./src/pages/Home";
import { Routes } from "./src/Routes";
import { THEME } from "./src/theme/theme";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
        backgroundColor={THEME.colors.purple[600]}
        barStyle="light-content"
      />
      <Routes />
    </NativeBaseProvider>
  );
}
