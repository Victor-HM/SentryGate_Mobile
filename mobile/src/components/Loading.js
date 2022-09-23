import { Spinner, View } from "native-base";

export function Loading() {
  return (
    <View
      w="full"
      h="full"
      bg="rgba(0, 0, 0, 0.4)"
      position="absolute"
      zIndex={1000}
      justifyContent="center"
      alignItems="center"
    >
      <Spinner
        color="warning.500"
        size="lg"
        position="absolute"
        justifyContent="center"
        alignItems="center"
        opacity={1}
      />
    </View>
  );
}
