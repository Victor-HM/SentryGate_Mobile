import { HStack, Image, Text, useColorMode } from "native-base";
import { Octicons } from "@expo/vector-icons";
import Logo from '../assets/logo_orange.png'
import { useNavigation } from "@react-navigation/native";

export function HeaderProfile() {

  const navigation = useNavigation()

  function goConfig() {
    navigation.navigate('Config')
  }

  const { colorMode } = useColorMode()

  return (
    <HStack
      w="full"
      height={100}
      alignItems="center"
      justifyContent="space-between"  
      px={10}
    >
      <Image source={Logo} alt='Logo' size='sm' />
      <Octicons name="gear" size={24} color={ colorMode === 'light' ? 'white' : 'black' } onPress={goConfig} />
    </HStack>
  );
}
