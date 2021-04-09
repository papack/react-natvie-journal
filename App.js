import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [data, setData] = useState([]);

  let textInputRef;

  //user input
  const handleSubmitEdit = (textToAdd) => {
    setData([...data, { date: new Date().toTimeString(), text: textToAdd }]);
    textInputRef.clear();
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
      <KeyboardAvoidingView>
        <TextInput
          returnKeyType="done"
          style={styles.input}
          placeholder="Tagebucheintrag..."
          ref={(item) => (textInputRef = item)}
          onSubmitEditing={(e) => handleSubmitEdit(e.nativeEvent.text)}
        />
      </KeyboardAvoidingView>
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
