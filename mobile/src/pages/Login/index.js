import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  useTheme,
  View,
  VStack,
  Spinner,
} from "native-base";

import Lottie from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AlertComponent } from "../../components/AlertComponent";
import { Loading } from "../../components/Loading";
import Context from "../../contexts/Context";

export function Login() {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { colors } = useTheme();
  const { user, setUser, setAuth } = useContext(Context);

  async function handleSubmit() {
    if (type === "" || email === "" || password === "") {
      setAlert(true);
    } else {
      await setLoading(true);
      try {
        const response = await api.post("/alunos", {
          email: email,
          senha: password,
        });

        await AsyncStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
      await setTimeout(() => {
        setAuth(true);
        setLoading(false);
        navigation.navigate("DrawerRoute");
      }, 1000);
    }
  }

  return (
    <Center
      width="full"
      height="full"
      _light={{ backgroundColor: "purple.600" }}
      _dark={{ backgroundColor: "white" }}
    >
      {alert ? <AlertComponent setAlert={setAlert} /> : <></>}

      {loading ? <Loading /> : <></>}

      <View width={250} height={250}>
        <Lottie source={require("../../assets/welcome.json")} autoPlay loop />
      </View>

      <Box width="full" px="12" mt={10}>
        <Heading mb="2" fontFamily="body" fontWeight="700">
          Entrar
        </Heading>

        <VStack space="2">
          <HStack width="full" justifyContent="space-between">
            <FormControl
              width="full"
              isInvalid={alert && type === "" ? true : false}
            >
              <Select
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
              <FormControl.ErrorMessage>
                Campo vazio ou inválido
              </FormControl.ErrorMessage>
            </FormControl>
          </HStack>

          <FormControl
            isRequired
            isInvalid={alert && email === "" ? true : false}
          >
            <FormControl.Label>Email</FormControl.Label>
            <Input
              h={16}
              placeholder="seu@email.com.br"
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
              Campo vazio ou inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={alert && password === "" ? true : false}
          >
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              h={16}
              placeholder="Sua senha"
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
              Campo vazio ou inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            backgroundColor="orange.500"
            mt={4}
            h={12}
            shadow={8}
            _pressed={{
              shadow: 0,
              top: 1,
            }}
            onPress={handleSubmit}
          >
            <Text
              fontSize="2xl"
              color="white"
              fontFamily="body"
              fontWeight="400"
            >
              Entrar
            </Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
