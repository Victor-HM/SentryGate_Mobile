import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      
      <Screen
        name="Login"
        component={Login}
      />

      <Screen
        name="Home"
        component={Home}
      />
      
    </Navigator>
  );
}
