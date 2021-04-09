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

  //show "no content hint or flatlist"
  let content = <Text>no journal entrys..</Text>;
  if (data.length > 0) {
    content = (
      <FlatList
        data={data}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    );
  }

  return (
    <View style={styles.container}>
      {content}
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
