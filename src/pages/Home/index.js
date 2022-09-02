import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

export function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Button>Clique em mim</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#210d41",
    alignItems: "center",
    justifyContent: "center",
  },
});
