import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  Pressable,
  Select,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import { FlatList } from "react-native";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { Notas } from "./Notas";
import { data } from "../../data/Data";
import { useState } from "react";

export function Boletim({ navigation }) {
  const [bimestre, setBimestre] = useState(0);
  const [ano, setAno] = useState(0);
  return (
    <VStack w="full" h="full" backgroundColor={useColorModeValue('purple.600', 'white')} alignItems="center">
      <HeaderNavigation />

      <Heading fontSize={30} color="orange.500" mb={10}>
        Boletim
      </Heading>

      <VStack w="full" px={5} space={10}>
        <VStack w="full" bg="orange.500" borderRadius={10} p={5} space={3}>
          <Text fontSize={20}>Última atualização</Text>
          <HStack w="full" justifyContent="space-between">
            <Text>14/09/2022</Text>
            <Text>10:00 AM - 12::00 PM</Text>
          </HStack>
        </VStack>

        <Select
          borderColor="gray.500"
          accessibilityLabel="Entrar Como"
          onValueChange={(e) => setAno(e)}
          selectedValue={ano}
          placeholder="Selecione o bimestre"
        >
          <Select.Item label="1º Ano" value={0} />
          <Select.Item label="2º Ano" value={1} />
          <Select.Item label="3º Ano" value={2} />
        </Select>

        <Select
          borderColor="gray.500"
          accessibilityLabel="Entrar Como"
          onValueChange={(e) => setBimestre(e)}
          selectedValue={bimestre}
          placeholder="Selecione o bimestre"
        >
          <Select.Item label="1º Bimestre" value={0} />
          <Select.Item label="2º Bimestre" value={1} />
          <Select.Item label="3º Bimestre" value={2} />
          <Select.Item label="4º Bimestre" value={3} />
        </Select>

        <Heading>Matérias Academicas</Heading>

        <HStack w="full" h={150}>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
              <Notas props={item} ano={ano} bimestre={bimestre} />
            )}
          />
        </HStack>
      </VStack>
    </VStack>
  );
}
