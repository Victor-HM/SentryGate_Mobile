import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1d0b3b',
          borderWidth: 0
        },
        tabBarActiveTintColor: '#f9943b',
        tabBarInactiveTintColor: 'gray'
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Entypo name="home" size={size} color={color} />
          }
        }}
      />
      <Screen
        name="Settings"
        component={Login}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <AntDesign name="home" size={size} color={color} />
          }
        }}
      />
    </Navigator>
  );
}
