import { Heading, HStack, Switch, Text, VStack, useColorMode } from "native-base";
import { HeaderNavigation } from "../../components/HeaderNavigation";

export function Config() {

 const { colorMode, toggleColorMode } = useColorMode()
 return(
  <VStack w='full' h='full' _light={{ backgroundColor: 'purple.600' }} _dark={{ backgroundColor: 'white' }} px={10}>
   <HeaderNavigation />
   <VStack space={5}>
    <Heading 
    >
     Configurações
    </Heading>
    <HStack w='full' alignItems='center' justifyContent='space-between'>
     <Text>
      Modo Claro
     </Text>
     <Switch 
      onTrackColor="purple.500" 
      isChecked={colorMode === 'dark'}
      onToggle={toggleColorMode}
      aria-label={
       colorMode === 'light' ? "Troque para o tema escuro" : 'Troque para o tema claro'
      }
     />
    </HStack>
   </VStack>
  </VStack>
 )
}