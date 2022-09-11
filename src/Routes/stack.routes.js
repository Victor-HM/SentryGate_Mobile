import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { DrawerRoutes } from "./drawer.routes";

import { Login } from "../pages/Login";
import { Boletim } from "../pages/Boletim";
import { Home } from "../pages/Home";
import { User } from "../pages/User";
import { Config } from "../pages/Config";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={Login} />

      <Screen name="Config" component={DrawerRoutes} />

      <Screen name="User" component={User} />
    </Navigator>
  );
}
