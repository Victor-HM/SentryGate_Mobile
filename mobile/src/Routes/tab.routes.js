import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { User } from "../pages/User";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

import { useTheme, useColorMode } from "native-base";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {

  const { colorMode } = useColorMode()
  const { colors } = useTheme()
  let theme = colorMode === 'light' ? colors.purple[700] : 'white'

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingVertical: 10,
          backgroundColor: theme,
          borderTopWidth: 0,
        },
        
        tabBarActiveTintColor: "#f9943b",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
          tabBarShowLabel: false
        }}
      />
      <Screen
        name="Usuario"
        component={User}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <FontAwesome name="user" size={size} color={color} />
          },
          tabBarShowLabel: false
        }}
      />
      
    </Navigator>
  );
}
