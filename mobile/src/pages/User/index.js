import { Avatar, Heading, Text, VStack } from "native-base";
import { HeaderProfile } from "../../components/HeaderProfile";

export function User() {
 return(
  <VStack w='full' h='full' alignItems='center' _light={{ backgroundColor: 'purple.600' }} _dark={{ backgroundColor: 'white' }} >
   <VStack alignItems='center' space={10} py={20}>
    <Avatar 
     source={{ uri: 'https://github.com/Victor-HM.png' }} 
     size='2xl' 
     borderWidth={5} 
     borderColor='purple.500'
    />
    <VStack w='full' alignItems='center' >
     <Heading color='orange.500' fontSize={30} >Victor Hugo</Heading>
     <Text fontSize={18} >Carvalho Moreira dos Santos</Text>
    </VStack>
   </VStack>

  </VStack>
 )
}