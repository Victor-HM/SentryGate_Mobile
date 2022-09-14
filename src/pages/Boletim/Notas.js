import { Heading, HStack, Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

export function Notas({ props, ano, bimestre }) {

  const navigation = useNavigation()
  return (
    <Pressable
      bg="#3F3D56"
      w="72"
      p={7}
      mr={5}
      flexDirection="column"
      justifyContent="space-between"
      borderRadius={10}
      onPress={() => navigation.navigate("Materia", { boletim: props, ano: ano, bimestre: bimestre })}
    >
      <Heading color='white'>{props.materia}</Heading>
      <HStack w="full" justifyContent="space-between">
        <Text fontSize={18} color="white">
          {props.frenquecia[ano][bimestre]}
        </Text>
        <Text
          fontSize={22}
          color={props.nota[ano][bimestre] > 5 ? "#0C71AA" : "#F10A0A"}
        >
          {props.nota[ano][bimestre]}
        </Text>
      </HStack>
    </Pressable>
  );
}
