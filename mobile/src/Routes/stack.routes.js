import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DrawerRoutes } from "./drawer.routes";
import { Login } from "../pages/Login";
import { Materia } from "../pages/Boletim/Materia";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  const response = AsyncStorage.getItem("user");

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Main" component={response ? DrawerRoutes : Login} />

      <Screen name="Login" component={Login} />

      <Screen name="DrawerRoute" component={DrawerRoutes} />

      <Screen name="Materia" component={Materia} />
    </Navigator>
  );
}
