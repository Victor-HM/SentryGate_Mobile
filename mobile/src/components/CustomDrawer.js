import { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import {
  Avatar,
  Heading,
  Text,
  View,
  VStack,
  useColorMode,
  useColorModeValue,
  Divider,
} from "native-base";

import { Ionicons } from "@expo/vector-icons";
import Context from "../contexts/Context";
import { Loading } from "./Loading";

export function CustomDrawer(props) {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const { toggleColorMode } = useColorMode();
  const { user, setUser, setAuth } = useContext(Context);

  let color = useColorModeValue("white", "black");

  async function Exit() {
    await setLoading(true);
    await AsyncStorage.clear();
    setUser({});
    await setTimeout(() => {
      setAuth(false);
      setLoading(false);
      navigation.navigate("Login");
    }, 1000);
  }

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
      {loading ? <Loading /> : <></>}
      <VStack w="full" alignItems="center" space={10} mb={5}>
        <View position="absolute" left={5} top={5}>
          <Ionicons
            name="exit-outline"
            size={24}
            color={color}
            onPress={Exit}
          />
        </View>
        <View position="absolute" right={5} top={5}>
          {useColorModeValue(
            <Ionicons
              name="ios-sunny-sharp"
              size={24}
              color="white"
              onPress={toggleColorMode}
            />,
            <Ionicons
              name="md-moon"
              size={24}
              color="black"
              onPress={toggleColorMode}
            />
          )}
        </View>
        <Avatar
          source={{ uri: "https://github.com/Victor-HM.png" }}
          size="xl"
          onPress={toggleColorMode}
        />
        <VStack w="full" space={2}>
          <Heading textAlign="center"> {user.nome} </Heading>
          <Text textAlign="center" opacity={0.7}>
            {user.email}
          </Text>
        </VStack>

        <Divider w="1/2" bg={useColorModeValue("#414141", "#e1e1e1")} />
      </VStack>
      <VStack>
        <DrawerItemList {...props} />
      </VStack>
    </DrawerContentScrollView>
  );
}
