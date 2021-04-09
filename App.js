import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, FlatList, TextInput, Text, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSubmitEdit = () => {
    setData([...data, { date: new Date().toTimeString(), text: text }]);
    setText("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
      <TextInput
        returnKeyType="done"
        style={styles.input}
        placeholder="Tagebucheintrag..."
        value={text}
        onChangeText={(text) => {
          setText(text.toString());
        }}
        onSubmitEditing={handleSubmitEdit}
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
