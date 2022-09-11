import { HStack, useColorMode, useTheme } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export function HeaderNavigation() {
 const navigation = useNavigation()
 const { colors } = useTheme()
 const { colorMode } = useColorMode()

 function goBack() {
  navigation.goBack()
 }

 return (
  <HStack 
   w='full'
   height={100}
   alignItems='center'
   justifyContent='space-between'
  >
  <AntDesign name="arrowleft" size={24} color={ colorMode === 'light' ? 'white' : 'black' } onPress={goBack} />
  </HStack>
 )
}