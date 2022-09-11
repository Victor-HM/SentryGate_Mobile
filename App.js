import { NativeBaseProvider, StatusBar, useColorMode } from "native-base";
import 'react-native-gesture-handler';
import { Routes } from "./src/Routes";
import { THEME } from "./src/theme/theme";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import {enableScreens} from 'react-native-screens';

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
