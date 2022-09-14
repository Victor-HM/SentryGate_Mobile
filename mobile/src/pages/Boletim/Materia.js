import {
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import { HeaderNavigation } from "../../components/HeaderNavigation";

export function Materia({ route }) {
  const boletim = route.params.boletim;
  const ano = route.params.ano;
  const bimestre = route.params.bimestre;
  return (
    <VStack w="full" h="full" bg={useColorModeValue('purple.600', 'white')}>
      <HeaderNavigation />

      <VStack w="full" px={5} space={10}>
        <VStack w='full' bg='orange.500' p={5} space={3} justifyContent='space-between' borderRadius={10}>
         <Text fontSize={16}>Boletim Final</Text>
         <Text>Victor Hugo Carvalho Moreira dos Santos</Text>
        </VStack>
        <Center w="full" h={24} bg="#6C63FF" borderRadius={10}>
          <Heading color='white'>{boletim.materia}</Heading>
        </Center>

        <VStack
          w="full"
          h={64}
          bg="#3F3D56"
          justifyContent="space-between"
          px={5}
          py={5}
          borderRadius={10}
        >
          <HStack w="full" justifyContent="space-between">
            <Text fontSize={16} color='white'>Avaliação Final</Text>
            <Text
              fontSize={20}
              color={boletim.notaFinal[ano] > 5 ? "#0C71AA" : "#F10A0A"}
            >
              {boletim.notaFinal[ano]}
            </Text>
          </HStack>

          <Divider />

          <HStack w="full" justifyContent="space-between">
            <Text fontSize={16} color='white'>Frequência Final</Text>
            <Text
              fontSize={16}
              color='white'
            >
              {boletim.frequenciaFinal[ano]}
            </Text>
          </HStack>

          <Divider />

          <HStack w="full" justifyContent="space-between">
            <Text fontSize={16} color='white'>Observação</Text>
            <Text
              fontSize={16}
              color='white'
            >
             Ótimo desempenho
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
