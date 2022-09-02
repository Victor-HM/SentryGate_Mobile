import { Alert, Center, CloseIcon, HStack, IconButton, Text, VStack } from "native-base";

export function AlertComponent({ setAlert }) {
 return (
   <Center w='full' position='absolute' zIndex={1000} top={50}>
     <Alert w="100%" status='error'>
       <VStack space={2} flexShrink={1} w="100%">
         <HStack flexShrink={1} space={2} justifyContent="space-between">
           <HStack space={2} flexShrink={1}>
             <Alert.Icon mt="1" />
             <Text fontSize="md" color="coolGray.800">
               Insira todos os campos
             </Text>
           </HStack>
           <IconButton
             onPress={() => setAlert(false)}
             variant="unstyled"
             _focus={{
               borderWidth: 0,
             }}
             icon={<CloseIcon size="3" />}
             _icon={{
               color: "coolGray.600",
             }}
           />
         </HStack>
       </VStack>
     </Alert>
     ;
   </Center>
 );
}