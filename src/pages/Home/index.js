import React from "react";
import {
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  View,
  VStack,
} from "native-base";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Header } from "../../components/Header";
import { data } from "../../data/Data";

export function Home() {
  let color = useColorModeValue("purple.700", "black");
  return (
    <VStack
      w="full"
      h="full"
      _light={{ backgroundColor: "purple.600" }}
      _dark={{ backgroundColor: "white" }}
      space={5}
    >
      <Header />
      <HStack w="full" h={64} px={5}>
        <FlatList
          data={data.slice(0, 3)}
          horizontal={true}
          renderItem={({ item }) => (
            <Box
              h={64}
              w="56"
              bg="purple.700"
              mr={10}
              borderRadius={10}
              keyExtractor={(item) => item.id}
            >
              <VStack w="full" alignItems="center" pb={16} pt={5}>
                <Heading>{item.disciplina}</Heading>
                <VStack h='full' alignItems="center" justifyContent='space-around'>
                  <VStack alignItems='center' space={2}>
                    <Text fontSize={18}>Frequência</Text>
                    <Heading>{item.frequencia}</Heading>
                  </VStack>

                  <VStack alignItems='center' space={2}>
                    <Text fontSize={18}>Média Geral</Text>
                    <Heading color={item.media != 'I' ? '#0C71AA' : '#F10A0A'}>{item.media}</Heading>
                  </VStack>

                </VStack>
              </VStack>
            </Box>
          )}
        />
      </HStack>
    </VStack>
  );
}
