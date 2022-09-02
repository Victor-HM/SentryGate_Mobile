import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Center,
  CloseIcon,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Select,
  Text,
  useTheme,
  View,
  VStack,
} from "native-base";
import Lottie from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AlertComponent({ setAlert }) {
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

export function Login({ navigation }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const { colors } = useTheme();

  function handleSubmit() {
    if (email === "" || password === "") {
      setAlert(true);
    } else {
      navigation.navigate("Home");
    }
  }

  return (
    <Center width="full" height="full" backgroundColor="#210d41">
      {alert ? <AlertComponent setAlert={setAlert} /> : <></>}

      <View width={200} height={200}>
        <Lottie source={require("../../assets/welcome.json")} autoPlay loop />
      </View>

      <Box width="full" px="12" mt={10}>
        <Heading color="white" mb="2">
          Entrar <Text color="orange.500">{type}</Text>{" "}
        </Heading>

        <VStack space="2">
          <HStack width="full" justifyContent="space-between">
            <Select
              width="40"
              color="white"
              borderColor="gray.500"
              accessibilityLabel="Entrar Como"
              placeholder="Entrar Como"
              selectedValue={type}
              onValueChange={(e) => setType(e)}
            >
              <Select.Item label="Professor" value="Professor" />
              <Select.Item label="Aluno" value="Aluno" />
              <Select.Item label="Responsavel" value="Responsavel" />
            </Select>

            <Input
              width={32}
              placeholder="Código"
              borderColor="gray.500"
              color="white"
              _focus={{
                borderWidth: 1,
                borderColor: colors.orange[500],
                backgroundColor: colors.purple[600],
              }}
            />
          </HStack>

          <FormControl isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              h={16}
              color="white"
              placeholder="seu@email.com.br"
              backgroundColor="purple.800"
              borderColor="gray.500"
              _focus={{
                borderWidth: 1,
                borderColor: colors.orange[500],
              }}
              onChangeText={(e) => setEmail(e)}
              InputLeftElement={
                <Icon
                  as={
                    <MaterialCommunityIcons name="email-newsletter" size={24} />
                  }
                  size={5}
                  ml={3}
                />
              }
            />
            <FormControl.ErrorMessage>
              Campo vazio ou email inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              h={16}
              color="white"
              placeholder="Sua senha"
              backgroundColor="purple.800"
              borderColor="gray.500"
              _focus={{
                borderWidth: 1,
                borderColor: colors.orange[500],
              }}
              type={show ? "text" : "password"}
              onChangeText={(e) => setPassword(e)}
              InputLeftElement={
                <Icon as={<Entypo name="key" size={24} />} size={5} ml={3} />
              }
              InputRightElement={
                <Icon
                  as={
                    show ? (
                      <AntDesign name="eye" size={24} color="black" />
                    ) : (
                      <AntDesign name="eyeo" size={24} />
                    )
                  }
                  size={7}
                  mr={5}
                  onPress={() => setShow(!show)}
                />
              }
            />
            <FormControl.ErrorMessage>
              Campo vazio ou senha inválida
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            backgroundColor="orange.500"
            mt={4}
            h={12}
            onPress={handleSubmit}
          >
            <Text fontSize="2xl" color="white">
              Entrar
            </Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
