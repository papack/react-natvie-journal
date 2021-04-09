import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text>{text || "No entry in the diary.."}</Text>
      <TextInput
        returnKeyType="done"
        style={styles.input}
        placeholder="Tagebucheintrag..."
        onChangeText={(text) => setText(text)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "95%",
  },
});
