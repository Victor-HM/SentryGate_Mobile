import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../components/CustomDrawer";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

import { Home } from "../pages/Home";
import { User } from "../pages/User";
import { Config } from "../pages/Config";

import { useColorModeValue } from "native-base";

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  let color = useColorModeValue("white", 'black')

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: useColorModeValue("#1D0B3B", 'white') },
        drawerActiveBackgroundColor: 'transparent'
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ 
          drawerLabelStyle: { color: useColorModeValue("white", 'black') }, 
          drawerIcon: () => <Entypo name="home" size={24} color={color} />
        }}
      />
      <Drawer.Screen
        name="User"
        component={User}
        options={{ 
          drawerLabelStyle: { color: useColorModeValue("white", 'black') }, 
          drawerIcon: () => <FontAwesome name="user" size={24} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}
