// import { data } from "../../data/Data";
import React from "react";
import {
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  HStack,
  Pressable,
  Text,
  useColorModeValue,
  View,
  VStack,
} from "native-base";
import { Image } from "react-native";

import { Header } from "../../components/Header";

import letter2 from "../../assets/letter-2.png";
import letter from "../../assets/letter.png";
import { useNavigation } from "@react-navigation/native";

export function Home({ navigation }) {
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

      <VStack w="full" px={5} space={5}>
        <Pressable
          w="full"
          bg="#6C63FF"
          py={5}
          px={8}
          justifyContent="space-between"
          alignItems="center"
          borderRadius={15}
          flexDirection='row'
          onPress={() => navigation.navigate('Declare')}
        >
          <VStack>
            <Text fontSize={20} color="white">
              Declarações
            </Text>
            <Text fontSize={20} color="white">
              académicas
            </Text>
          </VStack>
          <Image
            source={letter}
            style={{ width: 130, height: 90 }}
            alt="Imagem"
          />
        </Pressable>

        <Pressable
          w="full"
          bg="#3F3D56"
          py={5}
          px={8}
          justifyContent="space-between"
          alignItems="center"
          borderRadius={15}
          flexDirection='row'
          onPress={() => navigation.navigate('Boletim')}
        >
          <VStack>
            <Text fontSize={20} color="white" >
              Visualizar
            </Text>
            <Text fontSize={20} color="white">
              Boletim
            </Text>
          </VStack>
          <Image
            source={letter2}
            style={{ width: 170, height: 160 }}
            alt="Imagem"
          />
        </Pressable>
      </VStack>
    </VStack>
  );
}
