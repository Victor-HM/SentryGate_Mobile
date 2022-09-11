import { Box, Divider, Heading, HStack, Icon, Text, VStack } from "native-base";
import { FlatList } from "react-native";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Notas } from "./Notas";
import { data } from "../../data/Data";

export function Boletim() {

 return(
  <VStack w='full' h='full' backgroundColor='purple.600' alignItems='center' >
   <HeaderNavigation />

   <Heading fontSize={30} color='orange.500' mb={10}>Boletim</Heading>

   <VStack w='full' h={650} px={5} >

    <FlatList
     data={data}
     renderItem={({ item }) => <Notas props={item} keyExtractor={item => item.id} />} 
     
    />

   </VStack>
  </VStack>
 )
}