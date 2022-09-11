import { Box, Center, Heading, HStack, Text, View, VStack } from "native-base";

export function Notas({ props }) {
  return (
    <Box w="full" h={220} backgroundColor="white" borderRadius={5} mb={5}>
      <VStack w="full" h="full">
        <View
          h={6}
          justifyContent="center"
          borderBottomWidth={1}
          borderColor="gray.700"
        >
          <Heading
            color="black"
            fontSize={20}
            textAlign="center"
            fontWeight="bold"
          >
            {props.disciplina}
          </Heading>
        </View>

        <HStack
          h={175}
        >
          <VStack
            h="full"
            justifyContent="space-between"
            flex={1}
          >
            <Center>
              <Text> Avaliação </Text>
            </Center>
            <Center>
              <Text> 1ºBimestre </Text>
            </Center>

            <Center>
              <Text> 2ºBimestre </Text>
            </Center>

            <Center>
              <Text> 3ºBimestre </Text>
            </Center>

            <Center>
              <Text> 4ºBimestre </Text>
            </Center>
          </VStack>

          <VStack
            h="full"
            justifyContent="space-between"
            borderLeftWidth={1}
            borderRightWidth={1}
            borderColor="black"
            flex={1}
          >
            <Center>
              <Text> Nota </Text>
            </Center>
            <Center>
              <Text color={props.nota[0] != "I" ? "#0C71AA" : "##F10A0A"}>
                {props.nota[0]}
              </Text>
            </Center>

            <Center>
              <Text color={props.nota[1] != "I" ? "#0C71AA" : "##F10A0A"}>
                {props.nota[1]}
              </Text>
            </Center>

            <Center>
              <Text color={props.nota[2] != "I" ? "#0C71AA" : "##F10A0A"}>
                {props.nota[2]}
              </Text>
            </Center>

            <Center>
              <Text color={props.nota[3] != "I" ? "#0C71AA" : "##F10A0A"}>
                {props.nota[3]}
              </Text>
            </Center>
          </VStack>

          <VStack
            h="full"
            justifyContent="space-between"
            flex={1}
          >
            <Center>
              <Text> Faltas </Text>
            </Center>
            <Center>
              <Text> {props.faltas[0]} </Text>
            </Center>

            <Center>
              <Text> {props.faltas[1]} </Text>
            </Center>

            <Center>
              <Text> {props.faltas[2]} </Text>
            </Center>

            <Center>
              <Text> {props.faltas[3]} </Text>
            </Center>
          </VStack>
        </HStack>

        <Center flexDirection='row'>
         <Text>Média: </Text>
         <Text> {props.media} </Text>
        </Center>

      </VStack>
    </Box>
  );
}
