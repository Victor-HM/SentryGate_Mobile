import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Select,
  Spinner,
  Text,
  useColorModeValue,
  useTheme,
  View,
  VStack,
} from "native-base";
import { useState } from "react";
import { AlertComponent } from "../../components/AlertComponent";
import { HeaderNavigation } from "../../components/HeaderNavigation";

export function Declare({ navigation }) {
  const { colors } = useTheme();

  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typeDeclare, setTypeDeclare] = useState("");
  const [messageDeclare, setMessageDeclare] = useState("");

  async function handleSubmit() {
    if (typeDeclare === "" || messageDeclare === "") {
      setAlert(true);
    } else {
      await setLoading(true);
      await setTimeout(() => {
        setLoading(false);
        navigation.goBack();
      }, 1000);
    }
  }

  return (
    <VStack w="full" h="full" bg={useColorModeValue("purple.600", 'white')}>
      {alert ? <AlertComponent setAlert={setAlert} /> : <></>}

      {loading ? (
        <>
        <View w='full' h='full' bg='rgba(0, 0, 0, 0.4)' position="absolute" zIndex={1000} justifyContent='center' alignItems='center'>
          <Spinner
            color="warning.500"
            size="lg"
            position="absolute"
            justifyContent='center'
            alignItems='center'
            opacity={1}
          />

        </View>
        </>
      ) : (
        <></>
      )}
      <HeaderNavigation />
      <VStack w="full" px={5} space={10}>
        <Center w="full" h={24} bg="#6C63FF" borderRadius={10}>
          <Heading color='white'>Declaração Escolar</Heading>
        </Center>

        <VStack space={5}>
          <FormControl
            isRequired
            isInvalid={alert && typeDeclare === "" ? true : false}
          >
            <FormControl.Label>Selecione a declaração</FormControl.Label>
            <Select
              borderColor="gray.500"
              accessibilityLabel="Entrar Como"
              placeholder="Selecione o bimestre"
              onValueChange={(e) => setTypeDeclare(e)}
            >
              <Select.Item label="Escolaridade 3º Ano" value={0} />
              <Select.Item label="Escolaridade 2º Ano" value={1} />
              <Select.Item label="Declaração de Matricula Modular" value={2} />
              <Select.Item label="Conclusão com Escolaridade" value={2} />
              <Select.Item label="Declaração de Conclusão/Modular" value={2} />
              <Select.Item label="Declaração EMTU" value={2} />
              <Select.Item label="FATEC - Mencões 1º Ano" value={2} />
              <Select.Item label="Declaração de Matricula ETIM" value={2} />
              <Select.Item label="Declaração de Recesso" value={2} />
              <Select.Item label="Declaração de Conclusão/ETIM" value={2} />
              <Select.Item
                label="Declaração de Extravio de Bilhete Escolar"
                value={2}
              />
              <Select.Item label="FATEC Menções 2º Ano" value={2} />
            </Select>
            <FormControl.ErrorMessage>
              Campo vazio ou inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={alert && messageDeclare === "" ? true : false}
          >
            <FormControl.Label>
              Para qual finalidade será a declaração?
            </FormControl.Label>
            <Input
              h={16}
              placeholder="Ex: Para o transporte"
              borderColor="gray.500"
              onChangeText={(e) => setMessageDeclare(e)}
              _focus={{
                borderWidth: 1,
                borderColor: colors.orange[500],
              }}
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
            onPress={handleSubmit}
            _pressed={{
              shadow: 0,
              top: 1,
            }}
          >
            <Text
              fontSize="2xl"
              color="white"
              fontFamily="body"
              fontWeight="400"
            >
              Enviar
            </Text>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
}
