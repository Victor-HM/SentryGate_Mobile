import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

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
import { FontAwesome } from "@expo/vector-icons";

export function CustomDrawer(props) {
  const navigation = useNavigation();
  const { colorMode, toggleColorMode } = useColorMode();
  let color = useColorModeValue("white", 'black')
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
      <VStack w="full" alignItems="center" space={10} mb={5}>
        <View position="absolute" left={5} top={5}>
          <FontAwesome name="gear" size={24} color={color} />
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
          <Heading textAlign="center">Victor Hugo</Heading>
          <Text textAlign="center" opacity={0.7}>
            (11) 96969-5347
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
