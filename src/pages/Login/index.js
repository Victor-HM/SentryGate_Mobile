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

//components
import { AlertComponent } from "../../components/AlertComponent";

export function Login({ navigation }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const { colors } = useTheme();

  function handleSubmit() {
    if (type === "" || code === "" || email === "" || password === "") {
      setAlert(true);
    } else {
      navigation.navigate("Home");
    }
  }

  return (
    <Center width="full" height="full" backgroundColor="purple.600">
      {alert ? <AlertComponent setAlert={setAlert} /> : <></>}

      <View width={250} height={250}>
        <Lottie source={require("../../assets/welcome.json")} autoPlay loop />
      </View>

      <Box width="full" px="12" mt={10}>
        <Heading color="white" mb="2" fontFamily='body' fontWeight='700'>
          Entrar <Text color="orange.500">{type}</Text>{" "}
        </Heading>

        <VStack space="2">
          <HStack width="full" justifyContent="space-between">
            <FormControl width="40" isInvalid={ alert && type === '' ? true : false }>
              <Select
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
              <FormControl.ErrorMessage>
                Campo vazio ou inválido
              </FormControl.ErrorMessage>
                
            </FormControl>

            <FormControl width={32} isInvalid={ alert && code === '' ? true : false }>
              <Input
                placeholder="Código"
                borderColor="gray.500"
                color="white"
                keyboardType="numeric"
                maxLength={3}
                onChangeText={e => setCode(e)}
                _focus={{
                  borderWidth: 1,
                  borderColor: colors.orange[500],
                  backgroundColor: colors.purple[600],
                }}
              />
              <FormControl.ErrorMessage>
                Campo vazio ou inválido
              </FormControl.ErrorMessage>

            </FormControl>

          </HStack>

          <FormControl isRequired isInvalid={ alert && email === '' ? true : false }>

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
              Campo vazio ou inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={ alert && password === '' ? true : false } >
            
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
              top: 1
            }}
            onPress={handleSubmit}
          >
            <Text fontSize="2xl" color="white" fontFamily='body' fontWeight='400' >
              Entrar
            </Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
