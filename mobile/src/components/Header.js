import {
  Avatar,
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Modal,
  Text,
  View,
  VStack,
  useColorMode,
  Image,
  useColorModeValue
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import { useContext, useState } from "react";
import { GoogleLogo } from "phosphor-react-native";
import Logo from '../assets/logo_orange.png'
import Context from "../contexts/Context";

export function Header() {
  const [showNotification, setShowNotification] = useState(false);

  const { colors } = useTheme();
  const { colorMode } = useColorMode()
  const { user } = useContext(Context)

  const notifications = [
    {
      id: "1",
      title: "Boletim Liberado!",
      description: "As suas notas já estão disponíveis na plataforma.",
      hour: "12:00",
    },
    {
      id: "2",
      title: "Boletim Liberado!",
      description: "As suas notas já estão disponíveis na plataforma.",
      hour: "12:00",
    },
  ];

  return (
    <HStack
      w="full"
      height={100}
      alignItems="center"
      justifyContent="space-between"
      bg={ useColorModeValue('#311B55', '#e9e9e9') }
      px={10}
    >
      <HStack alignItems="center" space={2}>
        <Avatar source={{ uri: "https://github.com/Victor-HM.png" }} />
        <VStack>
          <Text fontSize={16}>
            Olá, <Text color="orange.500">{user.nome}</Text>
          </Text>
          <Text>Bem Vindo!</Text>
        </VStack>
      </HStack>

      <HStack>
        <Ionicons
          name="notifications"
          size={24}
          color={colorMode === 'light' ? 'white' : "black"}
          onPress={() => setShowNotification(!showNotification)}
        />
        <Modal
          isOpen={showNotification}
          onClose={() => setShowNotification(false)}
        >
          <Modal.Content maxWidth="400px" _dark={{ backgroundColor: '#e0e0e0' }} _light={{ backgroundColor: 'purple.700' }}>
            <Modal.Body>
              <VStack space={5}>
                {notifications.map((prop) => (
                  <HStack key={prop.id} w="full" justifyContent="space-between" opacity={0.8}>
                    <VStack w="2/3">
                      <Text fontSize={20} fontWeight="bold">
                        {prop.title}
                      </Text>
                      <Text>{prop.description}</Text>
                    </VStack>
                    <Text>{prop.hour}</Text>
                  </HStack>
                ))}
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </HStack>
    </HStack>
  );
}
