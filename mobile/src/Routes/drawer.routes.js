import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../components/CustomDrawer";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from "../pages/Home";
import { User } from "../pages/User";
import { Config } from "../pages/Config";
import { Boletim } from "../pages/Boletim";

import { useColorModeValue } from "native-base";
import { Declare } from "../pages/Declare";

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  let color = useColorModeValue("white", "black");

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: useColorModeValue("#1D0B3B", "white") },
        drawerActiveBackgroundColor: "transparent",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabelStyle: { color: useColorModeValue("white", "black") },
          drawerIcon: () => <Entypo name="home" size={24} color={color} />,
          drawerLabel: 'Tela Inicial'
        }}
      />
      <Drawer.Screen
        name="Boletim"
        component={Boletim}
        options={{
          drawerLabelStyle: { color: useColorModeValue("white", "black") },
          drawerIcon: () => (
            <AntDesign name="areachart" size={24} color={color} />
          ),
          drawerLabel: 'Boletim Escolar'
        }}
      />
      <Drawer.Screen
        name="Declare"
        component={Declare}
        options={{
          drawerLabelStyle: { color: useColorModeValue("white", "black") },
          drawerIcon: () => (
            <MaterialCommunityIcons name="email-newsletter" size={24} color={color} />
          ),
          drawerLabel: 'Declaração Académica'
        }}
      />
    </Drawer.Navigator>
  );
}
